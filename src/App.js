import React, { useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import slides from './slides';

import './App.css';
import { useHistory } from 'react-router-dom';

const NavigateRoute = (props) => {
  const containerRef = useRef();
  const history = useHistory();

  const handleKeyDown = (event) => {
    if (containerRef.current !== document.activeElement) return;

    const current = +window.location.pathname.substr(-1);
    if (event.key === 'ArrowRight') {
      history.push({ pathname: slides[current + 1]?.path });
    } else if (event.key === 'ArrowLeft') {
      history.push({ pathname: slides[current - 1]?.path });
    }
  };

  useEffect(() => {
    containerRef.current.focus();
  }, []);

  return (
    <div
      className='container'
      tabIndex='0'
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <Route {...props} />
    </div>
  );
};

function App() {
  return (
    <Router basename='/'>
      <Switch>
        {slides.map((slide) => (
          <NavigateRoute
            key={slide.path}
            path={slide.path}
            component={slide.component}
            exact
          />
        ))}

        <Redirect to='/0' />
      </Switch>
    </Router>
  );
}

export default App;
