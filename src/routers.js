
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
                component: () => import("@/pages/front/problems")
            },
            {
                path: 'status',
                name: 'status',
                component: () => import('@/pages/front/status')
            },
            {
                path: 'contest',
                name: 'contest',
                component: () => import('@/pages/front/contest')
            },
            {
                path: 'announce',
                name: 'announce',
                component: () => import('@/pages/front/announce')
            }
        ]
    }
]
export default routers