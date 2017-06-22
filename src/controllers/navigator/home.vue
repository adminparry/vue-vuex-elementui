<template>
    <div>
        <div  class="center">
            <div class="container">
                <div class="h-title" >
                <span>| 主页-项目状态跟踪</span>
                <el-button 
                  style="float:right" 
                  @click="dialogFormVisible = true"  
                  size="small" 
                  type="primary">
                  新建
                </el-button>
                </div>
                <div class="h-retrieval">
                  <el-row>
                    <el-col :span="8" :xs="24">
                      <v-projectType></v-projectType>
                    </el-col>

                    <el-col :span="8" :xs="24">
                      <v-projectName></v-projectName>
                    </el-col>

                    <el-col :span="8" :xs="24">
                      <el-button  size="small" type="primary" @click="homeSearch(projectType.value,progressStatus.value,projectName.value)">搜索</el-button>
                    </el-col>
                  </el-row>
                    
                </div>
                
                <v-table></v-table>
            </div>
           
            
            <v-footer></v-footer>
            <el-dialog title="新建项目" :visible.sync="dialogFormVisible">
              <p>项目名称:2016年9月铝锭产品招商B6KB63项目招标</p>
              <p>客户名称:天津铝合金有限公司</p>

              <el-form :model="form">
                  
                  <v-projectType></v-projectType>
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                   
                  </el-upload>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
              </div>
            </el-dialog>
        </div>        
    </div>
</template>
    

<script>
    import { mapState, mapMutations} from 'vuex'
    import vFooter from '../footer/index.vue'
    import vTable from '../tableCell/home.vue'
    import vProjectType from '../selectBar/projectType.vue'
    import vProgressStatus from '../selectBar/progressStatus.vue'
    import vProjectName from '../selectBar/projectName.vue'

    export default {
      components:{
        vTable,vProjectType,vProgressStatus,vProjectName,vFooter
      },
      computed: mapState([
            'projectType',
            'progressStatus',
            'projectName'
      ]),
      data() {
        return {
          gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px'
        };
      },
      mounted(){
        this.initSearch();
      },
      methods:{
        ...mapMutations([
          'initSearch'
        ]),
        open() {
          const h = this.$createElement;
          this.$msgbox({
            title: '消息',
            message: h('ul', { style: 'list-style: none' }, [
              h('li', null, ' 项目名称：2016年9月铝锭产品招商B6KB63项目招标 '),
              h('li', { style: 'color: teal' }, '客户名称:天津铝合金有限公司'),
              h('li',null,'指派给：')
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          });
        },
        homeSearch(type,status,name){
          console.log(type,status,name)
        }
      }
    }

</script>

