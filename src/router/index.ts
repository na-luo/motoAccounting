import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';
import Summary from '@/views/Summary.vue';
import EditLabel from '@/views/EditLabel.vue'
import Mine from '@/views/Mine.vue'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'/labels/edit/:id',
    component:EditLabel
  },
  {
    path: '/summary',
    component: Summary
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '*',
    component: NotFound

  }

];

const router = new VueRouter({
  routes
});

export default router;
