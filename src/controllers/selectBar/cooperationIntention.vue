<template>
	<div :model="cooperationIntention">
		<span>合作意向：</span>
		<el-select size="small" v-model="cooperationIntention.value" placeholder="请选择" >
            <el-option 
              v-for="item in cooperationIntention.options"
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
                'cooperationIntention',
            ])
        }
    }
</script>