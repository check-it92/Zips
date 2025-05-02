import React, { useRef } from "react";
import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  padding: 0 3%;
  position: fixed;
  mix-blend-mode: difference;
  transform: translateY(0px);
  left: 0;
  width: 100%;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: #fff;
  &.active {
    transform: translateY(-100px);
    /* backdrop-filter: blur(16px) saturate(180%); */
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderLogo = styled.h1`
  cursor: pointer;
  display: block;
  z-index: 10;
  position: relative;
`;

const HeaderLogoImg = styled.img``;

const HeaderSelect = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    p {
      &.selectActive {
        color: #fff !important;
      }
      color: #333;
    }
  }
`;

const HeaderRight = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

const HeaderGnb = styled.ul`
  display: flex;
  gap: 16px;
  li {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;

const HeaderEtc = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      position: absolute;
      width: 16px;
      path {
        width: 100%;
        fill: rgb(255, 255, 255);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 20px;
    li {
      span {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        position: absolute;
      }
      svg {
        opacity: 1;
        visibility: visible;
        pointer-events: default;
        position: relative;
        width: 20px;
        path {
          width: 100%;
          fill: rgb(255, 255, 255);
        }
      }
    }
  }
`;

const HeaderBars = styled.span`
  @media screen and (max-width: 1024px) {
    opacity: 0;
  }
`;

const MenuBars = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  @media screen and (max-width: 1024px) {
    opacity: 1;
    visibility: visible;
    pointer-events: default;
    position: relative;
    height: 16px;
    width: 24px;
    cursor: pointer;
    p {
      position: absolute;
      width: 100%;
      height: 3px;
      background: var(--light-color);
      border-radius: 20px;
      &:first-child {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
`;
const Header = () => {
  const commerceMatch = useMatch("/");
  const ottMatch = useMatch("/ott");
  const headerRef = useRef();
  const navigate = useNavigate();

  const mainNavigate = () => {
    navigate("/");
  };

  let prevScroll = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > prevScroll) {
      headerRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
    }
    prevScroll = scrollTop;
  });
  const handleMenuBars = () => {
    console.log("hi");
  };
  return (
    <Container ref={headerRef}>
      <HeaderLeft>
        <HeaderLogo onClick={mainNavigate}>
          <HeaderLogoImg src="./img/Logo.png" />
        </HeaderLogo>
        <HeaderSelect>
          <Link to="/">
            {commerceMatch && commerceMatch ? (
              <p className="selectActive">COMMERCE</p>
            ) : (
              <p>COMMERCE</p>
            )}
          </Link>
          <span>|</span>
          <Link to="/ott">
            {ottMatch && ottMatch ? (
              <p className="selectActive">OTT</p>
            ) : (
              <p>OTT</p>
            )}
          </Link>
        </HeaderSelect>
      </HeaderLeft>
      <HeaderRight>
        {(commerceMatch && (
          <HeaderGnb>
            <li>STYLE</li>
            <li>BEAUTY</li>
            <li>ARTIST</li>
            <li>25SS SEASON SALE</li>
          </HeaderGnb>
        )) ||
          (ottMatch && (
            <HeaderGnb>
              <li>haha</li>
            </HeaderGnb>
          ))}
        <HeaderBars>|</HeaderBars>
        <HeaderEtc>
          <li>
            <span>CART</span>
            <svg viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </li>
          <li>
            <span>SEARCH</span>
            <svg viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </li>
          <li>
            <span>LOGIN</span>
            <svg viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </li>
        </HeaderEtc>
        <MenuBars onClick={handleMenuBars}>
          <p></p>
          <p></p>
          <p></p>
        </MenuBars>
      </HeaderRight>
    </Container>
  );
};

export default Header;
