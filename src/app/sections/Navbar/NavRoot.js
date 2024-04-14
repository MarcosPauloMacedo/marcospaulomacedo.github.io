import styles from './navbar.module.css'

export default function NavRoot({children}){
    return(
        <nav id="navbar-example2" className={`${styles.navbarBackground} navbar navbar-expand-lg pb-3 fixed-top ms-md-5 me-md-5 ps-4 pe-4`}> 
            {children}
        </nav>
    )
}
