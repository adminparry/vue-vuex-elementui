<template>
    <div>
      
      
      <el-table
        :data="afterMarketInstallationState.data"
        style="width: 100%">
        <el-table-column
          label="序号"
          type="index"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="节点项目名称"
          width="280">
        </el-table-column>
        <el-table-column
          prop="name"
          label="业务员">
        </el-table-column>
        <el-table-column
          prop="proType"
          label="项目类型">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="date"
          label="项目时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="message"
          label="操作"
          >
        </el-table-column>
      </el-table>
      <div class="alignItem">
        
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="afterMarketInstallationState.cur"
          :page-size="afterMarketInstallationState.size"
          layout="total, prev, pager, next"
          :total="afterMarketInstallationState.total">
        </el-pagination>     
      </div>
    </div>
      
   
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
      
      props:['titleText'],
      computed: mapState([
            'afterMarketInstallationState',
      ]),
      mounted(){
        this.initData();
      },
      methods: {
         aaa(){
          alert(9)
          console.log(arguments)
        },
        ...mapMutations([
            'afterMarketInstallation'
        ]),
        // 获取table数据
        async initData(){
            this.afterMarketInstallation();
        },
       
        //
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>
