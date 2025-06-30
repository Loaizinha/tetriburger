import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  shadow,
  position,
  type SpaceProps,
  type LayoutProps,
  type ColorProps,
  type FlexboxProps,
  type ShadowProps,
  type PositionProps,
} from "styled-system";
import { FaHome, FaUserPlus, FaSignInAlt, FaHamburger, FaList, FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav<
  SpaceProps &
  LayoutProps &
  ColorProps &
  FlexboxProps &
  ShadowProps &
  PositionProps
>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${shadow}
  ${position}
  background: #000; /* Fondo negro */
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  color: #fff; /* Letras blancas */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  padding: 8px 14px;
  &:hover {
    background: #4B1F1F;
    color: #fff;
  }
`;

const SidebarContainer = styled.aside<{ open: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  background: #000; /* Fondo negro */
  color: #fff; /* Letras blancas */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #232323;
  z-index: 1200;
  transition: transform 0.3s;
  transform: translateX(${props => (props.open ? "0" : "-100%")});
  @media (min-width: 768px) {
    transform: none;
    position: fixed;
  }
`;

const SidebarHeader = styled.div`
  padding: 32px 24px 16px 24px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Para separar logo y X */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const NavItem = styled.li<{ active?: boolean }>`
  margin: 0;
  a {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 24px;
    color: #fff;
    background: ${({ active }) => (active ? "#4B1F1F" : "none")};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    border-left: 4px solid ${({ active }) => (active ? "#4B1F1F" : "transparent")};
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    border-radius: 6px 0 0 6px;
    &:hover {
      background: #4B1F1F;
      color: #fff;
    }
  }
`;

const SidebarFooter = styled.div`
  padding: 16px 24px;
  font-size: 0.9rem;
  color: #aaa;
  border-top: 1px solid #232323;
`;

const Overlay = styled.div<{ open: boolean }>`
  display: ${props => (props.open ? "block" : "none")};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1100;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 18px;
  left: 18px;
  z-index: 1300;
  background: #e63946; /* Rojo bonito */
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #0004;
  transition: background 0.2s;
  &:hover {
    background: #b71c1c;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
  }
`;

const rutas = [
  { path: "/", texto: "Home", icon: <FaHome /> },
  { path: "/registro", texto: "Registrarse", icon: <FaUserPlus /> },
  { path: "/login", texto: "Iniciar sesión", icon: <FaSignInAlt /> },
  { path: "/menu", texto: "Menú", icon: <FaList /> },
  { path: "/producto", texto: "Productos", icon: <FaHamburger /> },
];

export default function Navegador() {
  const navRef = useRef<HTMLElement | null>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  // Limpiar refs en cada render
  linksRef.current = [];

  useEffect(() => {
    if (navRef.current && linksRef.current.length > 0) {
      gsap.from(navRef.current, {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "bounce",
      });

      gsap.from(linksRef.current, {
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        y: -20,
        ease: "power2.out",
        delay: 0.5,
      });
    }
  }, []);

  const handleHover = (index: number) => {
    const el = linksRef.current[index];
    if (el) {
      gsap.to(el, {
        scale: 1.2,
        color: "#fff",
        backgroundColor: "#4B1F1F",
        duration: 0.3,
      });
    }
  };

  const handleOut = (index: number) => {
    const el = linksRef.current[index];
    if (el) {
      gsap.to(el, {
        scale: 1,
        color: "#fff",
        backgroundColor: "#000",
        duration: 0.3,
      });
    }
  };

  return (
    <Nav ref={navRef}>
      {rutas.map((ruta, index) => (
        <NavLink
          key={index}
          to={ruta.path}
          ref={(el) => {
            linksRef.current[index] = el;
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleOut(index)}
        >
          {ruta.icon}
          {ruta.texto}
        </NavLink>
      ))}
    </Nav>
  );
}

export function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa siempre visible y fijo */}
      {!open && (
        <MenuButton onClick={() => setOpen(true)}>
          <FaBars />
        </MenuButton>
      )}
      <SidebarContainer open={open}>
        <SidebarHeader>
          <span style={{ color: "#fff" }}>TetrisBurger</span>
          <CloseButton onClick={() => setOpen(false)}>
            <FaTimes style={{ fontSize: "1.5em" }} />
          </CloseButton>
        </SidebarHeader>
        <NavList>
          {rutas.map((route) => (
            <NavItem key={route.path} active={location.pathname === route.path}>
              <Link to={route.path} onClick={handleNavClick}>
                {route.icon}
                {route.texto}
              </Link>
            </NavItem>
          ))}
        </NavList>
        <SidebarFooter>
          <div>© 2025 TetrisBurger</div>
        </SidebarFooter>
      </SidebarContainer>
      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
}
