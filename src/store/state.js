// root state object.
// each Vuex instance is just a single state tree.
const state = {

  // login
  title:'研发中心',
  loginForm:{
    username:'',
    password:''
  },
  /*container*/
  // header
  isMenuShow:false,
  // slider
  items:[],
  /*table*/
  // home
  homeState:{},
  // biddingProject
  biddingProjectState:{},
  // afterMarketInstallation
  afterMarketInstallationState:{},
  /*search*/
   // projectName
  projectName:{
    value:''
  },
  // projectType
  projectType:{
    value:'',
    options:[{
      value: '住宅',
      label: '住宅'
    }, {
      value: '公建',
      label: '公建'
    }, {
      value: '其他',
      label: '其他'
    }]
  },
  // auditStatus
  auditStatus:{
    value:'',
    options:[{
      value: '待审核',
      label: '待审核'
    }, {
      value: '已审核',
      label: '已审核'
    }, {
      value: '未通过',
      label: '未通过'
    }]
  },
  // progressStatus
  progressStatus:{
    value:'',
    options:[{
      value: '设计中',
      label: '设计中'
    }, {
      value: '已生产',
      label: '已生产'
    }, {
      value: '已安装',
      label: '已安装'
    }]
  },
  // productionState
  productionState:{
    value:'',
    options:[{
      value: '已交付',
      label: '已交付'
    }, {
      value: '补办中',
      label: '补办中'
    }, {
      value: '纠错中',
      label: '纠错中'
    }, {
      value: '已安装',
      label: '已安装'
    }, {
      value: '未安装',
      label: '未安装'
    }, {
      value: '已补办',
      label: '已补办'
    }, {
      value: '已纠错',
      label: '已纠错'
    }]
  },
  // stage
  stage:{
    value:'',
    options:[{
      value: '设计派遣',
      label: '设计派遣'
    }, {
      value: '设计期间',
      label: '设计期间'
    }, {
      value: '设计确认',
      label: '设计确认'
    }, {
      value: '纠错期间',
      label: '纠错期间'
    }, {
      value: '生产期间',
      label: '生产期间'
    }, {
      value: '售后安装',
      label: '售后安装'
    }, {
      value: '补办期间',
      label: '补办期间'
    }]
  },
  // currentState
  currentState:{
    value:'',
    options:[{
      value: '中心已指派',
      label: '中心已指派'
    }, {
      value: '部门已指派',
      label: '部门已指派'
    }, {
      value: '未启动',
      label: '未启动'
    }, {
      value: '已启动',
      label: '已启动'
    }, {
      value: '开启深化',
      label: '开启深化'
    }, {
      value: '深化中',
      label: '深化中'
    }, {
      value: '深化完成',
      label: '深化完成'
    }, {
      value: '开启配模',
      label: '开启配模'
    }, {
      value: '配模中',
      label: '配模中'
    }, {
      value: '暂停中',
      label: '暂停中'
    }, {
      value: '配模完成',
      label: '配模完成'
    }, {
      value: '资料上传',
      label: '资料上传'
    }, {
      value: '资料待审核',
      label: '资料待审核'
    }, {
      value: '审核不通过',
      label: '审核不通过'
    }, {
      value: '资料已审核',
      label: '资料已审核'
    }]
  },
  // auditStatusState
  auditStatusState:{
    value:'',
    options:[{
      value: '租赁',
      label: '租赁'
    }, {
      value: '销售',
      label: '销售'
    }, {
      value: '二次配模',
      label: '二次配模'
    }, {
      value: '其他',
      label: '其他'
    }]
  },
  // cooperactionMode
  cooperationMode:{
    value:'',
    options:[{
      value: '租赁',
      label: '租赁'
    }, {
      value: '销售',
      label: '销售'
    }, {
      value: '二次配模',
      label: '二次配模'
    }, {
      value: '其他',
      label: '其他'
    }]
  },
  // outerFrameType
  outerFrameType:{
    value:'',
    options:[{
      value: '租赁',
      label: '租赁'
    }, {
      value: '销售',
      label: '销售'
    }, {
      value: '二次配模',
      label: '二次配模'
    }, {
      value: '其他',
      label: '其他'
    }]
  },
  // settleMentStatus
  settleMentStatus:{
    value:'',
    options:[{
      value: '已结算',
      label: '已结算'
    }, {
      value: '未结算',
      label: '未结算'
    }]
  },
  // errorCorrectionType
  errorCorrectionType:{
    value:'',
    options:[{
      value: '平库错误',
      label: '平库错误'
    }, {
      value: '预装错误',
      label: '预装错误'
    }, {
      value: '设计错误',
      label: '设计错误'
    }, {
      value: '生产错误',
      label: '生产错误'
    }, {
      value: '其他',
      label: '其他'
    }]
  },
  // cooperactionIntention
  cooperationIntention:{
    value:'',
    options:[{
      value: '口头协议',
      label: '口头协议'
    }, {
      value: '中标通知',
      label: '中标通知'
    }, {
      value: '正式合同',
      label: '正式合同'
    }]
  },
  // distributionDepartment
  distributionDepartment:{
    value:'',
    options:[{
      value: '1',
      label: '1'
    }, {
      value: '2',
      label: '2'
    }, {
      value: '3',
      label: '3'
    }]
  },
  priority:{
    value:'',
    options:[{
      value: '全部',
      label: '全部'
    }, {
      value: '紧急',
      label: '紧急'
    }, {
      value: '高',
      label: '高'
    }, {
      value: '中',
      label: '中'
    }, {
      value: '低',
      label: '低'
    }]
  },
}
export default state