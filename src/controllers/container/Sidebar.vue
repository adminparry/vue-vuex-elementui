<template>
    <div class="sidebar " v-bind:class="isMenuShow?'sidebar hideSidebar':'sidebar '">      
        <el-menu :default-active="open" class="el-menu-vertical-demo" theme="dark"  unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="`/${item.index}`">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="`/${subItem.index}`">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="`/${item.index}`">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
        data(){
            return {
                open:'' 
            }
        },
        mounted(){ 
            this.init();
        },
        methods:{
            ...mapMutations([
                 'initMenu'
            ]),
            init(){
                this.initMenu(this);
                this.onRoutes();
            },
            onRoutes(){
                var self = this;
               
                setTimeout(function(){
                    self.open =`/${self.$route.path.split('/')[1]}`;
                })
            },
            hashChange(){
                alert(9)
            }
        },
        computed:{
            ...mapState([
                'isMenuShow',
                'items',
            ])
        }
    }
</script>

<style scoped>
   
    .logo{
        width: 100%;height: 70px;line-height: 70px;text-align: center;font-size: 20px;background: #367fa9;
    }
    .sidebar{
        height: 100%;
        float: left;
        width: 200px;
        transition: margin .3s ease-in-out;
    }
    .sidebar > ul {
        height:100%;
    }
    .hideSidebar{
        margin-left: -200px;
    }
    @media all and (min-width: 0) and (max-width:666px) {

        .sidebar{
            width: 100%;
            height: auto;
            /*margin-left: -200px;*/
        }
        .hideSidebar{
            margin-left: 0px;
        }
    }
</style>
