import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link,
  NavLink,
  useLocation, 
  useParams 
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { useState } from 'react'
// import axios from 'axios'
import Home from './Home/Home'
import Review from './Review/Review'
import frameworks from './Data/data'
import './App.css';






function SlatePage() {
  return <section className="donate page">
    <h1>Please donate</h1>
    <p>Will code for food</p>

  </section>
}


function App() {

  const location = useLocation()
  const [ draftjs, slate ] = frameworks;

  return (
      <div className="App">
        <header>
          <nav>
            <NavLink 
              to="/"
              activeClassName="selected"
              key={1}
              exact
            >
                <p className="navlink-p">Home</p>
            </NavLink>
            <NavLink 
              to="/draft"
              activeClassName="selected"
              key={2}
            >
                <p className="navlink-p">Draft JS</p>
            </NavLink>
            <NavLink 
              to="/slate"
              activeClassName="selected"
              key={3}
            >
                <p className="navlink-p">Slate</p>
            </NavLink>
          </nav>
        </header>
          <Route render={({location}) => (

            <TransitionGroup>
              <CSSTransition
              timeout={300}
              classNames='fade'
              key={location.key}
              >

              <Switch location={location}>
                
                <Route path="/slate">
                  <Review framework={slate}/>
                </Route>
                <Route path="/draft">
                  <Review framework={draftjs}/>
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
              </CSSTransition>

            </TransitionGroup>
          )} 
          />



      </div>
  );
}

export default App;
