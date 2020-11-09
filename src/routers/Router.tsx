import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, CreateCharacter, Map, Battle, Success, GameOver } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/character/create' component={CreateCharacter}></Route>
        <Route exact path='/map' component={Map}></Route>
        <Route exact path='/battle' component={Battle}></Route>
        <Route exact path='/success' component={Success}></Route>
        <Route exact path='/game-over' component={GameOver}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
