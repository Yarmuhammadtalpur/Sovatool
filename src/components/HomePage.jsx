import React from "react";
import "./Homepage.css";
import Container from "react-bootstrap/Container";
import Header from "./Header/Header";
import NavbarLin from "./Navbar/NavbarLin";
import HomeSlider from "./HomeSlider/HomeSlider";
import TopProductCards from "./TopProducts/TopProductCards";
import TeamCard from "./TeamCard/TeamCard";
import Partners from "./Partners/Partners";
import Info from "./InfoCard/Info";
import Footer from "./Footer/Footer";

function HomePage() {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <div className="topHeader">
          <Header />
          <NavbarLin />
        </div>
        <HomeSlider />
        <TopProductCards />
        <TeamCard />
        <Partners />
        <Info />
        <Footer />
      </Container>
    </>
  );
}

export default HomePage;
