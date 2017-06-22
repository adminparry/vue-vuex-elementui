<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content" v-bind:class="isMenuShow?'content contentLeft':'content '">
            
        <transition name="move" mode="out-in">
            <router-view class="right"></router-view>
        </transition>
        </div>
    
    </div>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        computed:{
             ...mapState([
                'isMenuShow'
            ]),
        },
        components:{
            vHead, vSidebar
        }
    }
</script>
<style>
   
    .wrapper{
        height: 100%;

    }
    
    .content{
        margin-left: 200px;
        height: 100%;
    }
    .contentLeft{
        margin-left: 0;

    }
    .right{
        width:100%;
        height:100%;
        padding-bottom: 50px;
        overflow-y:scroll
    }
    @media all and (min-width: 0) and (max-width:666px) {

        .content{
            margin:0;
            height: auto;
        }
        .wrapper{
            overflow-y: scroll;
        }
        .right{
            overflow-y:hidden;
            padding-bottom : 0;
           
        }
    }

</style>
