<template>
	<div :model="priority">
		<span>优先级：</span>
		<el-select size="small" v-model="priority.value" placeholder="请选择" >
            <el-option 
              v-for="item in priority.options"
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
                'priority',
            ])
        }
    }
</script>