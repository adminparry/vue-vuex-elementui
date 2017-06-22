<template>
	<div>
		<auditStatus></auditStatus>
		<cooperationIntention></cooperationIntention>
		<cooperationMode></cooperationMode>
		<currentState></currentState>
		<dataPacker></dataPacker>
		<distributionDepartment></distributionDepartment>
		<errorCorrectionType></errorCorrectionType>
		<outerFrameType></outerFrameType>
		<productionState></productionState>
		<progressStatus></progressStatus>
		<projectName></projectName>
		<projectType></projectType>
		<settleMentStatus></settleMentStatus>
		<stage></stage>
		<priority></priority>
	</div>
</template>
<script>
	import auditStatus from '../selectBar/auditStatus.vue'
	import cooperationIntention from '../selectBar/cooperationIntention.vue'
	import cooperationMode from '../selectBar/cooperationMode.vue'
	import currentState from '../selectBar/currentState.vue'
	import dataPacker from '../selectBar/dataPacker.vue'
	import distributionDepartment from '../selectBar/distributionDepartment.vue'
	import errorCorrectionType from '../selectBar/errorCorrectionType.vue'
	import outerFrameType from '../selectBar/outerFrameType.vue'
	import productionState from '../selectBar/productionState.vue'
	import progressStatus from '../selectBar/progressStatus.vue'
	import projectName from '../selectBar/projectName.vue'
	import projectType from '../selectBar/projectType.vue'
	import settleMentStatus from '../selectBar/settleMentStatus.vue'
	import stage from '../selectBar/stage.vue'
	import priority from '../selectBar/priority.vue'
	export default {
		components:{
			auditStatus,cooperationIntention,cooperationMode,
			currentState,dataPacker,distributionDepartment,
			errorCorrectionType,outerFrameType,productionState,
			progressStatus,projectName,projectType,settleMentStatus,
			stage,priority
		}
	}
</script>