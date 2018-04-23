import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from '../components/nav'
import verboseBg from '../img/verbose-barnacle-bg.png'
import verboseWf from '../img/verbose-barnacle-wireframe.jpg'
import verboseSs1 from '../img/vb1.png'
import verboseSs2 from '../img/vb2.png'

const VerboseBarnacle = () => (
  <div>
    <Helmet
      title={'Verbose Barnacle'}
    />
    <Nav pathPrev={'/domino-calc/'}
         prevProject={'Dominoes Calculator'}
         pathNext={'/toxic-free-engine/'}
         nextProject={'Toxic-free-engine'}
    />
    <section className="project">
      <img src={verboseBg} alt="Verbose Barnacle website"/>
      <div className="project__info">
        <h1>Verbose Barnacle</h1>
        <div className="project__desc">
          <p>Verbose Barnacle is a RESTful API based application that retrieves the definition, synonyms, antonyms and example of words, with the ability to persist data using localStorage.</p>
          <div className="project__links">
            <a href="https://brizism.github.io/verbose-barnacle/" target="_blank">Visit site</a>
            <a href="https://github.com/brizism/verbose-barnacle" target="_blank"><i className="fa fa-github"></i></a>
          </div>
          <p>The concept is a words search engine that presents an array of results in a minimalistic, organized way - yet positioned with a spatial relationship with one another and using a playful, flat colour palette that makes it very visual. By having a single word on individual cards serves as a way to frame it clearly and succinctly, offering the ability to coherently navigate across different results.</p>
        </div>
        <div className="project__wireframes">
          <img src={verboseWf} alt="Verbose Barnacle Wireframe"/>
        </div>
      </div>
      <div className="project__info project__info--dev">
        <h2>Development</h2>
        <div className="project__desc project__desc--dev">
          <p>I developed this application using vanilla Javascript, localStorage, the wordsAPI, and SASS.</p>
        </div>
        <div className="project__images">
          <img src={verboseSs1} alt="verbose barnacle screenshot"/>
          <img src={verboseSs2} alt="verbose barnacle screenshot"/>
        </div>
      </div>
    </section>
  </div>
);

export default VerboseBarnacle;
