
const routers = [
    {
        path: '/',
        name: 'front',
        component: () => import('@/pages/front/App'),
        children: [
            {
              path: "",
              name: "index",
              component: () => import('@/pages/front/index')
            },
            {
                path: 'problems',
                name: 'problems',
                component: () => import("@/pages/front/problems"),
                children: [
                    {
                        path: "",
                        name: "problemList",
                        component: () => import("@/components/problems/ProblemList")
                    },
                    {
                        path: ":pid",
                        name: "problemsDetail",
                        props: true,
                        component: () => import("@/components/problems/ProblemDetail"),
                    }
                ]
            },
            {
                path: 'status',
                name: 'status',
                component: () => import('@/pages/front/status')
            },
            {
                path: 'contest',
                name: 'contest',
                component: () => import('@/pages/front/contest'),
                children: [
                    {
                        path: "",
                        name: "contestList",
                        component: () => import('@/components/contest/ContestList')
                    },
                    {
                        path: "/detail",
                        name: "contestDetail",
                        component: () => import('@/components/contest/ContestDetail'),
                        props: true
                    }
                ]
            },
            {
                path: 'announce',
                name: 'announce',
                component: () => import('@/pages/front/announce')
            },
            {
                path: "personal",
                name: "personal",
                component: () => import("@/pages/front/personal")
            },
            {
                path: "rank",
                name: "rank",
                component: () => import("@/pages/front/rank"),
                children: [
                    {
                        path: "",
                        name: "",
                        component:() =>  import("@/components/rank/Rank")
                    }
                ]
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/pages/front/about")
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/pages/backend/App'),
        children: [
            {
                path: "",
                name: "index",
                component: () => import("@/pages/backend/index")
            },
            {
                path: "user",
                name: "user",
                component: () => import("@/pages/backend/user")
            },
            {
                path: "problem",
                name: "problem",
                component: () => import("@/pages/backend/problem"),
                children: [
                    {
                        path: "",
                        name: "",
                        component: () => import("@/components/problems/AdminProblemList"),
                    },
                    {
                        path: "edit",
                        name: "edit",
                        component: () => import("@/components/problems/AdminProblemEdit"),
                        props: true
                    }
                ]
            },
            {
                path: "announce",
                name: "announce",
                component: () => import('@/pages/backend/announce')
            }
        ]
    },
]


export default routers