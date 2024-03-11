import './App.css';
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



export default class App extends Component {
  
  apiKey = process.env.REACT_APP_API_KEY

  state = {
    progress : 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }


  render() {
  
    return (

      <>
        <BrowserRouter>
          
          
          <LoadingBar
            color='#f11946'
            height={10}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="general" />} />
          </Routes>
          <Routes>
            <Route exact path="/home" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="general" />} />
          </Routes>
          <Routes>
            <Route exact path="/business" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="business" />} />
          </Routes>
          <Routes>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="entertainment" />} />
          </Routes>
          <Routes>
            <Route exact path="/health" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="health" />} />
          </Routes>
          <Routes>
            <Route exact path="/science" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="science" />} />
          </Routes>
          <Routes>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="sports" />} />
          </Routes>
          <Routes>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} country="in" apiKey={this.apiKey} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
