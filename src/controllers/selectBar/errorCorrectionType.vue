<template>
	<div :model="errorCorrectionType">
		<span>纠错类型：</span>
		<el-select size="small" v-model="errorCorrectionType.value" placeholder="请选择" >
            <el-option 
              v-for="item in errorCorrectionType.options"
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
                'errorCorrectionType',
            ])
        }
    }
</script>