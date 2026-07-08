import React, { Component } from 'react';
import Link from 'next/link';
import config from '../../utils/config';

class ReducedNavbar extends Component {
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
    return (
      <>
        <nav
          id='navbar'
          className='navbar fixed-top navbar-expand-lg main-navbar bg-white'
        >
          <div className='container-reduced-navbar'>
            <Link href='/saas-landing'>
              <a className='navbar-brand'>
                <img
                  width='300px'
                  src='/images/logo_construtec.png'
                  alt='logo'
                />
              </a>
            </Link>

            <div
              className={' navbar-collapse reduced-navbar-end-button'}
              id='navbarSupportedContent'
            >
              <div className='nav-btn '>
                <Link href='./'>
                  <a className='default-btn bg-red'>Volver</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default ReducedNavbar;
