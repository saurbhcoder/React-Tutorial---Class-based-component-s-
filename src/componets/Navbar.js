// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Link,
  } from "react-router-dom";


export default class

    extends Component {
    //   static propTypes = {second: third}

    render() {
        return (
             
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand">News | </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to="/home" className="nav-link active" aria-current="page">home</Link></li>
                            <li className="nav-item"><Link to="/business" className="nav-link active" aria-current="page">business</Link></li>
                            <li className="nav-item"><Link to="/entertainment" className="nav-link active" aria-current="page">entertainment</Link></li>
                            <li className="nav-item"><Link to="/health" className="nav-link active" aria-current="page">health</Link></li> 
                            <li className="nav-item"><Link to="/science" className="nav-link active" aria-current="page">science</Link></li>
                            <li className="nav-item"><Link to="/sports" className="nav-link active" aria-current="page">sports</Link></li>
                            <li className="nav-item"><Link to="/technology" className="nav-link active" aria-current="page">technology</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
