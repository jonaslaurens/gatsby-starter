import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyles = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;

  h1 {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
