import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            meta: {
                requireAuth: false,
            }, 
            component: resolve => require(['../controllers/container/Home.vue'], resolve),
            children:[
                 {
                    path: '/',
                    component: resolve => require(['../controllers/navigator/home.vue'], resolve)
                },
                {
                    path: '/biddingProject',
                    component: resolve => require(['../controllers/navigator/biddingProjectContainer.vue'], resolve),
                    children:[
                        {
                           path: '/',
                           component: resolve => require(['../controllers/navigator/biddingProject.vue'], resolve), 
                        },
                        {
                            path: '/biddingProject/new',
                            meta: {
                                requireAuth: false,
                            },
                            component: resolve => require(['../controllers/navigator/biddingProjectNew.vue'], resolve),
                        }
                    ]
                    
                },
                { 
                    path: '/tempDesManager',
                    meta: {
                        requireAuth: false,
                    }, 
                    component: resolve => require(['../controllers/navigator/tempDesManager.vue'], resolve)
                }, 
                { 
                    path: '/startPage',
                    meta: {
                        requireAuth: false,
                    }, 
                    component: resolve => require(['../controllers/navigator/startPage.vue'], resolve)
                }, 
                { 
                    path: '/afterMarketInstallation',
                    meta: {
                        requireAuth: false,
                    }, 
                    component: resolve => require(['../controllers/navigator/afterMarketInstallation.vue'], resolve)
                },  
                { 
                    path: '/productionProgressing',
                    meta: {
                        requireAuth: false,
                    }, 
                    component: resolve => require(['../controllers/navigator/productionProgressing.vue'], resolve)
                }
                // {
                //     path: '/vuetable',
                //     component: resolve => require(['../controllers/navigator/VueTable.vue'], resolve)     // vue-datasource组件
                // },
                // {
                //     path: '/baseform',
                //     component: resolve => require(['../controllers/navigator/BaseForm.vue'], resolve)
                // },
                // {
                //     path: '/vueeditor',
                //     component: resolve => require(['../controllers/navigator/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                // },
                // {
                //     path: '/markdown',
                //     component: resolve => require(['../controllers/navigator/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                // },
                // {
                //     path: '/upload',
                //     component: resolve => require(['../controllers/navigator/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                // },
                // {
                //     path: '/basecharts',
                //     component: resolve => require(['../controllers/navigator/BaseCharts.vue'], resolve)   // vue-schart组件
                // },
                // {
                //     path: '/drag',
                //     component: resolve => require(['../controllers/navigator/DragList.vue'], resolve)    // 拖拽列表组件
                // }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../controllers/login/Login.vue'], resolve)
        },
        {
            path:'/test',
            meta: {
                requireAuth: false,
            }, 
            component:resolve => require(['../controllers/navigator/productionProgressing.vue'], resolve),
        }
    ]
})
const auth = {
    loggedIn(){
       
       return false;
    }
}
router.beforeEach((to, from, next) => {
    
  if (to.matched.some(record => record.meta.requireAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(auth.loggedIn(),to.fullPath)

    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router