import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/Button'
import Table from '@/components/Table'
import Form from '@/components/Form'
import List from '@/components/List'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
