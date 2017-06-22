
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
::-webkit-scrollbar/*整体部分*/
{
width: 10px;
height:10px;
}

::-webkit-scrollbar-track/*滑动轨道*/
{
-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
border-radius: 0px;
background: rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb/*滑块*/
{
border-radius: 5px;
-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}

::-webkit-scrollbar-thumb:hover/*滑块效果*/
{
border-radius: 5px;
-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.4);
}
html,body {
  font-family: Helvetica, sans-serif;
  height: 100%;
  list-style: none;   
  background: #f8f8f8;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  -webkit-font-smoothing:antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-y: hidden;
}

#app{
	height: 100%;
}
</style>
