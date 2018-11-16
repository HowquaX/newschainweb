<template>
  <!-- <div> -->
    <ScrollView
            @refresh="onRefresh"
            @loadMore="loadMore"
            :userLoadMore="true"
            :useRefresh="true"
            :scrollToY="initScrollY"
            @scroll="bindScroll"
    >
       <div class="item-container" v-show="category === 'good'">
           <div v-for="(item , index) in getList" class="item" :key="index" @click="jumpToPage(item._id)">
               <div class="author">
                   <div class="left">
                       <!-- <div class="author-avator" :style="{backgroundImage:`url(${item.author.avatar_url})`}"></div> -->
                       <div class="author-avator" style="backgroundImage: '../../image/github_icon.png'"></div>
                       <div class="author-name">
                           <!-- {{item.author.loginname}} -->social
                       </div>
                   </div>
                   <div class="right">
                       <!-- {{getTime(item.last_reply_at)}} -->
                       Oct. 4, 2018, 2:04 p.m
                   </div>
               </div>
               <div class="desc">
                   <p class="title">
                     {{item.title}}
                  </p>
                  <p class="content" v-html = "item.body">
                  </p>
                   <div class="desc-icon">
                       <div class="desc-item">
                           <i class="icon eye"></i>
                           <span class="number">
                            <!-- {{item.visit_count}} -->
                            123
                        </span>
                       </div>
                       <div class="desc-item">
                           <i class="icon comment"></i>
                           <span class="number">
                            <!-- {{item.reply_count}} -->
                            321
                        </span>
                       </div>
                       <div class="desc-item" style="width: 10%; margin-left:100px">
                           <span class="tags" v-for="detail in item.tags">
                            {{detail}}
                        </span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="item-container" v-show="category === 'share'">
           <div class="itemTarget" @click="jumpToPage1()">
             <p class="Target">1.&nbsp;&nbsp;#贸易战</p>
           </div>
           <div class="itemTarget" @click="jumpToPage1()">
             <p class="Target">2.&nbsp;&nbsp;#疫苗</p>
           </div>
           <div class="itemTarget" @click="jumpToPage1()">
             <p class="Target">3.&nbsp;&nbsp;#股市</p>
           </div>
           <div class="itemTarget" @click="jumpToPage1()">
             <p class="Target">4.&nbsp;&nbsp;#计算机技术</p>
           </div>
       </div>
    </ScrollView>
    <!-- <br/>
    <br/>
    <div class="item-container">
        <div class="item" @click="jumpToPage()">
            <div class="author">
                <div class="left">
                    <div class="author-avator" style="backgroundImage: '../../image/github_icon.png'"></div>
                    <div class="author-name">
                        pili
                    </div>
                </div>
                <div class="right">
                  Aug. 18, 2018, 9:29 p.m.
                </div>
            </div>
            <div class="desc">
                <p class="title">
                  转: Craig Wright 通过 BBC 声称自己是中本聪
               </p>
               <p class="content">
                 我认为 Craig Wright 在说谎。影片中除了谈论动机之外，并没有给出实际的证明。
                 我认为 Craig Wright 在说谎。影片中除了谈论动机之外，并没有给出实际的证明
                 ...

               </p>
                <div class="desc-icon">
                    <div class="desc-item">
                        <i class="icon eye"></i>
                        <span class="number">
                         345
                     </span>
                    </div>
                    <div class="desc-item">
                        <i class="icon comment"></i>
                        <span class="number">
                         123
                     </span>
                    </div>
                    <div class="desc-item" style="width: 45%">
                        <span class="tags">
                         寻找中本聪
                     </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <br/>
   <br/>
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
                  转: Ford's legal team says they have yet to be contacted by the FBI.

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
                         FBI
                     </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    <br/>
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
                   Aug. 15, 2018, 2:15 p.m
                 </div>
             </div>
             <div class="desc">
                 <p class="title">
                   我花了14个小时找了一下长春长生们究竟卖到了哪里去
                 </p>
                 <div class="desc-icon" style="margin-top: 10px">
                    <div style="margin-right:5px;">
                       <p style="line-height: 20px;">
                         本文首发于个人的公众号和v2ex，事先也没想到会有这么多人关注。
                         在这边重新编辑一下，去掉了原先前言中对此次疫苗事件背景的描述及部分
                         不严谨的措辞...</p>
                     </div>
                     <div >
                       <div style="text-align: right;">
                        <img src="http://img95.699pic.com/photo/50098/2518.jpg_wh300.jpg"
                        style="height:80px; width: 425px">
                      </div>

                     </div>
                 </div>
                 <div class="desc-icon">
                     <div class="desc-item">
                         <i class="icon eye"></i>
                         <span class="number">
                          700
                      </span>
                     </div>
                     <div class="desc-item">
                         <i class="icon comment"></i>
                         <span class="number">
                          105
                      </span>
                     </div>
                     <div class="desc-item" style="width: 45%">
                         <span class="tags">
                          Database 疫苗
                      </span>
                     </div>
                 </div>
             </div>
         </div>
     </div>

  </div> -->
</template>

<script>
    import {Loading} from './../components';
    import {mapActions, mapState} from 'vuex'
    import homeTypes from './../store/types/home';

    const actions = mapActions({...homeTypes});
    export default {
        name: "center",
        props: {
            category: {
                type: String,
                default: `good`
            }
        },
        components: {
            Loading
        },
        data() {
            return {
                ...actions,
                initScrollY: 0,
                showTarget: false
            }
        },
        computed: {
            ...mapState({
                home: state => {
                    return state.home
                }
            }),
            getList() {
                const {home, category} = this;
                // console.log(home[category].list);
                return home[category].list.articles;
            },
            getPageY() {
                const {home, category} = this;
                return home[category].pageY;
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.initScrollY = this.getPageY || 0;
                this.initScrollY = 0;
                this.init();
            });
        },

        beforeDestroy() {
            this.savePageScrollY({
                scrollY: this.scrollY || 0,
                category: this.category
            });
        },

        methods: {
            init() {
                // if (!!this.getList.length) return;
                this.loadData(`refresh`);
            },
            onRefresh(cb) {
                this.loadData(`refresh`, cb);
            },
            loadMore(fn) {
                this.loadData(`loadMore`, fn);
            },
            loadData(type = `refresh`, cb = () => {}) {
                const isRefresh = type === `refresh`;
                const {
                    page,
                    isLastPage
                } = this.home[this.category];
                if(!isRefresh && isLastPage) {
                    return cb(true);
                }
                const curPage = isRefresh ? 1 : page + 1;
                this.getTopicList({
                    page: curPage,
                    category: this.category,
                    type: type
                }).finally(cb)
            },
            jumpToPage(item) {
                this.$router.push(`/detail/` + item);

            },
            jumpToPage1() {
                console.log('666');
                this.$router.push(`/target`);
            },
            bindScroll({y}) {
                this.scrollY = y;
            },
            getTime: time => formatTime(time)
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
