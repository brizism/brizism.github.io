import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from '../components/nav'
import indecisionBg from '../img/indecision-bg.png'
import indecisionSs1 from '../img/i1.png'
import indecisionSs2 from '../img/i2.png'

const Indecision = () => (
  <div>
    <Helmet
      title={'Indecision'}
    />
    <Nav pathPrev={'/toxic-free-engine/'}
         prevProject={'Toxic-free-engine'}
         pathNext={'/number-facts/'}
         nextProject={'The IFON'}
    />
    <section className="project">
      <img src={indecisionBg} alt="Indecision website"/>
      <div className="project__info">
        <h1>Indecision</h1>
        <div className="project__desc">
          <p>Indecision is a simple React.js app to jot down tasks and let the app decide for you which one to undertake. Tasks are persisted in localStorage.</p>
          <div className="project__links">
            <a href="https://brizism.github.io/Indecision-app/public/" target="_blank">Visit site</a>
            <a href="https://github.com/brizism/Indecision-app" target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <p>This simple app makes no use of the Create-React-App CLI in an effort to learn and understand the behind the scenes. Overall the app allows you to add tasks and remove them, as well as click a button that fires a random task.</p>
        </div>
        <div className="project__wireframes"></div>
      </div>
      <div className="project__info project__info--dev">
        <h2>Development</h2>
        <div className="project__desc project__desc--dev">
          <p>I developed this application using React.js, localStorage, and SASS.</p>
        </div>
        <div className="project__images">
          <img src={indecisionSs1} alt="indecision app screenshot"/>
          <img src={indecisionSs2} alt="indecision app screenshot"/>
        </div>
      </div>
    </section>
  </div>
);

export default Indecision;
