import { itemList } from './navbarData'
import NavLi from './NavLi'
import styles from './navbar.module.css'
import NavUl from './NavUl'
import NavLogo from './NavLogo'
import NavButton from './NavButtom'

export default function Navbar(){
    return(
        <nav id="navbar-example2" className={`${styles.navbarBackground} navBarBackground navbar navbar-expand-lg pb-3
        fixed-top ms-md-5 me-md-5 ps-4 pe-4`}>
            <NavLogo/>
            <NavButton />
            <NavUl>
                {itemList.map((item, index) => {
                    return <NavLi key={index} href={item.href} title={item.title}/>
                })}
            </NavUl>
        </nav>
    )
}
