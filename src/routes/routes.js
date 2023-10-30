const mainRoutes = {
    home: "",
    register: "/register",
    login: "/login",
    admin: "/admin",
}

const dashboardRoutes = {
    home: `${mainRoutes.home}/`,
    dashboard: `${mainRoutes.admin}/dashboard`,
    profile: `${mainRoutes.admin}/profile`,
}

const routes = {
    ...mainRoutes,
    ...dashboardRoutes,
};

export default routes;

