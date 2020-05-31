import Vue from 'vue';
import Router from 'vue-router';
import TaskList from './views/task/List.vue';
import TaskNew from './views/task/New.vue';
import TaskShow from './views/task/Show.vue';
import TaskEdit from './views/task/Edit.vue';

import ThingList from './views/thing/List.vue';
import ThingNew from './views/thing/New.vue';
import ThingShow from './views/thing/Show.vue';
import ThingEdit from './views/thing/Edit.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/tasks'
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: TaskList
        },
        {
            path: '/tasks/new',
            name: 'tasks-new',
            component: TaskNew
        },
        {
            path: '/tasks/:id',
            name: 'tasks-show',
            component: TaskShow
        },
        {
            path: '/tasks/:id/edit',
            name: 'tasks-edit',
            component: TaskEdit
        },

        {
            path: '/things',
            name: 'things',
            component: ThingList
        },
        {
            path: '/things/new',
            name: 'things-new',
            component: ThingNew
        },
        {
            path: '/things/:id',
            name: 'things-show',
            component: ThingShow
        },
        {
            path: '/things/:id/edit',
            name: 'things-edit',
            component: ThingEdit
        }
    ]
});
