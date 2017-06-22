<template>
    <div>
        <div  class="center">
            <div class="container">
                <div class="h-title" >
                  <span>| 投标项目管理</span>
                  <el-button style="float:right;" size="small" type="primary">
                    <router-link style="color:white;text-decoration:none" to="/biddingProject/new">新建</router-link>
                  </el-button>
                  
                </div>
                <div class="h-retrieval">
                  <el-row>
                    <el-col :span="6" :xs="24">
                      <v-projectType></v-projectType>
                    </el-col>

                    <el-col :span="6" :xs="24">
                       <v-progressStatus></v-progressStatus>
                    </el-col>

                    <el-col :span="6" :xs="24">
                      <v-projectName></v-projectName>
                    </el-col>

                    <el-col :span="6" :xs="24">
                      <el-button  size="small" type="primary" @click="biddingProjectSearch(projectType.value,progressStatus.value,projectName.value)">搜索</el-button>
                    </el-col>
                  </el-row>
                    
                </div>
                <v-table></v-table>
            </div>
           
            
             <v-footer></v-footer>
        </div>        
    </div>
   
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    import vFooter from '../footer/index.vue'
    import vProjectType from '../selectBar/projectType.vue'
    import vProgressStatus from '../selectBar/progressStatus.vue'
    import vProjectName from '../selectBar/projectName.vue'
    import vTable from '../tableCell/biddingProject.vue'
    export default {
      components:{
        vProjectType,vProgressStatus,vProjectName,vTable,vFooter
      },
      computed: mapState([
            'projectType',
            'progressStatus',
            'projectName'
      ]),
      mounted(){
        this.initSearch();
      },
      methods:{
        ...mapMutations([
          'initSearch'
        ]),
        biddingProjectSearch(type,status,name){
            console.log(type,status,name,this)
        }
      }
    }
</script>
