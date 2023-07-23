import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import intoSound from "../../assets/audio/Intro.mp3";

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  .logo {
    width: 150px;
    height: max-content;
    display: flex;
    justify-content: space-between;
    position: relative;
    animation: scale 3s ease forwards;
    animation-delay: 1.7s;

    .brush1 {
      width: 50px;
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      animation: height 0.5s ease forwards;
      animation-delay: 3s;

      .color {
        width: 100%;
        height: 0%;
        background-color: rgb(194, 0, 0);
        position: relative;
        z-index: 2;
        animation: moveup 0.5s ease forwards;
      }

      .lines {
        width: max-content;
        height: 100%;
        display: none;
        justify-content: space-evenly;
        position: absolute;
        z-index: 0;

        .line {
          width: 1px;
          height: 100%;
          background: red;
          margin-right: 1px;
          animation: margin 2s linear forwards, bgcolor 0.2s linear forwards;
          animation-delay: 0.2s;
        }
      }
    }

    .brush2 {
      width: 50px;
      height: 220px;
      display: flex;

      .color {
        width: 100%;
        height: 0%;
        background-color: rgb(194, 0, 0);
        animation: moveup 0.5s ease forwards;
        animation-delay: 1s;
      }
    }

    .brush3 {
      width: 50px;
      height: 0;
      position: absolute;
      z-index: 2;
      transform: skew(24.4deg);
      transform-origin: top left;
      background: red;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.33);
      animation: moveup 0.5s ease forwards;
      animation-delay: 0.5s;
    }
  }

  button {
    display: none;
  }

  @keyframes moveup {
    from {
      height: 0;
    }
    to {
      height: 220px;
    }
  }

  @keyframes movedown {
    from {
      height: 220px;
    }
    to {
      height: 0px;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes margin {
    0% {
      width: 1px;
      margin-right: 1px;
      box-shadow: none;
    }
    100% {
      width: 20px;
      margin-right: var(--m);
      box-shadow: 0 0 5px rgb(172, 172, 172), 0 0 50px var(--c);
    }
  }

  @keyframes bgcolor {
    0% {
      background: red;
    }
    30% {
      background: radial-gradient(
        circle,
        rgba(255, 0, 0, 1) 75%,
        rgba(0, 0, 0 0.545) 100%
      );
    }
    100% {
      background: var(--c);
    }
  }

  @keyframes height {
    0% {
      width: 50px;
      height: 220px;
    }
    100% {
      width: max-content;
      height: 100vh;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;

const Splash = () => {
  const color1 = useRef(null);
  const color2 = useRef(null);
  const brush3 = useRef(null);
  const lines = useRef(null);
  const audio = new Audio(intoSound);

  useEffect(() => {
    setTimeout(() => {
      color2.current.style.animation = "movedown 0.5s ease forwards";
    }, 2500);

    setTimeout(() => {
      brush3.current.style.animation = "movedown 0.5s ease forwards";
    }, 3000);

    setTimeout(() => {
      color1.current.style.animation = "opacity 0.5s ease forwards";
      lines.current.style.display = "flex";
      audio.play();
    }, 3500);

    const colors = [
      "#133286",
      "#3062af",
      "#FFF",
      "#4a7fcb",
      "#133286",
      "#3062af",
      "#628ace",
      "#949fd9",
      "#821e12",
      "#c34821",
      "red",
      "#d3ad94",
      "yellow",
      "#821e12",
      "#462652",
      "#b16f67",
      "#d3ad94",
      "#821e12",
      "#462652",
      "#4a7fcb",
      "#133286",
      "#3062af",
      "#628ace",
      "#b16f67",
      "#d3ad94",
      "yellow",
      "#821e12",
      "#821e12",
      "#c34821",
      "#821e12",
      "#c34821",
      "red",
    ];

    colors.map((color) => {
      const line = document.createElement("div");
      const randomMargin = Math.floor(Math.random() * 1000);

      line.className = "line";
      line.style.setProperty("--m", `${randomMargin}px`);
      line.style.setProperty("--c", color);
      lines.current.appendChild(line);
    });
  }, []);

  return (
    <BackgroundWrap>
      <div className="logo">
        <div className="brush1">
          <div className="color" ref={color1}></div>
          <div className="lines" ref={lines}></div>
        </div>
        <div className="brush2">
          <div className="color" ref={color2}></div>
        </div>
        <div className="brush3" ref={brush3}></div>
      </div>
    </BackgroundWrap>
  );
};

export default Splash;
