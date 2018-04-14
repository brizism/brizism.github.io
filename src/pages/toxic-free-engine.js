import React from 'react'
import Link from 'gatsby-link'
import toxicBg from '../img/toxic-free-engine-bg.png'
import toxicWf from '../img/toxic-free-engine-wireframe.jpg'
import toxicSs1 from '../img/tfe1.png'
import toxicSs2 from '../img/tfe2.png'

const ToxicFreeEngine = () => (
  <section className="project">
    <img src={toxicBg} alt="Toxic Free Engine website"/>
    <div className="project__info">
      <h1>Toxic-free-engine</h1>
      <div className="project__desc">
        <p>I designed and built a web application featuring filtering functionality, that allows users to find cosmetics based on the preferences provided.</p>
        <div className="project__links">
          <a href="https://brizism.github.io/toxic-free.engine/" target="_blank">Visit site</a>
          <a href="https://github.com/brizism/toxic-free.engine" target="_blank"><i className="fab fa-github"></i></a>
        </div>
        <p>I am a fan of natural products and it seemed like a good idea to create a website that would allow discovering natural makeup brands and products. This will also serve as a way to practice my Javascript skills. I like to design around real data when making sites and am keen to solve the big design problems as early as possible — especially the technical ones. The overall design uses a grid system to create a strong sense of alignment with SVG illustrations, generating a clean, a simple and elegant design that is also effective.</p>
      </div>
      <div className="project__wireframes">
        <img src={toxicWf} alt="Toxic Free Engine Wireframe"/>
      </div>
    </div>
    <div className="project__info project__info--dev">
      <h2>Development</h2>
      <div className="project__desc project__desc--dev">
        <p>This web app features the MakeupAPI, CSSGrid, vanilla Javascript and SASS.</p>
      </div>
      <div className="project__images">
        <img src={toxicSs1} alt="toxic free engine screenshot"/>
        <img src={toxicSs2} alt="toxic free engine screenshot"/>
      </div>
    </div>
  </section>
);

export default ToxicFreeEngine;
