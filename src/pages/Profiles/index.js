import React from "react";
import Header from "../../components/Header";
import { styled } from "styled-components";
import MoviePoster from "../../assets/images/MoviePoster.png";
import MovieName from "../../assets/images/MovieName.png";

const ProfileSectionWrap = styled.div``;

const HeroPosterWrap = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${MoviePoster}), lightgray 50% / cover no-repeat;
  height: calc(100vh - 70px);
`;

const HeroPosterContent = styled.div``;

const Profiles = () => {
  return (
    <>
      <Header />

      <ProfileSectionWrap>
        <HeroPosterWrap>
          <HeroPosterContent>
            <img src={MovieName} />
          </HeroPosterContent>
        </HeroPosterWrap>
      </ProfileSectionWrap>
    </>
  );
};

export default Profiles;
