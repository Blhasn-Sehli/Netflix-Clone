"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Netflix from "./images/homePage/netflix.png";
import Feauture from "./images/homePage/feature-1.png";
import Mobile from "./images/homePage/mobile.jpg";
import Kids from "./images/homePage/kids.png";
import Device from "./images/homePage/device-pile.png";
import LinkedIn from "./images/homePage/linkedin.png";
import Instagram from "./images/homePage/insta.png";
import Facebook from "./images/homePage/fb.png";


export default function Home() {
  return (
    <body>
      <header >
        <nav>
          <Image src={Netflix} id="logo" />
          <div className="btn">
            <button id="lang--btn">English</button>
            <button id="signUp--btn" onClick={() => {
              location.href = "/signup"
            }}> Sign In</button>
          </div>
        </nav>
      </header>

      <div className="container">
        <h1 id="text1">Unlimited movies, TV shows, and more</h1>
        <span id="text2">Watch anywhere. Cancel anytime.</span>
        <span id="text3">Ready to watch? Enter your email to create or restart your membership.</span>
        <span id="inputs">
          <input id="mail" type="email" placeholder="Email adress" />
          <button id="getSatrted">Get Started {">"}</button>
        </span>
      </div>

      <div className="content">
        <div className="texts">
          <h1>Enjoy on your TV</h1>
          <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
        </div>
        <Image id="feature" src={Feauture} alt="" />
      </div>
      <div className="content">
        <Image src={Mobile} alt="" />
        <div className="texts">
          <h1>Download your shows to <br />watch offline</h1>
          <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
        </div>
      </div>
      <div className="content">
        <div className="texts">
          <h1>Watch everywhere</h1>
          <h4>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
        </div>
        <Image id="feature" src={Device} alt="" />
      </div>
      <div className="content">
        <Image src={Kids} alt="" />
        <div className="texts">
          <h1>Create profiles for kids</h1>
          <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
        </div>
      </div>
      <div className="questionContainer">

        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <button >What is Netflix ?</button>
          <button >How much does Netflix cost ?</button>
          <button >Where can I watch ?</button>
          <button >How do I cancel ?</button>
          <button > What can i Watch on Netflix ?</button>
          <button >Is Netflix good for kids ?</button>
        </div>
        <span>Ready to watch? Enter your email to create or restart your membership.</span>
        <span id="inputs">
          <input id="mail" type="email" name="" placeholder="Email adress" />
          <button id="getSatrted">Get Started {">"}</button>
        </span>
      </div>
      <footer>
        Cloned By<b>Mpk</b>
        Contact MpK For More Clone
        <a href="http://www.linkedin.com/in/bellhassen-sehli-276419217/"><Image src={LinkedIn} alt="" /></a>
        <a href="http://www.instagram.com/bellhassen_sehli_/"><Image src={Instagram} alt="" /></a>
        <a href="http://www.facebook.com/Mpk.ishere"><Image src={Facebook} alt="" /></a>
      </footer>
      <script src="../js/homePage.js"></script>
    </body>

  );
}
