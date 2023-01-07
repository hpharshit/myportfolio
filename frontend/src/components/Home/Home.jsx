import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiReact,
  SiJavascript,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import PlatformCard from "../PlatformCard/PlatformCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import profileImage from "../../Images/blue_profile.jpg";

const Home = ({ timelines, platforms, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const background = textureLoader.load(profileImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    scene.background = background;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>W</p>
          <p>E</p>
          <p>L</p>
          <p>C</p>
          <p>O</p>
          <p>M</p>
          <p>E</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">Harshit Pandey</Typography>
        </div>

        <Link to="/projects">RESUME & PROJECTS</Link>

      </div>
        <div className="homeScrollBtn">
          <MouseOutlined />
        </div>

      <div className="homeContainer">
        <Typography variant="h3">ACADEMIC TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiC />
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiGit />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiMysql />
        </div>
      </div>
      <div className="homePlatform">
        <Typography variant="h3"> CODING PLATFORMS </Typography>

        <div className="homePlatformWrapper">
          {platforms.map((item) => (
            <PlatformCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
