import './App.css'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
