<template>
	<div :model="projectType">
		<span>项目类型：</span>
		<el-select size="small" v-model="projectType.value" placeholder="请选择" >
            <el-option 
              v-for="item in projectType.options"
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
                'projectType',
            ])
        }
    }
</script>