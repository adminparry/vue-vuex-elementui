<template>
    <div>
      
      
      <el-table
        :data="biddingProjectState.data"
        border
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
          prop="date"
          label="项目交期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          >
        </el-table-column>
       
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="alignItem">
        
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="biddingProjectState.cur"
          :page-size="biddingProjectState.size"
          layout="total, prev, pager, next"
          :total="biddingProjectState.total">
        </el-pagination>     
      </div>
    </div>
      
   
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
      
      props:['titleText'],
      computed: mapState([
            'biddingProjectState',
      ]),
      mounted(){
        this.initData();
      },
      methods: {

        ...mapMutations([
            'biddingProject'
        ]),
        // 获取table数据
        async initData(){
            this.biddingProject();
        },
        handleEdit(){
          console.log(arguments)
        },
       
        handleDelete() {
          console.log(arguments)
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
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
