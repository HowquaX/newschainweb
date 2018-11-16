<template>
    <div class="ms-page" v-has-header>
        <THeader :title="`详情`"></THeader>
        <!-- <ScrollView :useRefresh="true" @refresh="getData"> -->
        <ScrollView>
            <!-- <div v-if="has"> -->
            <div>
                <div class="desc">
                    <h3 class="top-title">{{topicDetail.title}}</h3>
                    <!-- <h3 class="top-title">标题1</h3> -->
                    <div class="others">
                        <div class="left">
                            <!-- <Timage
                               class="avator"
                               :src="getImgUri(topicDetail)"
                               @click="goUser(topicDetail)"
                            >
                            </Timage> -->
                            <div class="user-desc">
                                <div v-for="item in topicDetail.authors">
                                  item
                                </div>
                                <!-- <div>发布于{{getTime(topicDetail.create_at)}}</div> -->
                                <!-- <div>作者</div> -->
                                <div>发布于昨天</div>
                            </div>
                        </div>
                        <div class="right" @click="goTargetContent()" v-for="item in topicDetail.tags">
                            <!-- <span>{{topicDetail.visit_count}}次浏览</span> -->
                            <span>item</span>
                        </div>
                    </div>
                </div>
                <Review>
                    <div class="detail" v-html="topicDetail.body">
                    </div>
                </Review>
              <button type="button" name="button" id="deriveButton" @click="deriveFun">Derive</button>
              <button type="button" name="button" id="pickButtion"
               @click="pickedFun" v-if="picked === 'Pick'">{{picked}}</button>
               <button type="button" name="button" id="pickedButtion"
                v-else>{{picked}}</button>
            </div>
        </ScrollView>
    </div>
</template>

<script>
    import { Modal,Timage} from './../components';
    import {mapActions, mapState} from 'vuex'
    import detailTypes from './../store/types/detail';
    import {matchImageUrl} from './../common/util';

    import Review from './../components/ReviewImage'

    const actions = mapActions({...detailTypes});
    export default {
        name: "detail",
        components: {
            Modal,
            Timage,
            Review
        },
        data() {
            return {
                titleId: 0,
                ...actions,
                isToTop: true,
                commentText: ``,
                modalShow: false,
                disabledRefresh: false,
                picked:''
            }
        },
        computed: {
            ...mapState({
                details: state => {
                    return state.detail
                },
                userState: state => state.user
            }),
            //
            // topicId(){
            //     const { params } = this.$route;
            //     return params.id;
            // },
            //
            topicDetail(){
                var desc = this.details.desc.data;
                return desc;
            },
            //
            // has(){
            //     const { topicDetail } = this;
            //     return !!Object.keys(topicDetail).length;
            // },
            //
            // author(){
            //     const { author } = this.topicDetail;
            //     return author;
            // },
            //
            // replies(){
            //     const { replies } = this.topicDetail;
            //     return replies;
            // }
        },
        mounted() {
        //     this.networker = setTimeout(() => {
        //         this.getData();
        //     }, 600);
           this.titleId = this.$route.params
           this.getData();
           var articlesArr = JSON.parse(localStorage.getItem('MARKED_ARTICLE_ID'))
           console.log(articlesArr, 'mounted');
           if (articlesArr === null) {
             this.picked = 'Pick'
           } else {
             let length = articlesArr.length
             console.log(articlesArr[0].id);
             console.log(this.titleId.id);
               this.picked = 'Pick'
             for (let i =0; i < length; i++) {
               if (articlesArr[i].id === this.titleId.id) {
                   console.log('for1')
                  this.picked = 'Picked'
               }
             }
           }
        },

        beforeDestroy() {
            // this.networker && clearTimeout(this.networker);
        },

        methods: {
            getData(cb = () => {}) {
                return this.getDetail(this.titleId).then(cb)
            },
            deriveFun() {
              const isLogin = getUserLogin();
              this.$router.push(`/release/${this.titleId.id}`);
            },
            pickedFun() {
              this.picked = 'Picked'
              const markedId = `MARKED_ARTICLE_ID`;
              var articlesArr = JSON.parse(localStorage.getItem(markedId))
              console.log(articlesArr, 'fun');
              if (articlesArr === null) {
                articlesArr = []
              }

              let payload = {
                id: this.topicDetail._id,
                title: this.topicDetail.title,
                authors: this.topicDetail.authors
              }
              console.log(payload);

              articlesArr.push(payload)
              console.log(articlesArr, '666');
              localStorage.setItem(markedId, JSON.stringify(articlesArr));
            },
            // onRefresh(cb) {
            //     this.getData().then(cb);
            // },
            // getTime: time => {
            //     return formatTime(time);
            // },
            // showCommentModal() {
            //     this.modalShow = !this.modalShow
            // },
            // getImgUri({author}){
            //     return author.avatar_url;
            // },
            // onSubmit() {
            //     let {commentText, userState} = this;
            //     commentText = trim(commentText);
            //     if (!commentText) {
            //         return this.$PopUp.tip(`请输入评论`);
            //     }
            //
            //     const isLogin = getUserLogin();
            //
            //     if (!isLogin) {
            //         return this.$openLogin(cb => {
            //             cb();
            //             this.commenting();
            //         });
            //     }
            //     this.commenting();
            // },
            // commenting() {
            //     let {commentText, userState} = this;
            //     commentText=`${commentText} [酷炫的cnode社区](http://cnode.yutao2012.com/)`;
            //     const {access_token} = userState;
            //     loading(`发送中...`);
            //     this.$http.post(`/topic/${this.topicId}/replies`, {
            //         accesstoken: access_token,
            //         content: commentText
            //     }).then(() => {
            //         this.$PopUp.toast(`评论成功！`);
            //         this.getData();
            //         this.commentText = ``;
            //         this.showCommentModal();
            //     }).finally(loadingClose);
            // },
            // goUser(item) {
            //     const {loginname} = item.author;
            //     this.$router.push(`/user/${loginname}`);
            // },
            goTargetContent() {
              this.$router.push(`/target`);
            }
        }
    }
</script>

<style lang="scss">
    @import "./../styles/markdown.scss";
</style>

<style scoped lang="scss">
    .desc {
        padding: 16px 12px;
        background: #fff;
        .top-title {
            line-height: 24px;
        }

        .others {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .right {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #999;
            span {
                display: block;
            }
        }

        .user-desc {
            font-size: 12px;
            color: #999;
            margin-left: 6px;
            *:first-child {
                margin-bottom: 4px;
            }
        }
        .avator {
            width: 36px;
            height: 36px;
            border-radius: 18px;
        }
    }

    .detail {
        width: 100%;
        margin: 4px 4px;
        background-color: #fff;

    }

    .comment-container {
        background-color: #fff;

        .comment-header {
            padding: 6px 10px;
            border-left: 3px solid #FF5655;
            border-bottom: 1px solid #ececec;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .comment-num {
            font-size: 16px;
        }
        .comment-btn {
            height: 36px;
            padding: 0 10px;
            border-radius: 6px;
        }
        .comment-content {
            padding: 8px;
            .comment-list {
                padding-top: 12px;
                border-bottom: 1px solid #ececec;

                &:last-child {
                    border-bottom: none;
                }
            }
            .comment-user {
                display: flex;
                align-items: center;
            }
            .user-avator {
                width: 36px;
                height: 36px;
                border-radius: 18px;
            }
            .user-desc {
                flex: 1;
                font-size: 12px;
                color: #999;
                margin-left: 6px;
                *:first-child {
                    margin-bottom: 4px;
                }
            }
        }
    }

    .comment-form {
        width: 100%;
        background-color: #fff;
        display: flex;
        border-top: 1px solid #FF5655;
        align-items: center;
        padding: 10px 0 10px 10px;
        .input-wrapper {
            min-height: 36px;
            flex: 1;
            background-color: #ececec;
            border-radius: 4px;
            display: flex;
            align-items: center;
            padding: 6px 8px;
        }
        .input-comment {
            background-color: transparent;
            width: 100%;
            outline: none;
            border: none;
            font-size: 14px;
            color: #565656;
            resize: none;
            padding: 0;
            height: 22px;
        }
        .send-btn {
            height: 36px;
            width: 60px;
            background-color: transparent;
            color: #FF5655;
        }
    }
    /** 右下角跳转按钮 跳转到列表 */
#deriveButton
 {
    position: fixed;
     bottom: 2%;
     right: 3%;
     // z-index: 2;
     background: #FF5655;
     width: 80px;
     height: 50px;
     border-radius: 5px;
     // box-shadow: 2px 2px 2px #888888;
     opacity:0.7 ;
 }
 #pickButtion
  {
     position: fixed;
      bottom: 2%;
      left: 3%;
      // z-index: 888;
      background: #FF5655;
      width: 80px;
      height: 50px;
      border-radius: 5px;
      // box-shadow: 2px 2px 2px #888888;
      opacity:0.7 ;
  }
  #pickedButtion {
    position: fixed;
     bottom: 2%;
     left: 3%;
     // z-index: 888;
     background: grey;
     width: 80px;
     height: 50px;
     border-radius: 5px;
     // box-shadow: 2px 2px 2px #888888;
     opacity:0.7 ;
  }
</style>
