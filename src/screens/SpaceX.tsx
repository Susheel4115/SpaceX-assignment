import { useState, useEffect } from "react";
import "./SpaceX.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import rockets from "./assets/rockets.jpg";
import shuttle from "./assets/shuttle.jpg";
import homepage from "./assets/homepage.jpg";
import mini from "./assets/mini.jpg";
import Logout from "../components/auth/Logout";
import TestComponent from "./TestComponent";
interface SectionProps {
  id: string;
  title: string;
  imageUrl: string;
  // component ? :
}

const sections: SectionProps[] = [
  {
    id: "home page",
    title: "FALCON 9",
    imageUrl: homepage,
  },
  {
    id: "rockets",
    title: "DRAGON",
    imageUrl: rockets,
  },
  {
    id: "shuttles",
    title: "STAR SHIP",
    imageUrl: shuttle,
  },
  {
    id: "mini",
    title: "STAR LINK",
    imageUrl: mini,
  },
];

const SpaceX = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.getElementById("next-section");
      if (nextSection && window.scrollY >= nextSection.offsetTop - 50) {
        setNavbarBackground("white");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //handle smooth scrolling
  // const handleClick = (id: string) => {
  //   const element = document.getElementById(id);
  //   const yOffset = -50;
  //   const y =
  //     element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });
  // };

  return (
    <div className="container">
      <header className="navbar" style={{ backgroundColor: navbarBackground }}>
        <Logo style={{ width: "10vw", height: "10vh", color: "white" }} />
        <nav>
          <ul>
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
            <li>
              <a href="/login">
                <Logout navigateTo="/login" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {sections.map(({ id, title, imageUrl }) => (
          <section key={id} id={id} className="section">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} className="image" />
          </section>
        ))}
        <TestComponent />
      </main>
    </div>
  );
};

export default SpaceX;
