<template>
    <div>
        <div  class="center">
            <div class="container">
                <div class="h-title" >
                  <span>| 起始页</span>
                  
                </div>
                <div class="h-retrieval">
                  <el-row>
                    <el-col :span="12" :xs="24">
                      <div id="one" style="width:100%;height:400px;border:1px solid #ccc;"></div>
                    </el-col>

                    <el-col :span="12" :xs="24">
                      <div id="two" style="width:100%;height:400px;border:1px solid #ccc;"></div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="12" :xs="24">
                      <div id="three" style="width:100%;height:400px;border:1px solid #ccc;"></div>
                    </el-col>

                    <el-col :span="12" :xs="24">
                      <div id="four" style="width:100%;height:400px;border:1px solid #ccc;"></div>
                    </el-col>
                  </el-row>
                    
                </div>
            </div>
            <v-footer></v-footer>
        </div>        
    </div>
   
</template>

<script>
    import echarts from 'echarts'

    import { mapState, mapMutations} from 'vuex'
    import vFooter from '../footer/index.vue'

    let option = option = {
      title : {
          text: '张三丰',
          subtext: '小标题',
          x:'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['未启动','深化中','配置中','暂停中','纠错中','补办中']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                  normal: {
                      position: 'inner'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:10, name:'完成10', selected:true},
                  {value:15, name:'未完成15'}
              ]
          },
          {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],

              data:[
                  {value:335, name:'未启动12%'},
                  {value:310, name:'深化中14%'},
                  {value:234, name:'配置中33%'},
                  {value:135, name:'暂停中54%'},
                  {value:1048, name:'纠错中34%'},
                  {value:251, name:'补办中6%'}
              ]
          }
      ]
    };
    export default {
      components:{
        vFooter
      },
      computed: mapState([
            'projectType',
            'progressStatus',
            'projectName'
      ]),
      mounted(){
        this.initSearch();
        let one = this.one();
        let two = this.two();
        let three = this.three();
        let four = this.four();
        window.onresize = () =>{
          one.resize();
          two.resize();
          three.resize();
          four.resize();
        }
      },
      methods:{
        ...mapMutations([
          'initSearch'
        ]),
        resize(charts){
          window.onresize = function(){

            charts.resize();
          }
        },
        one(){
        
          let one = echarts.init(document.getElementById('one'));
          
          

          one.setOption(option);
          return one;
        },
        two(){
        
          let two = echarts.init(document.getElementById('two'));
          
          

          two.setOption(option);
          return two;

        },
        three(){
      
          let three = echarts.init(document.getElementById('three'));
          
          

          three.setOption(option);
          return three

        },
        four(){
    
          let four = echarts.init(document.getElementById('four'));
          
          

          four.setOption(option);
          return four
        },
      }
    }
</script>
