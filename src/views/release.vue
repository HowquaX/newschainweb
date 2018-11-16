<template>
    <div class="ms-page bg-white" v-has-header>
        <THeader :title="'发布文章'" :goBack="goBack"></THeader>
        <ScrollView>
        <!-- <form class="sub-form" @submit.prevent="onSubmit"> -->
        <div class="sub-form">
          <input type="text" class="title" placeholder="请输入标题"
          v-model="title"/>
          <br/>
          <input type="text" class="title"
          placeholder="请输入标签，例如疫苗，贸易战" v-model="targets"/>
          <br/>
          <input type="text" class="title"
          placeholder="请输入作者" v-model="authors"/>
          <br/>
          <div>
            <quill-editor  v-model="content"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
              <div id="toolbar" slot="toolbar">
                  <button class="ql-bold"></button>
                  <button class="ql-italic"></button>
                  <button class="ql-underline"></button>
                  <button class="ql-strike"></button>
                  <button class="ql-header" value="1"></button>
                  <button class="ql-header" value="2"></button>
                  <button class="ql-link"></button>
                  <button class="ql-image"></button>
                  <button class="ql-video"></button>
                  <button class="link b1" @click="pickFunc">
                    <img src="./../image/pick.png">
                  </button>
              </div>
            </quill-editor>
          </div>

           <br/>
             <div class="item-container" v-show="showPicked">
               <ScrollView>
                   <div class="itemTarget">
                       <p class="Target" style="font-weight: bold">Citations</p>
                   </div>
                 <div class="itemTarget" v-for="(item, index) in citationsData">
                   <p class="Target">{{index + 1}}. {{item.title}}</p>
                 </div>
                   </ScrollView>
               </div>

          <TButton class="button" @click="onSubmit">发布</TButton>
        </div>
        <!-- </form> -->
            {{topicDetail}}
        </ScrollView>
    </div>
</template>

<script>
    import {Tselect, Timage ,Review, Loading} from './../components';
    import Upload from './../components/Upload';
    import {mapActions, mapState} from 'vuex'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import axios from 'axios'
    import detailTypes from './../store/types/detail';
    const actions = mapActions({...detailTypes});
    export default {
        name: "release",
        components: {
            Tselect,
            Upload,
            Timage,
            Review,
            Loading
        },
        data() {
          const options = [
                    {name: `测试`, value: `dev`},
                    {name: `问答`, value: `ask`},
                    {name: `分享`, value: `share`},
                    {name: `招聘`, value: `job`}
                ];
            return {
                ...actions,
                title: ``,
                type: `dev`,
                showPicked: false,
                options: options,
                imgs: [],
                content: '',
                targets: '',
                authors: '',
                titleId: 0,
                editorOption: {
                  modules: {
                    toolbar: '#toolbar'
                  }
      }
            }
        },
        computed: {
            ...mapState({
                userState: state => state.user,
                details: state => {
                    return state.detail
                }
            }),
            topicDetail(){
                const desc = this.details.desc.data
                const titleStr = '转！' + desc.title
                const targetsStr = desc.tags.toString()
                const authorsStr = desc.authors.toString()
                this.title = titleStr
                this.content = desc.body
                this.targets = targetsStr
                this.authors = authorsStr
            },
            citationsData(){
                return this.details.articlesData.data
            }
        },
        mounted(){
            this.titleId = this.$route.params
            if (this.titleId.id === '1') {
              this.title = ''
              this.content = ''
              this.targets = ''
              this.authors = ''
                console.log('1')
                // this.uploadEnded()
            } if (this.titleId.id === '2') {
                this.showPicked = true
                this.title = ''
                this.content = ''
                this.targets = ''
                this.authors = ''
            } else {
              // this.uploading(
              this.getData();
              //
            }
        },
        methods: {
          getData(cb = () => {}) {
              // this.topicDetail
              return this.getDetail(this.titleId).then(cb)
          },
          onEditorBlur (editor) {
            // 失去焦点事件
            console.log('失去焦点事件')
          },
          onEditorFocus (editor) {
            // 获得焦点事件
            console.log('得焦点事件')
            // console.log(editor.deta.ops[0]);
            // editor.editor.delta.ops[0].insert = this.msg
            console.log(editor.editor.delta.ops[0].insert);
          },
          onEditorChange ({ editor, html, text }) {
            // 编辑器文本发生变化
            // this.content可以实时获取到当前编辑器内的文本内容
          },
          pickFunc () {
            // if (this.showPicked === false) {
            //   this.showPicked = true;
            // } else {
            //   this.showPicked = false;
            // }
              this.$router.push(`/marked`);

          },
          transform(str) {
              str= str.replace(/\n/g, `  `);
              const imgStr=this.imgs.map(img=>{
                  return `![${img}](${img})`
              }).join(``);
              return str+imgStr;
          },
          uploadBefore(next){
             const isLogin = getUserLogin();
             if(isLogin){
                 next();
             }else {
                 this.$openLogin(close=>{
                     close();
                 });
             }
          },
          uploadSuccess(img) {
              this.imgs = this.imgs.concat(img);
          },
          uploading() {
              loading();
          },
          uploadEnded(){
             loadingClose();
          },
            onSubmit() {
                loading(`发布中...`);
                const title = trim(this.title);
                const targets = trim(this.targets);
                const authors = trim(this.authors);
                const content = this.content;

                console.log(this.citationsData)
                // if (!title) return this.$PopUp.tip(`请输入标题`);
                // if (title.length < 5) return this.$PopUp.tip(`标题不能小于5个字`);
                // if (!targets) return this.$PopUp.tip(`请输入标签`);
                // if (!authors) return this.$PopUp.tip(`请输入作者`);
                // if (!content) return this.$PopUp.tip(`请输入内容`);
                // if (content.length < 37) return this.$PopUp.tip(`内容不能少于30个字`
                let citations = []
                let length2 = this.citationsData.length
                for (let i = 0; i < length2; i++) {

                    let item = {
                        article: '',
                        citationType: 'weak'
                    }
                   item.article = this.citationsData[i].id
                    citations.push(item)
                }

                console.log('citations', citations)

                let targetsArr = []
                targetsArr = targets.split(/,|，|\s+/)
                let length = targetsArr.length
                let targetsArrNew = []
                for (let i = 0; i < length; i++) {
                  if (targetsArr[i] != '') {
                     targetsArrNew.push(targetsArr[i])
                  }
                }


                let authorsArr = []
                authorsArr = authors.split(/,|，|\s+/)
                let length1 = authorsArr.length
                let authorsArrNew = []
                for (let i = 0; i < length1; i++) {
                  if (authorsArr[i] != '') {
                     authorsArrNew.push(authorsArr[i])
                  }
                }


                let payload = {
                  title: '',
                  tags: [],
                  body: '',
                  authors: [],
                  citations: {}
                }
                payload.title = title;
                payload.tags = targetsArrNew;
                payload.body = content;
                payload.authors = authors
                payload.citations = citations
                console.log(payload);

                let token = localStorage.getItem('CNODE_ACCESS_TOKEN')
                // this.$router.push(`/topic/good`);
                axios.post('https://newschain.herokuapp.com/articles', payload,{
                  headers: {'x-auth': token}
                })  .then((response) =>{
                        console.log(response.data.article._id);
                        var id = response.data.article._id
                            this.$PopUp.toast(`发布成功！`, () => {
                              console.log('111');
                              loadingClose()
                              this.$router.push(`/detail/${id}`)
                            });

                        // this.$router.push(`/topic/good`);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                //
            },
            release() {
                // loading(`发布中...`);
                // let {title, content, type, userState} = this;
                // const {access_token} = userState;
                // this.$http.post("/topics", {
                //     title: title,
                //     tab: type,
                //     content: this.transform(content),
                //     accesstoken: access_token
                // }).then(({topic_id}) => {
                //     this.$PopUp.toast(`发布成功！`, () => {
                //         this.$router.push(`/detail/${topic_id}`)
                //     });
                // }).catch(({error_msg}) => {
                //     this.$PopUp.alert(error_msg || `发布失败，请重新发布！`);
                // }).finally(loadingClose);
            },
            goBack() {
                this.$router.push(`/topic/good`)
            }
        }
    }
</script>

<style scoped lang="scss">
    .sub-form {
        display: block;
        padding: 16px 10px;
    }

    .bg-white {
        background-color: #fff;
    }

    .title {
        height: 40px;
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 2px;
        padding: 0 10px;
        font-size: 14px;
        color: #555;
        &:focus {
            border-color: #FF7A4C;
        }
    }

    .content {
        display: block;
        background-color: #fff;
        margin-top: 16px;
        width: 100%;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 2px;
        textarea {
            display: block;
            width: 100%;
            min-height: 80px;
            outline: none;
            border: none;
            resize: none;
            font-size: 14px;
            padding: 0;
            color: #555;
        }
    }

    .select-box {
        margin-top: 10px;
    }

    .button {
        height: 42px;
        width: 100%;
        border-radius: 6px;
        margin-top: 30px;
        font-size: 16px;
    }

    .upload-group {
        margin-top: 16px;

        .name {
            font-size: 16px;
            color: #666;
        }

    }

    .upload-image-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 6px;

        .img-list {
            width: 60px;
            height: 60px;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
        }

        .img-upload {
            margin-bottom: 10px;
            border-radius: 4px;
        }
    }
    .item-container {
         border: 1px solid #ccc;
         border-radius: 2px;
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
</style>
