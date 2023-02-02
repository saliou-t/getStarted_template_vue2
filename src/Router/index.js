import Home from '../views/apps/users/home.vue';

import NotFound from '../views/apps/users/notFound.vue';

export default [{
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '**',
        name: '404',
        component: NotFound,
    },
]