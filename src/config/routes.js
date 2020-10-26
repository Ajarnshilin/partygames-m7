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
  Register:{
    path: "/Register",
    exact: true,
    component: lazy(()=> import('../pages/Register'))
  },
  Post:{
    path: "/Post",
    exact: true,
    component: lazy(()=> import('../pages/Post'))
  },
  Profile:{
    path: "/Profile",
    exact: true,
    component: lazy(()=> import('../pages/Profile'))
  },
  Details:{
    path: "/Details/:id",
    exact: true,
    component: lazy(()=> import('../pages/Details'))
  },
  Accepted:{
    path: "/Accepted/:id",
    exact: true,
    component: lazy(()=> import('../pages/Accepted'))
  },
  Joined:{
    path: "/Joined/:id",
    exact: true,
    component: lazy(()=> import('../pages/Joined'))
  },
  Posted:{
    path: "/Posted",
    exact: true,
    component: lazy(()=> import('../pages/Posted'))
  },
}