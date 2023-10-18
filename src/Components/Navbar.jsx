import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
        <h4><Link to="/" style={{textDecoration: 'none', color:"black"}}>App Logo</Link></h4>
        <div className="sidenav">
            <h5><Link to="/" style={{textDecoration: 'none', color:"black", padding:"20px"}}>Dashboard</Link></h5>
            <h5><Link to="/ads" style={{textDecoration: 'none', color:"black"}}>Create Ads</Link></h5>
            
        </div>
    </div>
  )
}

export default Navbar