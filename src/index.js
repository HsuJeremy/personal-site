import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home.js';
import { ProfessionalPage } from './components/ProfessionalPage.js';
import { ClassesPage } from './components/ClassesPage.js';
import { ProjectsPage } from './components/ProjectsPage.js';
import { ReadingPage } from './components/ReadingPage.js';
import { DogsPage } from './components/DogsPage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/experience' component={ProfessionalPage} />
            <Route path='/classes' component={ClassesPage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/books' component={ReadingPage} />
            <Route path='/dogs' component={DogsPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
