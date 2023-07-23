import React from "react";
import { styled } from "styled-components";
import netflixLogo from "../../assets/images/NetflixLogo.png";

const HeaderWrap = styled.div`
  display: flex;
  background: #141414;
  padding: 20px 15px;

  img {
    object-fit: contain;
    width: 111px;
    height: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <img src={netflixLogo} />
    </HeaderWrap>
  );
};

export default Header;
