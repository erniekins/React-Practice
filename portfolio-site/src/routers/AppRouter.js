import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioDash from '../components/PortfolioDash';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import ProjectPage from '../components/ProjectPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDash} exact={true} />
                <Route path='/portfolio' component={PortfolioPage} exact={true}/>
                <Route path='/portfolio/:id' component={ProjectPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
