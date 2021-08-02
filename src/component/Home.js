import React from "react";
import styles from "./Home.module.css";
import react from "../assets/react.png";
import Angular from "../assets/angular.png";
import vue from "../assets/vue.png";
// import contact from "../assets/contact.jpg"
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
      <section className={styles.homestyling}>
        <div className="row">
          <div className={`${styles.spacing} col-md-6`}>
            <h1 className={styles.headingdecor}>
              Reach new levels <br /> of{" "}
              <span style={{ color: "#08BA98" }}> productivity</span>
            </h1>
            <h6 className={styles.subtitiles}>
              Hubstaff Tasks is agile project management software that helps{" "}
              <br /> your team do more with less.
            </h6>
<div className={styles.btnMobile}>
            <button className={`${styles.btnStyling} btn `}>
              
              Get Account
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <h1 className={styles.sectionHeading}>Sign up, Set up, Start</h1>
        <h6 className={styles.subheadingdecor}>
          Set up recurring or one-off reminders. Send reminders to yourself and
          your teams. Group users into teams. <br />
          Track reminders as individuals complete them and so much more.
        </h6>

        <div style={{ marginTop: "5vw" }} class="card-deck container">
          <div className={`${styles.cardDecoration} card p-4 `}>
            <div class="card-body">
              <img src={react} alt="Avatar" className={styles.avatar} />
              <h5 className={styles.titlecard}>React</h5>
              <p className={styles.cardSubtitle}>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>

          <div className={`${styles.cardDecoration} card p-4 `}>
            <div class="card-body">
              <img src={Angular} alt="Avatar" className={styles.avatar} />
              <h5 className={styles.titlecard}>Angular</h5>
              <p className={styles.cardSubtitle}>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className={`${styles.cardDecoration} card p-4 `}>
            <div class="card-body">
              <img src={vue} alt="Avatar" className={styles.avatar} />
              <h5 className={styles.titlecard}>Vue</h5>
              <p className={styles.cardSubtitle}>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </section>




  


      <section   style={{backgroundColor:"#FDEFEF",padding:"6vw 4vw",marginTop:"3vw"}}>
        
       
          <div className={styles.spacingTask}>
          <div className={`${styles.cardDecorationone} card`}>
  <div class="card-body">
      <div className="row">
          <div style={{padding:"2vw 7vw"}} className="col-md ">
          <h5 className={styles.headingdecorform}>Send us a <br></br> Message !!</h5>
    <form>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Tell your Fullname*"/>
  </div>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email*"/>
  </div>
 
  <div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="*"  rows="6"></textarea>
  </div>

  <div className={styles.btnMobile}>
            <button className={`${styles.btnStylingform} btn `}>
              
              Send Us
            </button>
            </div>
  
</form>

          </div>
      </div>
   
  </div>

 
</div>






          </div>
        
      </section>
      <Footer/>
    </div>
  );
}
