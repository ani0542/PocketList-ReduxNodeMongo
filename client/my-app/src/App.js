import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <>
    <Provider store={store}>
          <BrowserRouter>
                <Navbar/>
                <Switch>
                     <Route exact path='/' component={Home}/>
                     <Route exact path='/about' component={About}/>
                     <Route exact path='/contact' component={Contact}/>
                </Switch>
          </BrowserRouter>
   </Provider>
        
    </>
  )
}

export default App
