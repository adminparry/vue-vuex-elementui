<template>
    <div>
        <div  class="center">
            <div class="container">
                <div class="h-title" >| 售后安装管理</div>
                <div class="h-retrieval">

                  <el-row>
                    <el-col :span="6" :xs="24">
                       <v-productionState></v-productionState>
                    </el-col>

                    <el-col :span="6" :xs="24">
                      <v-projectType></v-projectType>
                    </el-col>

                    <el-col :span="6" :xs="24">
                      <v-projectName></v-projectName>
                    </el-col>

                    <el-col :span="6" :xs="24">
                      <el-button  size="small" type="primary" @click="afterMarketInstallationSearch(projectType.value,progressStatus.value,projectName.value)">搜索</el-button>
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
    import vProductionState from '../selectBar/productionState.vue'
    import vProjectName from '../selectBar/projectName.vue'
    import vTable from '../tableCell/afterMarketInstallation.vue'
    export default {
      components:{
        vProjectType,vProductionState,vProjectName,vTable,vFooter
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
        afterMarketInstallationSearch(){

        }
      }
    }
</script>
