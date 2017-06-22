<template>
	<div :model="projectName">
		<span> 项目名称：</span>
        <el-input style="width:auto;" size="small" v-model="projectName.value" placeholder="请输入内容"></el-input>
	</div>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
    export default {
    	 computed:{
            ...mapState([
                'projectName',
            ])
        }
    }
</script>