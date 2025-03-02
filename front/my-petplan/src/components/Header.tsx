import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  // Adiciona sombra ao header conforme o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        headerRef.current.style.boxShadow = 
          scrollY > headerRef.current.offsetHeight
            ? '0 4px 6px rgba(0, 0, 0, 0.1)'
            : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile ao redimensionar para telas maiores
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1170 && mobileMenuActive) {
        setMobileMenuActive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuActive]);

  return (
    <header ref={headerRef}>
      <nav id="navbar">
        <Link to="/" id="nav_logo">
          <i className="fa-solid fa-shield-cat"></i> Petplan
        </Link>
        <ul id="nav_list">
          <li className="nav-item">
            <NavLink to="/" end>
              Início
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/parceiros">petshop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog">blog</NavLink>
          </li>
        </ul>
        <Link to="/cadastro" className="btn-default">
          Cadastre-se!
        </Link>
        <button id="mobile_btn" onClick={toggleMobileMenu}>
          <i className={`fa-solid ${mobileMenuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </nav>
      <div id="mobile_menu" className={mobileMenuActive ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav-item">
            <NavLink to="/" end onClick={() => setMobileMenuActive(false)}>
              Início
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/parceiros" onClick={() => setMobileMenuActive(false)}>
              petshop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" onClick={() => setMobileMenuActive(false)}>
              blog
            </NavLink>
          </li>
        </ul>
        <Link to="/login" className="btn-default" onClick={() => setMobileMenuActive(false)}>
          Login!
        </Link>
      </div>
    </header>
  );
};

export default Header;
