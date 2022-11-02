/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Container from '../../common/Container'
import Footer from './Footer'
import Header from './Header'

// const Layout = ({ children }) => {
//   return (
//     <>
//     <Header />
//     <Container>{children}</Container>
//     <Footer />
//     </>
//   )
// }

// export default Layout


export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <>
    <Header />
    <Container>{this.props.children}</Container>
    <Footer />
    </>
    )
  }
}
