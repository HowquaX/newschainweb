<template>
    <div class="ms-page" v-has-header>
      <THeader :title="`贸易战`"></THeader>
      <!-- <div class="content"> -->
        <!-- <TabbarItem v-for="(tab,index) in tableLabel" :key="tab.name" class="item">
            <CenterContent v-if="!!savePage[`page_${index}`]" :category="tab.category"></CenterContent>
        </TabbarItem> -->
      <!-- </div> -->

      <div class="item-container">
          <div class="item" @click="jumpToPage()">
              <div class="author">
                  <div class="left">
                      <div class="author-avator" style="backgroundImage: '../../image/github_icon.png'"></div>
                      <div class="author-name">
                          social
                      </div>
                  </div>
                  <div class="right">
                      Oct. 4, 2018, 2:04 p.m.
                  </div>
              </div>
              <div class="desc">
                  <p class="title">
                    转: 贸易- 中美贸易战开始

                  </p>
                  <div class="desc-icon">
                      <div class="desc-item">
                          <i class="icon eye"></i>
                          <span class="number">
                           699
                       </span>
                      </div>
                      <div class="desc-item">
                          <i class="icon comment"></i>
                          <span class="number">
                           122
                       </span>
                      </div>
                      <div class="desc-item" style="width: 45%">
                          <span class="tags">
                           贸易战
                       </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <br>
      <div class="item-container">
          <div class="item" @click="jumpToPage()">
              <div class="author">
                  <div class="left">
                      <div class="author-avator" style="backgroundImage: '../../image/github_icon.png'"></div>
                      <div class="author-name">
                          social
                      </div>
                  </div>
                  <div class="right">
                      Oct. 4, 2018, 2:04 p.m.
                  </div>
              </div>
              <div class="desc">
                  <p class="title">
                    转: 贸易- 中美贸易战开始

                  </p>
                  <div class="desc-icon">
                      <div class="desc-item">
                          <i class="icon eye"></i>
                          <span class="number">
                           699
                       </span>
                      </div>
                      <div class="desc-item">
                          <i class="icon comment"></i>
                          <span class="number">
                           122
                       </span>
                      </div>
                      <div class="desc-item" style="width: 45%">
                          <span class="tags">
                           贸易战
                       </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>

</template>
<script>
    import {
        TabBar,
        TabbarItem,
        MsHeader,
        Modal
    } from './../components';
    import Menu from './menu';
    import CenterContent from './center';
    export default {
        name:"targetContent",
        components: {
            TabBar,
            TabbarItem,
            Modal,
            CenterContent,
            Menu
        },
        data() {
            const tableLabel = [
                { name:"精华",category:"good" },
                { name:"标签",category:"share" }
            ];
            const page = this.getCategoryToPage(tableLabel);
            return {
                title:'新闻众创',
                page:page,
                leftSlider:false,
                tableLabel:tableLabel,
                savePage:{[`page_${page}`]:`page_${page}`}
            }
        },
        methods: {
            pageChange(index){
                this.setIndexByPage(index);
                const { category } = this.tableLabel[index];
                this.$router.push(`/topic/${category}`);
            },

            setIndexByPage( index ){
                this.savePage[`page_${index}`]=`page_${index}`;
                this.page=index;
            },

            getCategoryToPage(tabs=[]){
                const { currentRoute } = this.$router;
                const { params } = currentRoute;
                const { category } = params;
                const { tableLabel } = this;
                const pageIndex= (tableLabel||tabs).findIndex(tab=>tab.category===category);
                return pageIndex < 0 ? 0 : pageIndex;
            }
        },
        watch:{
            '$route' () {
                const page = this.getCategoryToPage();
                this.setIndexByPage(page);
            }
        }
    }
</script>
<style scoped lang="scss">
    $colorRed: #e74c3c;
    $green: #1abc9c;
    $blue: #3498db;
    $yellow: #e67e22;

    .item-container {
        .itemTarget {
          padding: 12px 16px;
          background-color: #fff;
          // margin-bottom: 2px;
          border-top: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
          &:first-child {
              border-top: none;
          }

          &:last-child {
              margin-bottom: 0;
          }
          .Target {
            font-size: 15px;
            font-weight: 500px;
            line-height: 20px;
            color: #333;
            text-align: justify;
          }
        }
        .item {
            padding: 12px 16px;
            background-color: #fff;
            margin-bottom: 10px;
            border-top: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
            &:first-child {
                border-top: none;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
        }
        .right {
            font-size: 13px;
            color: #999;
        }
        .author-avator {
            width: 28px;
            height: 28px;
            border-radius: 14px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: #ececec;
        }
        .author-name {
            font-size: 14px;
            color: #666;
            margin-left: 10px;
        }
    }

    .desc {
        padding: 16px 0 0 0;
        .title {
            font-size: 15px;
            font-weight: 500;
            line-height: 20px;
            color: #333;
            text-align: justify;
        }
        .content {
            margin-top: 10px;
            line-height: 20px;
        }
        .desc-icon {
            display: flex;
            .desc-item {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #a8b8c8;
                min-width: 25%;
                max-width: 50%;
                margin-top: 10px;
            }
            .icon {
                width: 20px;
                height: 20px;
                display: block;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            .icon.eye {
                background-image: url("./../image/thumbs-up-32.png");
                background-size: 85% auto;
            }
            .icon.comment {
                background-image: url("./../image/thumbs-down-32.png");
                background-size: 85% auto;
            }
            .number {
                display: block;
                margin-left: 4px;
            }
            .tags {
              flex: 1;
              text-align: right;
            }
        }
    }
    .loading-container {
        display: flex;
        justify-content: center;
        padding: 8px;
    }
</style>
