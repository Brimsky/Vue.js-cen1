// router/routerGuard.js
const navigationGuard = (router) => {
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
          // User is authenticated, proceed to the route
          next();
        } else {
          // User is not authenticated, redirect to login
          next('/login');
        }
      } else {
        // Non-protected route, allow access
        next();
      }
    });
  };
  
  export default navigationGuard;
  