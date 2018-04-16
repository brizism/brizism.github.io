import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/nav'
import calcBg from '../img/domino-calc-bg.png'

const DominoCalc = () => (
  <div>
    <Nav pathPrev={'/donut-studio/'}
         prevProject={'Donut Studio'}
         pathNext={'/verbose-barnacle/'}
         nextProject={'Verbose Barnacle'}
    />
    <section className="project">
      <img src={calcBg} alt="Domino Calculator Image"/>
      <div className="project__info">
        <h1>Dominoes Calculator</h1>
        <div className="project__desc">
          <p>A calculator design inspired by the boardgame Dominoes.</p>
          <div className="project__links">
            <a href="https://brizism.github.io/domino-calc/" target="_blank">View Calculator</a>
            <a href="https://github.com/brizism/domino-calc" target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <p>The design follows a flat design approach with solid, vivid colours that give emphasis to the dots that represent the numbers of the calculator. With addition to using a sans-serif type to provide a clean, and cohesive overall look.</p>
        </div>
        <div className="project__wireframes"></div>
      </div>
      <div className="project__info project__info--dev">
        <h2>Development</h2>
        <div className="project__desc project__desc--dev">
          <p>I coded this calculator using vanilla Javascript, Flexbox and CSS custom properties (variables).</p>
        </div>
      </div>
    </section>
  </div>
);

export default DominoCalc;
