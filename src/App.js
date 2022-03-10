import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Dashboard from "./components/Dashboard";



function App() {
  const token = localStorage.getItem('token');
  return (

    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/*   <Route exact path="/proyectos" component={Proyectos} />
            <Route component={Proyectos} /> */}
        </Switch>
      </Router>
    </>

  );
}

export default App;