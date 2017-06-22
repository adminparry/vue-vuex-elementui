<template>
	<div :model="progressStatus">
		<span>进度状态：</span>
		<el-select size="small" v-model="progressStatus.value" placeholder="请选择" >
            <el-option 
              v-for="item in progressStatus.options"
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
                'progressStatus',
            ])
        }
    }
</script>