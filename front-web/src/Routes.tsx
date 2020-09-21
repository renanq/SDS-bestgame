import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';
import CreateRecord from './pages/CreateRecord';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/records" component={Records} />
                <Route path="/charts" component={Charts} />
                <Route path="/vote" component={CreateRecord} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;