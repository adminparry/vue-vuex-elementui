<template>
    <div class="login-wrap">
        <div class="ms-title">{{title}}</div>
        <div class="ms-login">
            <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item> 
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
               
            </el-form>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
       
        computed: mapState([
            'title',
            'loginForm',
        ]),
        data: function(){
            return {
                rules: {
                    username: [
                        { min: 1, max: 25, message: '长度在 3 到 25 个字符'},
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 25 个字符'},
                        { pattern:/^\S+$/, message: '不能包含空格'}
                    ]
                }
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            ...mapMutations([
                'commitForm'
            ]),
            // 获取登录标示 如果存在到readme
            init(){
                const flag = localStorage.getItem('ms_username');
                flag && this.$router.push('/home')
            },
            submitForm(formName) {
                const self = this;
                console.log(self)
                self.$refs[formName].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        // 前台验证通过
                        this.commitForm(self)
                       
                        localStorage.setItem('ms_username',self.loginForm.username);
                        // self.$router.push('/readme');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: absolute;
        left: 50%;
        top: 50%;
        margin:-160px 0 0 -160px; 
        width:320px;
        height:320px;
        padding: 36px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
    }
    .ms-title{
        font-size: 16px;
 
        height: 36px;
        line-height: 36px;
        text-align: center;
        zoom: 1;
    }
    .ms-login{
      
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>