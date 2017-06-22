<template>
    <!-- 头部 -->
    <div class="header">

        <a href="#" class="logo ">
            <span class="logo-mini">ico</span>
            <span class="logo-lg">研发中心</span>
        </a>
        <div class="el-icon-menu menu-toggle" @click="menuToggle"></div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/logo.png">
                    
                </span>
                <div class="name">{{username}}</div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
        data() {
            return {
                name: 'parry'
            }
        },
        computed:{
            
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            ...mapMutations([
                'isMenuShow'
            ]),
            menuToggle(){
               this.isMenuShow(this);
                
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        background: #3c8dbc;
        width: 100%;
        height: 50px;
        
        line-height: 50px;
   
    }
    .menu-toggle{
        background-color: #3c8dbc;
        color: #fff;
        padding: 15px;
        font-size: 20px;
    }
    .menu-toggle:hover{
        background-color: #367fa9;
        cursor: pointer;
    }

    .logo{
        text-decoration: none;
        float: left;
        background-color: #367fa9;
        color: #fff;
        border-bottom: 0 solid transparent;
        transition: width .3s ease-in-out;
        display: block;
        float: left;
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        width: 200px;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 0 15px;
        font-weight: 300;
        overflow: hidden;
    }
    .small{
         width: 50px;
    }
    .small .logo-mini {
        display: block;     
    }
    .small .logo-lg {
        display: none;     
    }
    
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;

    }
    .user-info .name{
        width: 100px;height: 50px;float: right;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: white;
    }
    .user-info .user-logo{
        position: absolute;
        left:50%;
        top:50%;
        width:40px;
        height:40px;
        margin-left: -20px;
        margin-top: -20px;
        border-radius: 50%;
        border: 1px solid #ccc;
        background-color: none;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .logo-mini,.logo-lg{
        display: none;
    }
    @media all and (min-width: 0) and (max-width:666px) {
        .menu-toggle{
            display: none;
        }
        .logo-mini {
            display: block;
           
        }
        .logo{
             width: 50px;
        }
    }
    @media all and (min-width: 666px) {
        .logo{
             width: 200px;
        }
        .logo-lg {
            display: block;
           
        }
    }
</style>
