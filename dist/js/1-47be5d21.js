webpackJsonp([1],{"9OD8":function(t,e,o){var a=o("SJ6E");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("FIqI")("7924ac65",a,!0,{})},GwIj:function(t,e,o){function a(t){o("9OD8"),o("KTWK")}var n=o("AVtK")(o("Ya+D"),o("ohdJ"),a,"data-v-1b459aee",null);t.exports=n.exports},KTWK:function(t,e,o){var a=o("nUST");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("FIqI")("11ee24f9",a,!0,{})},LYNy:function(t,e,o){var a=o("Eg/L"),n=o("onEp");o("xUTu")("keys",function(){return function(t){return n(a(t))}})},SJ6E:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,".margin-tb-zero,.markdown-text ol ol,.markdown-text ol ul,.markdown-text ol ul ol,.markdown-text ol ul ul,.markdown-text ul ol,.markdown-text ul ul,.markdown-text ul ul ol,.markdown-text ul ul ul{margin-top:0;margin-bottom:0}.markdown-text{font-size:15px;color:#333;line-height:1.6;word-wrap:break-word;padding:12px;background:#fff}.markdown-text>:first-child{margin-top:0!important}.markdown-text>:last-child{margin-bottom:0!important}.markdown-text *{-webkit-box-sizing:border-box;box-sizing:border-box}.markdown-text h1,.markdown-text h2,.markdown-text h3,.markdown-text h4,.markdown-text h5,.markdown-text h6{margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-text blockquote,.markdown-text dl,.markdown-text ol,.markdown-text p,.markdown-text pre,.markdown-text table,.markdown-text ul{margin-top:0;margin-bottom:16px}.markdown-text h1{margin:.67em 0;font-size:32px;line-height:1.2}.markdown-text h1,.markdown-text h2{padding-bottom:.3em;border-bottom:1px solid #eee}.markdown-text h2{font-size:28px;line-height:1.225}.markdown-text h3{font-size:24px;line-height:1.43}.markdown-text h4{font-size:20px}.markdown-text h5{font-size:16px}.markdown-text h6{font-size:12px;color:#777}.markdown-text ol,.markdown-text ul{padding-left:2em}.markdown-text ol ol,.markdown-text ul ol{list-style-type:lower-roman}.markdown-text ol ul,.markdown-text ul ul{list-style-type:circle}.markdown-text ol ul ul,.markdown-text ul ul ul{list-style-type:square}.markdown-text ol{list-style-type:decimal}.markdown-text ul{list-style-type:disc}.markdown-text blockquote{margin-left:0;margin-right:0;padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-text table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0}.markdown-text table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-text table tr:nth-child(2n){background-color:#f8f8f8}.markdown-text table td,.markdown-text table th{padding:6px 13px;border:1px solid #ddd}.markdown-text pre{word-wrap:normal;padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-text code{display:inline;max-width:none;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;white-space:pre-wrap;border:0;border-radius:3px;background-color:transparent;font-size:13px}.markdown-text a{color:#4078c0;text-decoration:none;background:transparent}.markdown-text img{max-width:100%;max-height:100%;border-radius:4px;-webkit-box-shadow:0 0 10px #555;box-shadow:0 0 10px #555}.markdown-text strong{font-weight:700}.markdown-text em{font-style:italic}.markdown-text del{text-decoration:line-through}.task-list-item{list-style-type:none}.task-list-item input{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif;margin:0 .35em .25em -1.6em;vertical-align:middle}.task-list-item input[disabled]{cursor:default}.task-list-item input[type=checkbox],.task-list-item input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}",""])},"Ya+D":function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o("ZLEe"),i=a(n),r=o("4YfN"),s=a(r),d=o("bGai"),l=o("HVJf"),c=o("LHuj"),m=a(c),p=(o("s0MJ"),o("2IhT")),u=a(p),x=(0,l.mapActions)((0,s.default)({},m.default));e.default={name:"detail",components:{Modal:d.Modal,Timage:d.Timage,Review:u.default},data:function(){return(0,s.default)({},x,{isToTop:!0,commentText:"",modalShow:!1,disabledRefresh:!1})},computed:(0,s.default)({},(0,l.mapState)({details:function(t){return t.detail},userState:function(t){return t.user}}),{topicId:function(){return this.$route.params.id},topicDetail:function(){return this.details.desc[this.topicId]||{}},has:function(){var t=this.topicDetail;return!!(0,i.default)(t).length},author:function(){return this.topicDetail.author},replies:function(){return this.topicDetail.replies}}),mounted:function(){var t=this;this.networker=setTimeout(function(){t.getData()},600)},beforeDestroy:function(){this.networker&&clearTimeout(this.networker)},methods:{getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return this.getDetail(this.topicId).then(t)},onRefresh:function(t){this.getData().then(t)},getTime:function(t){return formatTime(t)},showCommentModal:function(){this.modalShow=!this.modalShow},getImgUri:function(t){return t.author.avatar_url},onSubmit:function(){var t=this,e=this.commentText;this.userState;return(e=trim(e))?getUserLogin()?void this.commenting():this.$openLogin(function(e){e(),t.commenting()}):this.$PopUp.tip("请输入评论")},commenting:function(){var t=this,e=this.commentText,o=this.userState;e+=" [酷炫的cnode社区](http://cnode.yutao2012.com/)";var a=o.access_token;loading("发送中..."),this.$http.post("/topic/"+this.topicId+"/replies",{accesstoken:a,content:e}).then(function(){t.$PopUp.toast("评论成功！"),t.getData(),t.commentText="",t.showCommentModal()}).finally(loadingClose)},goUser:function(t){var e=t.author.loginname;this.$router.push("/user/"+e)}}}},ZLEe:function(t,e,o){t.exports={default:o("gUiJ"),__esModule:!0}},gUiJ:function(t,e,o){o("LYNy"),t.exports=o("yDNk").Object.keys},nUST:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,".desc[data-v-1b459aee]{padding:16px 12px;background:#fff}.desc .top-title[data-v-1b459aee]{line-height:24px}.desc .others[data-v-1b459aee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px}.desc .left[data-v-1b459aee]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.desc .left[data-v-1b459aee],.desc .right[data-v-1b459aee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.desc .right[data-v-1b459aee]{font-size:12px;color:#999}.desc .right span[data-v-1b459aee]{display:block}.desc .user-desc[data-v-1b459aee]{font-size:12px;color:#999;margin-left:6px}.desc .user-desc [data-v-1b459aee]:first-child{margin-bottom:4px}.desc .avator[data-v-1b459aee]{width:36px;height:36px;border-radius:18px}.detail[data-v-1b459aee]{width:100%;margin:4px 0}.comment-container[data-v-1b459aee]{background-color:#fff}.comment-container .comment-header[data-v-1b459aee]{padding:6px 10px;border-left:3px solid #ff5655;border-bottom:1px solid #ececec;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment-container .comment-num[data-v-1b459aee]{font-size:16px}.comment-container .comment-btn[data-v-1b459aee]{height:36px;padding:0 10px;border-radius:6px}.comment-container .comment-content[data-v-1b459aee]{padding:8px}.comment-container .comment-content .comment-list[data-v-1b459aee]{padding-top:12px;border-bottom:1px solid #ececec}.comment-container .comment-content .comment-list[data-v-1b459aee]:last-child{border-bottom:none}.comment-container .comment-content .comment-user[data-v-1b459aee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment-container .comment-content .user-avator[data-v-1b459aee]{width:36px;height:36px;border-radius:18px}.comment-container .comment-content .user-desc[data-v-1b459aee]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:12px;color:#999;margin-left:6px}.comment-container .comment-content .user-desc [data-v-1b459aee]:first-child{margin-bottom:4px}.comment-form[data-v-1b459aee]{width:100%;background-color:#fff;border-top:1px solid #ff5655;-ms-flex-align:center;padding:10px 0 10px 10px}.comment-form .input-wrapper[data-v-1b459aee],.comment-form[data-v-1b459aee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center}.comment-form .input-wrapper[data-v-1b459aee]{min-height:36px;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#ececec;border-radius:4px;-ms-flex-align:center;padding:6px 8px}.comment-form .input-comment[data-v-1b459aee]{background-color:transparent;width:100%;outline:none;border:none;font-size:14px;color:#565656;resize:none;padding:0;height:22px}.comment-form .send-btn[data-v-1b459aee]{height:36px;width:60px;background-color:transparent;color:#ff5655}",""])},ohdJ:function(t,e){t.exports={render:function(){var t=this,e=this,o=e.$createElement,a=e._self._c||o;return a("div",{directives:[{name:"has-header",rawName:"v-has-header"}],staticClass:"ms-page"},[a("THeader",{attrs:{title:"详情"}}),e._v(" "),a("ScrollView",{attrs:{useRefresh:!0},on:{refresh:e.getData}},[e.has?a("div",[a("div",{staticClass:"desc"},[a("h3",{staticClass:"top-title"},[e._v(e._s(e.topicDetail.title))]),e._v(" "),a("div",{staticClass:"others"},[a("div",{staticClass:"left"},[a("Timage",{staticClass:"avator",attrs:{src:e.getImgUri(e.topicDetail)},on:{click:function(t){e.goUser(e.topicDetail)}}}),e._v(" "),a("div",{staticClass:"user-desc"},[a("div",[e._v(e._s(e.author.loginname))]),e._v(" "),a("div",[e._v("发布于"+e._s(e.getTime(e.topicDetail.create_at)))])])],1),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v(e._s(e.topicDetail.visit_count)+"次浏览")])])])]),e._v(" "),a("Review",[a("div",{staticClass:"detail",domProps:{innerHTML:e._s(e.topicDetail.content)}})]),e._v(" "),a("div",{staticClass:"comment-container"},[a("div",{staticClass:"comment-header"},[a("div",{staticClass:"comment-num"},[e._v("\n                        共"+e._s(e.topicDetail.reply_count)+"条回复\n                    ")]),e._v(" "),a("TButton",{staticClass:"comment-btn",on:{click:e.showCommentModal}},[e._v("\n                        点击评论\n                    ")])],1),e._v(" "),e.replies.length?a("div",{staticClass:"comment-content"},e._l(e.replies,function(t){return a("div",{staticClass:"comment-list"},[a("div",{staticClass:"comment-user"},[a("Timage",{staticClass:"user-avator",attrs:{src:e.getImgUri(t)},on:{click:function(o){e.goUser(t)}}}),e._v(" "),a("div",{staticClass:"user-desc"},[a("div",[e._v(e._s(t.author.loginname))]),e._v(" "),a("div",[e._v(e._s(e.getTime(t.create_at)))])])],1),e._v(" "),a("div",{domProps:{innerHTML:e._s(t.content)}})])})):e._e()])],1):e._e()]),e._v(" "),a("Modal",{attrs:{show:e.modalShow,position:"bottom",onClose:function(){return t.modalShow=!1}}},[a("form",{staticClass:"comment-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"input-wrapper"},[a("textarea",{directives:[{name:"textarea-auto",rawName:"v-textarea-auto"},{name:"model",rawName:"v-model",value:e.commentText,expression:"commentText"}],staticClass:"input-comment",attrs:{contenteditable:"true",placeholder:"输入评论"},domProps:{value:e.commentText},on:{input:function(t){t.target.composing||(e.commentText=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"send-btn"},[e._v("\n                发布\n            ")])])])],1)},staticRenderFns:[]}},s0MJ:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){var e=/<img.*?(?:>|\/>)/gi,o=/src=[\'\"]?([^\'\"]*)[\'\"]?/i;return t.match(e).map(function(t){return t.match(o)[1]})};e.matchImageUrl=a}});