<template>
  <div class="custom-navbar-history-list">
    <div class="header">
      <div class="header-row">
        <div class="search">
          <TextBox v-model="search" placeholder="搜索" linear></TextBox>
        </div>
        <div class="operations">
          <div
            class="operation"
            @click="toggleHistoryPause"
          >
            <VButton v-if="!paused" title="暂停记录历史" round>
              <VIcon icon="mdi-pause" :size="14"></VIcon>
            </VButton>
            <VButton v-else title="继续记录历史" round>
              <VIcon icon="mdi-play" :size="14"></VIcon>
            </VButton>
          </div>
          <a
            class="operation"
            target="_blank"
            href="https://www.bilibili.com/account/history"
          >
            <VButton title="查看更多" round>
              <VIcon icon="mdi-dots-horizontal" :size="18"></VIcon>
            </VButton>
          </a>
        </div>
      </div>
      <div class="header-row">
        <div class="row-title">
          过滤:
        </div>
        <div class="type-filters">
          <div v-for="t of types" :key="t.name" class="type-filter">
            <VButton
              round
              :title="(t.checked ? '不显示' : '显示') + t.displayName"
              :class="{ checked: t.checked }"
              @click="toggleTypeFilter(t)"
            >
              <VIcon :icon="t.icon" :size="18"></VIcon>
              {{ t.displayName }}
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <VLoading v-if="loading"></VLoading>
      <VEmpty v-else-if="!loading && groups.length === 0"></VEmpty>
      <transition-group v-else name="cards" tag="div" class="cards">
        <div v-for="g of groups" :key="g.name" class="time-group">
          <div class="time-group-name">
            {{ g.name }}
          </div>
          <transition-group
            name="time-group"
            tag="div"
            class="time-group-items"
          >
            <div v-for="h of g.items" :key="h.id" class="time-group-item">
              <a class="cover-container" target="_blank" :href="h.url">
                <DpiImage
                  class="cover"
                  :src="h.cover"
                  :size="{ width: 160, height: 110 }"
                  placeholder-image
                ></DpiImage>
                <div
                  v-if="h.progress"
                  class="progress"
                  :style="{ width: h.progress * 100 + '%' }"
                ></div>
                <div
                  v-if="h.progressText"
                  class="floating progress-number"
                >{{ h.progress >= 1 ? '已看完' : h.progressText }}</div>
                <div
                  v-if="h.liveStatus !== undefined"
                  class="floating duration live-status"
                  :class="{ on: h.liveStatus === 1 }"
                >{{ h.liveStatus === 1 ? '直播中': '未开播' }}</div>
                <div
                  v-if="h.durationText"
                  class="floating duration"
                >{{ h.durationText }}</div>
              </a>
              <a
                class="title"
                target="_blank"
                :href="h.url"
                :title="h.title"
              >{{ h.title || h.upName + '的直播间' }}</a>
              <a
                class="up"
                target="_blank"
                :href="h.type === 'pgc' ? h.url : 'https://space.bilibili.com/' + h.upID"
                :title="h.upName"
              >
                <DpiImage
                  v-if="h.upFaceUrl"
                  class="up-face"
                  :size="18"
                  :src="h.upFaceUrl"
                ></DpiImage>
                <div class="up-name">{{ h.upName }}</div>
              </a>
              <div
                v-if="h.timeText"
                class="time"
                :title="new Date(h.viewAt).toLocaleString()"
              >
                {{ h.timeText }}
              </div>
            </div>
          </transition-group>
        </div>
        <ScrollTrigger
          v-if="canNextPage"
          key="scroll-trigger"
          @trigger="nextPage()"
        ></ScrollTrigger>
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts">
import { bilibiliApi, getJsonWithCredentials, postTextWithCredentials } from '@/core/ajax'
import { formData, getCsrf } from '@/core/utils'
import { descendingSort } from '@/core/utils/sort'
import {
  VButton,
  VIcon,
  TextBox,
  VLoading,
  VEmpty,
  ScrollTrigger,
  DpiImage,
} from '@/ui'
import { popperMixin } from '../mixins'
import {
  types, TypeFilter, HistoryItem, getHistoryItems, group,
} from './types'

export default Vue.extend({
  components: {
    VButton,
    VIcon,
    TextBox,
    VLoading,
    VEmpty,
    ScrollTrigger,
    DpiImage,
  },
  mixins: [popperMixin],
  data() {
    return {
      types,
      search: '',
      viewTime: 0,
      cards: [],
      groups: [],
      loading: true,
      hasMorePage: true,
      paused: false,
    }
  },
  computed: {
    canNextPage() {
      return (
        this.search === ''
        && !this.loading
        && this.hasMorePage
        && this.types.every((t: TypeFilter) => t.checked)
      )
    },
  },
  watch: {
    search: lodash.debounce(function search() {
      this.updateGroups()
    }, 200),
  },
  async created() {
    try {
      await Promise.all([
        this.nextPage(),
        this.updateHistoryPauseState(),
      ])
    } finally {
      this.loading = false
    }
  },
  methods: {
    toggleTypeFilter(typeFilter: TypeFilter) {
      typeFilter.checked = !typeFilter.checked
      this.updateGroups()
    },
    filterFunc(item: HistoryItem) {
      if (types.some(t => t.name === item.type && !t.checked)) {
        return false
      }
      if (
        !item.title.toLowerCase().includes(this.search.toLowerCase())
        && !item.upName.toLowerCase().includes(this.search.toLowerCase())
      ) {
        return false
      }
      return true
    },
    updateGroups() {
      this.groups = group(this.cards.filter(this.filterFunc))
    },
    async nextPage() {
      const items = await getHistoryItems(this.viewTime)
      const cards: HistoryItem[] = lodash.uniqBy(
        this.cards
          .concat(items)
          .sort(descendingSort((item: HistoryItem) => item.viewAt)),
        item => item.id,
      )
      this.cards = cards
      this.updateGroups()
      if (cards.length > 0) {
        this.viewTime = lodash.last(cards).viewAt
      }
      this.hasMorePage = cards.length !== 0
    },
    async updateHistoryPauseState() {
      const result = await bilibiliApi(getJsonWithCredentials('https://api.bilibili.com/x/v2/history/shadow'))
      /*
        result == true: 暂停
        result == {}: 没暂停
      */
      this.paused = result === true
    },
    async toggleHistoryPause() {
      const targetState = !this.paused
      try {
        this.paused = targetState
        await postTextWithCredentials(
          'https://api.bilibili.com/x/v2/history/shadow/set',
          formData({
            csrf: getCsrf(),
            switch: targetState,
          }),
        )
      } catch (error) {
        this.paused = !targetState
      }
    },
  },
})
</script>
<style lang="scss">
@import "common";
@import "../popup";

.custom-navbar-history-list {
  width: 350px;
  @include navbar-popup-height();
  font-size: 12px;
  padding: 0;
  margin: 0;
  @include v-stretch();
  justify-content: center;
  @mixin items-animation {
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(-16px) scale(0.9);
    }
    &-leave-active {
      transition: 0.24s cubic-bezier(0.22, 0.61, 0.36, 1);
      position: absolute;
    }
  }
  @mixin round-button($size: 26px) {
    width: $size;
    height: $size;
    box-sizing: border-box;
  }
  .header {
    @include v-stretch(6px);
    margin: 16px 12px 4px 12px;
    .header-row {
      @include h-stretch(8px);
      justify-content: space-between;
      .row-title {
        @include h-center();
      }
    }
    .type-filters {
      @include h-center(8px);
      .type-filter {
        .be-button {
          padding: 4px 8px 4px 6px;
          color: #8888;
          .be-icon {
            margin-right: 6px;
          }
          &.checked {
            color: inherit;
          }
        }
      }
    }
    .search {
      flex: 1;
      .be-textbox {
        height: 100%;
      }
    }
    .operations {
      @include h-center(8px);
      .operation {
        .be-button {
          @include round-button();
        }
      }
    }
  }
  .content {
    @include v-stretch();
    @include no-scrollbar();
    justify-content: space-between;
    flex-grow: 1;
    .be-scroll-trigger,
    .be-empty,
    .be-loading {
      align-self: center;
      text-align: center;
      margin: 12px 0;
    }
    .cards {
      @include items-animation();
      flex: 1;
      scroll-behavior: smooth;
      position: relative;
      @include no-scrollbar();
      padding-bottom: 12px;
      .empty-tip {
        text-align: center;
      }
      .time-group {
        // padding-bottom: 16px;
        @include items-animation();
        &-name {
          padding: 8px 12px;
          font-size: 12px;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: #fff;
          body.dark & {
            background-color: #222;
          }
        }
        &-items {
          padding: 0 12px;
          .floating {
            @include round-bar(20);
            @include h-center();
            background-color: #000c;
            color: white;
            justify-content: center;
            position: absolute;
            opacity: 0;
            font-size: 11px;
          }
          .time-group-item {
            display: grid;
            grid-template:
              'cover title title' 5fr
              'cover up time' 6fr / 80px 1fr auto;
            border-radius: 8px;
            color: black;
            background-color: #fff;
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
            border: 1px solid #8882;
            box-sizing: border-box;
            body.dark & {
              background-color: #282828;
              color: #eee;
            }
            &:not(:last-child) {
              margin-bottom: 8px;
            }
            &:hover {
              .cover {
                transform: scale(1.05);
              }
              .floating {
                opacity: 1;
              }
            }
            .cover-container {
              $height: 55px;
              $padding: 2px;
              grid-area: cover;
              position: relative;
              height: $height;
              overflow: hidden;
              border-radius: 7px 0 0 7px;
              .cover {
                object-fit: cover;
                width: 80px;
                height: $height;
                body.dark &.placeholder {
                  filter: invert(0.9);
                }
              }
              .duration {
                left: $padding;
                bottom: $padding;
                padding: 0 6px;
              }
              .live-status {
                &.on {
                  background-color: var(--theme-color);
                  color: var(--foreground-color);
                }
              }
              .progress-number {
                left: $padding;
                top: $padding;
                padding: 0 6px;
              }
              .progress {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                border-radius: 1px;
                background-color: var(--theme-color);
              }
            }
            .title {
              grid-area: title;
              font-weight: bold;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              align-self: end;
              margin: 0;
              line-height: normal;
              display: block;
              padding-left: 8px;
              padding-right: 6px;
              font-size: 13px;
              &:hover {
                color: var(--theme-color) !important;
              }
            }
            .up,
            .time {
              font-size: 11px;
              opacity: 0.75;
              align-self: center;
            }
            .up {
              grid-area: up;
              @include h-center();
              padding-left: 8px;
              opacity: 1;
              .be-icon {
                margin-right: 4px;
                font-size: 14px;
              }
              &-face {
                border-radius: 50%;
                width: 18px;
                height: 18px;
                margin-right: 4px;
              }
              &-name {
                white-space: nowrap;
                max-width: 160px;
                overflow: hidden;
                text-overflow: ellipsis;
                opacity: 0.75;
                &:hover {
                  opacity: 1;
                }
              }
            }
            .time {
              font-size: 11px;
              grid-area: time;
              padding-right: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
