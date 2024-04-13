import Box from "./components/Box";
import ScroolBox from "./components/ScroolBox";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";
import Img from "./sections/Img";
import Formacao from "./sections/Formacao";
import Description from "./sections/Description";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
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
