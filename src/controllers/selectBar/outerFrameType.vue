<template>
	<div :model="outerFrameType">
		<span>外架类型：</span>
		<el-select size="small" v-model="outerFrameType.value" placeholder="请选择" >
            <el-option 
              v-for="item in outerFrameType.options"
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
                'outerFrameType',
            ])
        }
    }
</script>