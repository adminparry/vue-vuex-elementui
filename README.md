# 前言
vue项目整合 类似admin项目管理 视图独立 随意扩展 对于快速输出工作有很大帮助
基本vue-cli 基本vue-router 基本vuex 基本elementui 特别清纯
只需要开发所需要接口 视图均为一类


```
git clone https://github.com/adminparry/vue-vuex-elementui.git 

npm install 或者 yarn

npm run dev

```
端口 http://localhost:8010

# vue+vuex+element
> 一个示例模板 主要作为快速开发模板


> 运行
npm run build
输出生产静态资源文件

#登录界面
![](/readmeImg/login.png)
#主页
![](/readmeImg/one.png)
#各类select作为每个表单的搜索条件 需要时进行引入即可
![](/readmeImg/two.png)




# 项目布局

```
async-validator 为替换node_modules包 (async-validator新版本还在开发中)

src 下为源码
	assets 静态资源
	config ajax fetch 
	controllers 路由对应视图
	router 路由文件
	service xhr模拟数据
	store 为状态以及状态修改





## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + fetch + sass + elementui
## 友情async-validator内置校验规则

vue-validator 内置一些常用的验证规则：

required — 输入值不能为空

pattern — 必须匹配pattern表示的正则表达式

minlength — 输入值长度不能小于minlength表示的值

maxlength — 输入的值不能大于maxlength表示的值

min — 输入值不能小于min表示的值

max — 输入值不能大于max表示的值