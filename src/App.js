import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Suscriptores from './components/suscriptores/Suscriptores';
import EditarSuscriptor from './components/suscriptores/EditarSuscriptor';
import MostrarSuscriptor from './components/suscriptores/MostrarSuscriptor';
import NuevoSuscriptor from './components/suscriptores/NuevoSuscriptor';
import Navbar from './components/layout/Navbar';
import Libros from './components/libros/Libros';
import MostrarLibro from './components/libros/MostrarLibro';
import NuevoLibro from './components/libros/NuevoLibro';
import EditarLibro from './components/libros/EditarLibro';
import PrestamoLibro from './components/libros/PrestamoLibro';
import Login from './components/auth/Login';
import { UserIsNotAuthenticated, UserIsAuthenticated } from './helpers/auth';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserIsAuthenticated(Libros)} />
            <Route exact path="/libros/nuevo" component={UserIsAuthenticated(NuevoLibro)} />
            <Route exact path="/libros/mostrar/:id" component={UserIsAuthenticated(MostrarLibro)} />
            <Route exact path="/libros/editar/:id" component={UserIsAuthenticated(EditarLibro)} />
            <Route exact path="/libros/prestamo/:id" component={UserIsAuthenticated(PrestamoLibro)} />


            <Route exact path="/suscriptores" component={UserIsAuthenticated(Suscriptores)} />
            <Route exact path="/suscriptores/nuevo" component={UserIsAuthenticated(NuevoSuscriptor)} />
            <Route exact path="/suscriptores/mostrar/:id" component={UserIsAuthenticated(MostrarSuscriptor)} />
            <Route exact path="/suscriptores/editar/:id" component={UserIsAuthenticated(EditarSuscriptor)} />
            <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
