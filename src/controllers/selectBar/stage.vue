<template>
	<div :model="stage">
		<span>所处阶段：</span>
		<el-select size="small" v-model="stage.value" placeholder="请选择" >
            <el-option 
              v-for="item in stage.options"
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
                'stage',
            ])
        }
    }
</script>