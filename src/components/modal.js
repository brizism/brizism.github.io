import React, { Component } from 'react'
import Link from 'gatsby-link'
import resume from '../img/briseida_montiel_resume.pdf'

const displayNone = {
  display: 'none'
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }

  componentDidMount(){
    <Modal style={{ display: 'none'}}/>
  }
  
  render() {
    return (
      <div style={!this.state.display ? displayNone : null} className="modal" id="modal">
        <div className="modal__close">
          <svg onClick={this.props.handleCloseModal} id="close" x="0px" y="0px" viewBox="0 0 22.3 22.3" enableBackground="new 0 0 22.3 22.3">
            <polygon fill="#07CCA4" points="0,22.3 22.3,0 22.3,22.3 "/>
          </svg>
        </div>
        <div className="modal__info" id="modal-info">
          <p>Front-end designer & developer living in New York. My true passion is the intersection point between design and development, when something flat and static becomes a real, usable thing. I love what I do and I aspire to craft designs and experiences that can help solve problems and communicate both aesthetically and functionally.</p>
          <div className="modal__social">
            <a href="https://www.linkedin.com/in/briseidamontiel/" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/brizism" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://twitter.com/brizism" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href={resume} target="_blank"><i className="fa fa-file-text-o"></i></a>
          </div>
        </div>
      </div>
    )
  }
};

export default Modal;
