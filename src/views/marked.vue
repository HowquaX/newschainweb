<template>
    <div class="ms-page" v-has-header>
      <THeader :title="`我的收藏`"></THeader>
      <div class="item-container">
        <el-table
               ref="multipleTable"
               :data="markedData"
               tooltip-effect="dark"
               style="width: 100%"
               @selection-change="handleSelectionChange">
               <el-table-column
                 type="selection"
                 width="55">
               </el-table-column>
               <el-table-column
                  prop="title"
                 label="标题"
                 >
               </el-table-column>
               <el-table-column
                 label="作者"
                 width="120">
                   <template slot-scope="scope">
                       <span v-for="item in scope.row.authors">
                           {{item}}
                       </span>
                   </template>
               </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="60">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, markedData)"
                            type="text"
                            size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
         </el-table>
             <div style="margin-top: 20px; margin-left: 5px; margin-right: 5px;">
               <!--<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>-->
               <el-button @click="toggleSelection()" style="width: 100%;">Derive</el-button>
             </div>

      </div>
      </div>

</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import detailTypes from './../store/types/detail';
    const actions = mapActions({...detailTypes});
    export default {
        name:"marked",
        data() {
            return {
                ...actions,
              tableData3:[
                  { date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'},
                  { date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'},
                  { date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'},
                  { date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'},
                  { date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'},
                  ],
              multipleSelection: [],
              articlesArr: []
            }
        },
        mounted() {
          this.articlesArr = JSON.parse(localStorage.getItem('MARKED_ARTICLE_ID'))
          // console.log(articlesArr);
        },
        computed: {
            ...mapState({
                details: state => {
                    return state.detail
                }
            }),
          markedData() {
              return this.articlesArr
          }
        },
        methods: {
          toggleSelection() {
              if (this.multipleSelection.length !== 0) {
                  this.deriveArticles(this.multipleSelection)
                  this.$router.push(`/release/2`);
              }

           },
           handleSelectionChange(val) {
             this.multipleSelection = val;
             console.log(this.multipleSelection)
           },
            deleteRow(index, rows) {
                rows.splice(index, 1)
                console.log(this.markedData)
                const markedId = `MARKED_ARTICLE_ID`;
                localStorage.setItem(markedId, JSON.stringify(this.markedData));
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
