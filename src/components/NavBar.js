import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: 'brown', fontFamily:'fantasy', fontSize: '1.7rem'}}>NewsStation</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{marginLeft:"30rem",color: 'brown', fontFamily:'fantasy', fontSize:'18px'}}>Home</Link>
        </li>
        
        <li className="nav-item" ><Link className="nav-link" to="/business" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Business </Link></li>         
        <li className="nav-item"><Link className="nav-link" to="/sports" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Sports </Link></li>            
        <li className="nav-item"><Link className="nav-link" to="/science" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Science </Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general" style={{color: 'brown', fontFamily:'fantasy' ,fontSize:'18px' }}>General</Link></li>


     
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar 

