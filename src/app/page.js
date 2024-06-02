import Box from "./components/Box";
import ScroolBox from "./components/ScroolBox";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";
import Home from "./sections/Home";
import Formation from "./sections/Formation";
import Description from "./sections/Description";
import styles from './page.module.css';
import { getTheme } from "./server/getTheme";

export const dynamic = 'force-dynamic'

export default function Page() {
  const theme = getTheme()

  return (
    <div className={`${styles.background} ${theme}`}>
      <Navbar />
      <ScroolBox>
        <Main />
        <Box style={styles.box}>
          <Home />
          <Formation />
          <Portfolio />
          <Contact />
          <Description />
        </Box>
      </ScroolBox>
    </div>
  )
}
