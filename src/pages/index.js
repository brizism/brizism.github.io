import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import verbose from '../img/verbose-barnacle-thumbnail.png'
import toxic from '../img/toxic-free-engine-thumbnail.png'
import indecision from '../img/indecision-thumbnail.png'
import numbers from '../img/facts-numbers-thumbnail.png'
import donut from '../img/donut-studio-thumbnail.png'
import calculator from '../img/domino-calculator-thumbnail.png'

const IndexPage = () => (
  <main>
    <h1>I design & build digital products.</h1>
    <div className="work">
      <div className="work__item">
          <a href="verbose-barnacle.html">
            <div className="overlay-color">
              <h2>Verbose Barnacle</h2>
            </div>
          </a>
        <div className="work__img work__img--short">
          <img src={verbose} alt="verbose-barnacle-thumbnail"/>
        </div>
      </div>
      <div className="work__item">
        <a href="toxic-free-engine.html">
          <div className="overlay-color">
            <h2>Toxic-free-engine</h2>
          </div>
        </a>
        <div className="work__img work__img--long">
          <img src={toxic} alt="toxic-free-engine-thumbnail"/>
        </div>
      </div>
      <div className="work__item">
        <a href="indecision.html">
          <div className="overlay-color">
            <h2>Indecision</h2>
          </div>
        </a>
        <div className="work__img work__img--long">
          <img src={indecision} alt="indecision-thumbnail"/>
        </div>
      </div>
      <div className="work__item">
        <a href="number-facts.html">
          <div className="overlay-color">
            <h2>The interesting fact of numbers</h2>
          </div>
        </a>
        <div className="work__img work__img--long">
          <img src={numbers} alt="facts-numbers-thumbnail"/>
        </div>
      </div>
      <div className="work__item">
        <a href="donut-studio.html">
          <div className="overlay-color">
            <h2>Donut Studio</h2>
          </div>
        </a>
        <div className="work__img work__img--long">
          <img src={donut} alt="donut-studio-thumbnail"/>
        </div>
      </div>
      <div className="work__item">
        <a href="domino-calc.html">
          <div className="overlay-color">
            <h2>Dominoes Calculator</h2>
          </div>
        </a>
        <div className="work__img work__img--long">
          <img src={calculator} alt="dominoes-calculator-thumbnail"/>
        </div>
      </div>
    </div>
    <div className="modal" id="modal">
      <div className="modal__close">
        <svg id="close" x="0px" y="0px" viewBox="0 0 22.3 22.3" enableBackground="new 0 0 22.3 22.3">
          <polygon fill="#07CCA4" points="0,22.3 22.3,0 22.3,22.3 "/>
        </svg>
      </div>
    </div>
  </main>
)

export default IndexPage
