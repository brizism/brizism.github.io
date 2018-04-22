import React from 'react'
import Link from 'gatsby-link'

const Nav = (props) => (
  <div className="nav">
    <Link rel="prev" to={props.pathPrev} className="nav__link">
      Prev
      <span className="prev">
        <em>{props.prevProject}</em>
      </span>
    </Link>
    <Link rel="next" to={props.pathNext} className="nav__link">
      Next
      <span className="next">
        <em>{props.nextProject}</em>
      </span>
    </Link>
  </div>
);

export default Nav;
