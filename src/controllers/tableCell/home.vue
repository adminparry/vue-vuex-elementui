<template>
  <div>
    <el-table
    :data="homeState.data"
    :row-key="getRowKeys"
    :expand-row-keys="expands"
    style="width: 100%">
      <el-table-column type="expand">
        
        <template scope="props">
          <el-form inline >
            <el-form-item label="流程跟踪">
              <span>{{ props.row.progress }}</span>
            </el-form-item>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="props.row.percent" status="exception"></el-progress>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="编号" 
        type="index"
        width="80">
      </el-table-column>
      <el-table-column
        label="项目名称"
        prop="address"
        width="280">
      </el-table-column>
      <el-table-column
        label="项目类型"
        prop="name">
      </el-table-column>
      <el-table-column
        label="当前状态"
        prop="category">
      </el-table-column>
      <el-table-column
        label="业务员"
        prop="desc">
      </el-table-column>
      <el-table-column
        label="项目交期"
        prop="shop">
      </el-table-column>
      <el-table-column label="流程跟踪" inline-template>
  	    <el-button size="small" @click.native="showDetail(row)">{{row.flag?'查看跟踪':'收起'}}</el-button>
  	  </el-table-column>


   
    </el-table>
    <div class="alignItem">
          
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="homeState.cur"
        :page-size="homeState.size"
        layout="total, prev, pager, next"
        :total="homeState.total">
      </el-pagination>     
    </div>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  import { mapState, mapMutations} from 'vuex'
  export default {
    props:['titleText'],
    computed: mapState([
          'homeState',
    ]),
    mounted(){
      this.initData();
    },
    methods: {
      showDetail(arg){
        console.log(arg)
        const index = this.expands.indexOf(arg.id)
        console.log(index)
        if(index >= 0){
        arg.flag = true;
        this.expands.splice(index,1)
        }else{
        arg.flag = false;
        this.expands.push(arg.id)
        }

      },
      ...mapMutations([
          'home'
      ]),
      // 获取table数据
      async initData(){
          this.home();
      },
     
      //
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        
    	 // 获取row的key值
        getRowKeys(row) {
            return row.id;
        },
        // 要展开的行，数值的元素是row的key值
        expands: [],
       

      }
    }
  }
</script>