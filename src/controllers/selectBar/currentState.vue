<template>
	<div :model="currentState">
		<span>当前状态：</span>
		<el-select size="small" v-model="currentState.value" placeholder="请选择" >
            <el-option 
              v-for="item in currentState.options"
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
                'currentState',
            ])
        }
    }
</script>