import HomeView from '@/views/HomeView.vue';
import TaskView from '@/views/TaskView.vue';
import TaskCreate from '@/views/TaskCreate.vue';
import TaskEdit from '@/views/TaskEdit.vue';

export default [
	{
		path: '/',
		name: 'HomeView',
		component: HomeView,
		meta: { layout: 'AppLayoutMain' },
		children: [
			{
				path: '/:id',
				name: 'TaskView',
				component: TaskView,
				meta: { layout: 'AppLayoutMain' }
			},
			{
				path: '/tasks/create',
				name: 'TaskCreate',
				component: TaskCreate,
				meta: { layout: 'AppLayoutMain' }
			},
			{
				path: '/tasks/edit/:id',
				name: 'TaskEdit',
				component: TaskEdit,
				meta: { layout: 'AppLayoutMain' }
			}
	
		]
	},
]

