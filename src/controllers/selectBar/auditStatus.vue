<template>
	<div :model="auditStatusState">
		<span>审核状态：</span>
		<el-select size="small" v-model="auditStatusState.value" placeholder="请选择" >
            <el-option 
              v-for="item in auditStatusState.options"
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
                'auditStatusState',
            ])
        }
    }
</script>