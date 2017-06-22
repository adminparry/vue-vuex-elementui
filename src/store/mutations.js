// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
import {
  homeData,
	biddingProjectData,
  afterMarketInstallationData,
	getMenu,
} from '../service/getData'

const mutations = {
	/*
	@params state, component
	*/	
  commitForm(state, component){
    component.$router.push('/home')
  },
  isMenuShow(state, component){
    state.isMenuShow = !state.isMenuShow;
  },
  // init search
  initSearch(state, component){
    state.projectType.value = '';
    state.progressStatus.value = '';
    state.projectName.value = '';
    state.auditStatus.value = '';
    state.productionState.value = '';
  },
  // afterMarketInstallation
  async afterMarketInstallation(state, component){
    let res = await afterMarketInstallationData();
    state.afterMarketInstallationState = res;
  },
  // biddingProject/ 
  async biddingProject(state, component){
  	let res = await biddingProjectData();
  	state.biddingProjectState = res;
  	 //修改state

  },
  async home(state, component){
    let res = await homeData();
    console.log(res)
    state.homeState = res;
  },
  async initMenu(state, component){
  	let res = await getMenu();
  	state.items = res;
  	
  	 //修改state

  }
}

export default mutations