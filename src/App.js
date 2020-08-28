import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Project from './components/Project'
import projects from './projects.js'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Welcome to my Portfolio</h1>
      </header>
      <main>
        <Switch>
          <Route path="/project/:slug" render={({ match: { params: { slug } } }) => {
            const project = projects.find(project => project.slug === slug);
            return <Project project={project} />
          }} />
          <Route path="/">
            <Home projects={projects} />
          </Route>
        </Switch>
      </main>
      <footer>
        Copyright 2020
      </footer>
    </BrowserRouter>
  );
}

export default App;
