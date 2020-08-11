import React , {useState} from 'react';
import Home from './core/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';





const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/authors" exact component={Author}/>
                
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;