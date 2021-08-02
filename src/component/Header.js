import React from 'react'
// import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import styles from "./Header.module.css"


export default function Header() {
    return (

        <nav style={{backgroundColor:"#253053",color:"white",border:"none",borderRadius:"0px",marginBottom:"0px"}} class="navbar navbar-expand-lg navbar-light p-4">
            <div className="container">
        <a className={`${styles.Navheadstyling} navbar-brand`} href="#">Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a className={`${styles.navContent} nav-link`} href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item">
              <a className={`${styles.navContent} nav-link`} href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a className={`${styles.navContent} nav-link`} href="#">Features</a>
            </li>
            <li class="nav-item">
              <a className={`${styles.navContent} nav-link`} href="#">Contact Us</a>
            </li>
         
           
          </ul>
          <button className={styles.btnNavstyleing} type="submit">Sign In</button>
        </div>
        <form class="form-inline">
        <ul class="navbar-nav">
            
           
          </ul>
            
    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
    
  </form>
        </div>
   
      </nav>
    
    )
}
