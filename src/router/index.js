import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarChartView from '../views/BarChartView.vue'
import ScatterChartView from '../views/ScatterChartView.vue'
import LineChartView from '../views/LineChartView.vue'
import BubbleChartView from '../views/BubbleChartView.vue'
import DoughnutChartView from '../views/DoughnutChartView.vue'
import PolarAreaChartView from '../views/PolarAreaChartView.vue'
import RadarChartView from '../views/RadarChartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bar',
      name: 'bar',
      component: BarChartView
    },
    {
      path: '/line',
      name: 'line',
      component: LineChartView
    },
    {
      path: '/scatter',
      name: 'scatter',
      component: ScatterChartView
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: BubbleChartView
    },
    {
      path: '/doughnut',
      name: 'doughnut',
      component: DoughnutChartView
    },
    {
      path: '/polar',
      name: 'polar',
      component: PolarAreaChartView
    },
    {
      path: '/radar',
      name: 'radar',
      component: RadarChartView
    }
  ]
})

export default router
