import React, { Component } from 'react'
import Link from 'gatsby-link'
import Modal from './modal'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      display: false
    }
  }
  
  openModal = () => {
    this.setState({ display: true })
  }

  closeModal = () => {
    this.setState({ display: false })
  }
  render() {
    return (
      <header>
        <div id="logo">
          <Link to="/">
            <svg x="0px" y="0px" viewBox="0 0 422 109.5">
              <circle fill="#D57FFF" cx="25.5" cy="25.5" r="25.5"/>
              <circle fill="#D57FFF" cx="25.5" cy="82.1" r="25.5"/>
              <polygon fill="#FFCA00" points="64.3,58.1 64.3,109 115.3,58.1 "/>
              <rect x="125.8" y="57.2" fill="#07CCA4" width="14.5" height="51"/>
              <g>
                <g>
                  <path className="bird" fill="#A3DCF6" d="M205.9,83.6h-51c0,14.1,11.4,25.5,25.5,25.5C194.5,109,205.9,97.6,205.9,83.6z"/>
                  <path className="bird" fill="#A3DCF6" d="M180.4,109.5c-14.3,0-25.9-11.6-25.9-25.9v-0.4h51.8v0.4C206.3,97.8,194.7,109.5,180.4,109.5z M155.4,84
                    c0.2,13.6,11.4,24.7,25.1,24.7s24.8-11,25.1-24.7H155.4z"/>
                </g>
                <g>
                  <path className="bird" fill="#A3DCF6" d="M162.3,83.6h51c0-14.1-11.4-25.5-25.5-25.5C173.8,58.1,162.3,69.5,162.3,83.6z"/>
                  <path className="bird" fill="#A3DCF6" d="M213.8,84h-51.8v-0.4c0-14.3,11.6-25.9,25.9-25.9c14.3,0,25.9,11.6,25.9,25.9L213.8,84L213.8,84z
                    M162.8,83.1h50.1c-0.2-13.6-11.4-24.7-25.1-24.7C174.1,58.5,163,69.5,162.8,83.1z"/>
                </g>
              </g>
              <path className="pacman" fill="#F985C4" d="M252.2,82.7l23.9-8.9c-3.6-9.7-12.9-16.6-23.9-16.6c-14.1,0-25.5,11.4-25.5,25.5s11.4,25.5,25.5,25.5
                c12.8,0,23.4-9.4,25.2-21.7L252.2,82.7z"/>
              <rect x="289.8" y="57.2" fill="#42BAEB" width="14.5" height="51"/>
              <circle fill="#FFCA00" cx="345.9" cy="82.7" r="25.5"/>
              <polygon fill="#07CCA4" points="371,108.2 422,57.2 422,108.2 "/>
            </svg>
          </Link>
        </div>
        <div onClick={this.openModal} id="hola">
          <svg x="0px" y="0px" viewBox="0 0 22.3 22.3" enableBackground="new 0 0 22.3 22.3">
            <polygon fill="#FFCA00" points="0,0 0,22.3 22.3,0 "/>
          </svg>
        </div>
        { this.state.display ? <Modal style={{ display: 'block' }} handleCloseModal={()=>this.closeModal()}/> : null }
      </header>
    )
  }
};

export default Header;
