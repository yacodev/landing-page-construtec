import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import config from '../../utils/config';

class Navbar extends Component {
  state = {
    collapsed: true,
    sidebarModal: false,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // Sidebar Modal
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);

    this.menuActiveClass();
  }

  menuActiveClass = () => {
    let mainNavLinks = document.querySelectorAll('.navbar-nav li a');
    window.addEventListener('scroll', () => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        if (link.hash) {
          let section = document?.querySelector(link.hash);

          if (
            section?.offsetTop <= fromTop &&
            section?.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'navbar-collapse collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <>
        <nav
          id='navbar'
          className='navbar fixed-top navbar-expand-lg main-navbar bg-white'
        >
          <div className='container'>
            <Link href='/saas-landing'>
              <a className='navbar-brand'>
                <img
                  width='300px'
                  src='/images/logo_construtec.png'
                  alt='logo'
                />
              </a>
            </Link>

            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar top-bar'></span>
              <span className='icon-bar middle-bar'></span>
              <span className='icon-bar bottom-bar'></span>
            </button>

            <div className={classOne} id='navbarSupportedContent'>
              <ul className='navbar-nav m-auto'>
                <li className='nav-item'>
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => 100}
                    className='nav-link active'
                    href='#home'
                  >
                    Inicio
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className='nav-link'
                    href='#services'
                  >
                    Servicios
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className='nav-link'
                    href='#features'
                  >
                    Caracteristicas
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className='nav-link'
                    href='#pricing'
                  >
                    Precios
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className='nav-link'
                    href='#contact'
                  >
                    Contactanos
                  </AnchorLink>
                </li>
              </ul>

              <div className='nav-btn '>
                <Link href={config.LOGIN_PLATFORM_URL}>
                  <a className='default-btn bg-red' target='_blank'>
                    Ingresar
                  </a>
                </Link>
                <Link href={config.REGISTER_PLATFORM_URL}>
                  <a className='default-btn bg-red' target='_blank'>
                    Registrarse
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
