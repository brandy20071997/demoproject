import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footerstyling}>
            <div class="container">
            <div className="row">
                <div className="col-md-2">
                    <h4 style={{fontSize:"1vw"}} className={`${styles.mobilefooter} pb-4`}>Case Studies</h4>
                    <p className={styles.fontFooter}>React</p>
                    <p className={styles.fontFooter}>Vue</p>
                    <p className={styles.fontFooter}>Angular</p>
                </div>
                <div className="col-md-2">
                    <h4 style={{fontSize:"1vw"}}  className={`${styles.mobilefooter} pb-4`}>Learning center</h4>
                    <p className={styles.fontFooter}>React</p>
                    <p className={styles.fontFooter}>Vue</p>
                    <p className={styles.fontFooter}>Angular</p>
                </div>
                <div className="col-md-2">
                    <h4 style={{fontSize:"1vw"}}  className={`${styles.mobilefooter} pb-4`}>Compare</h4>
                    <p className={styles.fontFooter}>React</p>
                    <p className={styles.fontFooter}>Vue</p>
                    <p className={styles.fontFooter}>Angular</p>
                </div>
                <div className="col-md-2">
                    <h4 style={{fontSize:"1vw"}}  className={`${styles.mobilefooter} pb-4`}>More</h4>
                    <p className={styles.fontFooter}>React</p>
                    <p className={styles.fontFooter}>Vue</p>
                    <p className={styles.fontFooter}>Angular</p>
                </div>

                <div className="col-md">
                    <h1 style={{fontSize:"2vw",marginTop:"0vw"}} className={`${styles.mobilefooterStart} pb-4`}>Ready to get Started ?</h1>
<div className={styles.btncentering}>        <button className={`${styles.btnStyling} btn `}>
              
              Sign me up
            </button>
            </div>
            
            <hr></hr>

            <h5 className={styles.centerdata} >Follow us</h5>
            <div className={styles.centerdata}>
            <i style={{fontSize:"2.5vw"}} class={`${styles.square} fab fa-facebook-square mr-5`}></i>
            <i style={{fontSize:"2.5vw"}} class={`${styles.square} fab fa-instagram mr-5`}></i>
            <i  style={{fontSize:"2.5vw"}} class={`${styles.square} fab fa-linkedin mr-5`}></i>
            </div>

                    
                </div>
                </div>

                
            </div>
        </div>
    )
}
