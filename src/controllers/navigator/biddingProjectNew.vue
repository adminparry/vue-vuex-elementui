<template>
    <div>
        <div  class="center">
            <div class="container">
                <div class="h-title" >
                  <span>| 新建项目信息</span>
                  <el-button style="float:right;" size="small" type="primary">
                    <router-link style="color:white;text-decoration:none" to="/biddingProject">返回</router-link>
                  </el-button>
                  
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
