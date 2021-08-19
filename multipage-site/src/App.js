import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/contact">
            <Contact />  
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App
