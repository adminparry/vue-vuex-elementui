<template>
	<div :model="cooperationMode">
		<span>合作方式：</span>
		<el-select size="small" v-model="cooperationMode.value" placeholder="请选择" >
            <el-option 
              v-for="item in cooperationMode.options"
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
                'cooperationMode',
            ])
        }
    }
</script>