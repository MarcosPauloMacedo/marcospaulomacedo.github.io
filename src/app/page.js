import Box from "./components/Box";
import ScroolBox from "./components/ScroolBox";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import NavBar from "./sections/NavBar";
import Portfolio from "./sections/Portfolio";
import Img from "./sections/Img";
import Formacao from "./sections/Formacao";
import Description from "./sections/Description";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <ScroolBox>
        <Main />
        <Box style={styles.box}>
          <Img />
          <Formacao />
          <Portfolio />
          <Contact />
          <Description />
        </Box>
      </ScroolBox>
    </>
  )
}
