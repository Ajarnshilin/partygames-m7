import { lazy } from "react";

export default{
  Home:{
    path: "/",
    exact: true,
    component: lazy(()=> import('../pages/Home'))
  },
  Login:{
    path: "/Login",
    exact: true,
    component: lazy(()=> import('../pages/Login'))
  },
  About:{
    path: "/About",
    exact: true,
    component: lazy(()=> import('../pages/About'))
  },
  // Posts:{
  //   path:'/post/:postId',
  //   component: lazy(()=> import('../pages/Posts'))
  // }
}