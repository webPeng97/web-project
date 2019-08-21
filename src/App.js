import React, { Fragment  } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// 页面
import LayoutHead from '@components/Layout/Head/Head'
import Loading from '@components/Loading'

// 使用redux
import { Provider } from 'react-redux'
import store from './store'

// 页面路由模块
import NoMatch from '@views/NoMatch'
import Home from '@views/Home'
import TestRedux from '@views/Test/Redux'
const routerList = [
  { path: "/home", component: Home },
  { path: "/test/redux", component: TestRedux }
]

const App = () => (
  <Router>
    <Fragment>
      <Provider store = {store}>
        <LayoutHead/>
        <Loading/>
        <div className="main-container">
          <Switch>
            <Route path='/' exact render={()=> (
              <Redirect to='/home'/>
            )}/>
            {
              routerList.map((item, index) => {
                return <Route key={index} path={item.path} render={props => <item.component {...props} /> } />
              })
            }
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Provider>
    </Fragment>
  </Router>
)

export default App
