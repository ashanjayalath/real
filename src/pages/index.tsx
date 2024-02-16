import { Flex } from "@chakra-ui/react";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import Testimonials from "../../components/Testimonials";
import SideBar from "../../components/sidebar/SideBar";


export default function Home() {
  return (
    <>
    <Flex flexDir={"column"}>
      <NavBar/>
    <HeroSection/>
    <Features/>
    <Testimonials/>
    <Footer/>
    </Flex>
    
    </>
  );
}
