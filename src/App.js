import React, { Component } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router';
import { Header } from './components/header';

import './app.scss';
import './typography/style.scss';

function App() {
  return (
    <Root>
      <Header></Header>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
