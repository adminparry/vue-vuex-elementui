<template>
	<div :model="distributionDepartment">
		<span>经销部：</span>
		<el-select size="small" v-model="distributionDepartment.value" placeholder="请选择" >
            <el-option 
              v-for="item in distributionDepartment.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
	</div>
</template>
<script>
	import { mapState, mapMutations} from 'vuex'
    export default {
    	  computed:{
            ...mapState([
                'distributionDepartment',
            ])
        }
    }
</script>