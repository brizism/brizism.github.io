import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from '../components/nav'
import numberBg from '../img/number-facts-bg.png'
import numberWf from '../img/number-facts-wireframe.jpg'
import numberSs1 from '../img/theifon1.png'
import numberSs2 from '../img/theifon2.png'

const NumberFacts = () => (
  <div>
    <Helmet
      title={'The IFON'}
    />
    <Nav pathPrev={'/indecision/'}
       prevProject={'Indecision'}
       pathNext={'/donut-studio/'}
       nextProject={'Donut Studio'}
    />
    <section className="project">
      <img src={numberBg} alt="The Interesting Facts of Numbers website"/>
      <div className="project__info">
        <h1>The Interesting Facts of Numbers</h1>
        <div className="project__desc">
          <p>A fun website that fetches facts about numbers from the NumbersAPI.</p>
          <div className="project__links">
            <a href="http://factsnumbers.bitballoon.com/" target="_blank">Visit site</a>
            <a href="https://github.com/brizism/number_facts" target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <p>There are two ways to retrieve a fact of a number, either user clicks desired number on the grid (also having the ability to shuffle numbers), and/or user enters a year. Using the powerful layout system CSSGrid, grid adapts to any screen size with ease allowing for a flexible and functional design. The overall design follows a polychromatic colour scheme for a minimalistic yet striking design.</p>
        </div>
        <div className="project__wireframes">
          <img src={numberWf} alt="Number Facts Wireframe"/>
        </div>
      </div>
      <div className="project__info project__info--dev">
        <h2>Development</h2>
        <div className="project__desc project__desc--dev">
          <p>I designed and developed this website following a mobile first approach, using vanilla Javascript, the NumbersAPI, CSSGrid, and SASS.</p>
        </div>
        <div className="project__images">
          <img src={numberSs1} alt="number facts screenshot"/>
          <img src={numberSs2} alt="number facts screenshot"/>
        </div>
      </div>
    </section>
  </div>
);

export default NumberFacts;
