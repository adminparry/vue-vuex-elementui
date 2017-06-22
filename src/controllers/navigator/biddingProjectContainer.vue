<template>

        <transition name="move" mode="out-in">
            <router-view class="right"></router-view>
        </transition>

   
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
