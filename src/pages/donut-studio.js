import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from '../components/nav'
import donutBg from '../img/donut-studio-bg.png'
import donutWf from '../img/donut-studio-wireframe.jpg'
import donutSs1 from '../img/ds1.png'
import donutSs2 from '../img/ds2.png'

const DonutStudio = () => (
  <div>
    <Helmet
      title={'Donut Studio'}
    />
    <Nav pathPrev={'/number-facts/'}
         prevProject={'The IFON'}
         pathNext={'/domino-calc/'}
         nextProject={'Dominoes Calculator'}
    />
    <section className="project">
      <img src={donutBg} alt="Donut Studio website"/>
      <div className="project__info">
        <h1>Donut Studio</h1>
        <div className="project__desc">
          <p>Visually led landing page built around Bootstrap and SASS.</p>
          <div className="project__links">
            <a href="https://brizism.github.io/donutStudio/src/" target="_blank">Visit site</a>
            <a href="https://github.com/brizism/donutStudio" target="_blank"><i className="fa fa-github"></i></a>
          </div>
          <p>In an attempt to get comfortable with CSS frameworks, I designed and coded a simple landing page for a fictional Donut shop. I worked in the way I always do — I made rough sketches on paper and then built on this with more fidelity in Sketch. By keeping the logo super simple and a muted colour palette, it favors the vibrant images to pop creating a balanced harmony with the overall design.</p>
        </div>
        <div className="project__wireframes">
          <img src={donutWf} alt="Donut Studio Wireframe"/>
        </div>
      </div>
      <div className="project__info project__info--dev">
        <h2>Development</h2>
        <div className="project__desc project__desc--dev">
          <p>I coded this landing page using Bootstrap, CSSGrid, jQuery and SASS.</p>
        </div>
        <div className="project__images">
          <img src={donutSs1} alt="donut studio screenshot"/>
          <img src={donutSs2} alt="donut studio screenshot"/>
        </div>
      </div>
    </section>
  </div>
);

export default DonutStudio;
