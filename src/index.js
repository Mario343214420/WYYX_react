/**
 * Created by Administrator on 2019/1/5.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './redux/store'


import {HashRouter, Switch, Route} from 'react-router-dom'

import Login from './components/login'
import Register from './components/register'
import Main from './components/main'
import Cart from './components/cart'
import Item from './components/item'
import Topic from './containers/topic'
import U from './components/u/index'


ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/item' component={Item}/>
      <Route path='/topic' component={Topic}/>
      <Route path='/u' component={U}/>
      <Route component={Main}/>
    </Switch>
  </HashRouter>
  </Provider>
), document.getElementById('root'))