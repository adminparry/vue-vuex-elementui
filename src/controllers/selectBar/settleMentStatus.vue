<template>
	<div :model="settleMentStatus">
		<span>状态：</span>
		<el-select size="small" v-model="settleMentStatus.value" placeholder="请选择" >
            <el-option 
              v-for="item in settleMentStatus.options"
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
                'settleMentStatus',
            ])
        }
    }
</script>