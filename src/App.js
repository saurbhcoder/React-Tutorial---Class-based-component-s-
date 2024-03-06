import './App.css';
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



export default class App extends Component {
  v = 'ddd';
  render() {
    return (

      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<News country="in" category="general" />} />
          </Routes>
          <Routes>
            <Route exact path="/business" element={<News country="in" category="business" />} />
          </Routes>
          <Routes>
            <Route exact path="/entertainment" element={<News country="in" category="entertainment" />} />
          </Routes>
          <Routes>
            <Route exact path="/health" element={<News country="in" category="health" />} />
          </Routes>
          <Routes>
            <Route exact path="/science" element={<News country="in" category="science" />} />
          </Routes>
          <Routes>
            <Route exact path="/sports" element={<News country="in" category="sports" />} />
          </Routes>
          <Routes>
            <Route exact path="/technology" element={<News country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
