import { createRouter, createWebHashHistory } from 'vue-router'
import BitcoinViewPage from "../views/BitcoinViewPage";
import FilmsView from "../views/FIlmsView";

const routes = [
  {
    path: '/',
    name: 'BitcoinViewPage',
    component:  BitcoinViewPage
  },
  {
    path: '/FilmsView',
    name: 'Films',
    component:  FilmsView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
