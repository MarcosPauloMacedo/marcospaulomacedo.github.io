import styles from './scroolBox.module.css'

export function ScroolBox({children}) {
    return(
        <div 
            data-bs-spy="scroll" 
            data-bs-target="#navbar-example2" 
            data-bs-root-margin="0px 0px -40%" 
            data-bs-smooth-scroll="true" 
            className={`scrollspy-example d-flex flex-wrap mx-md-5 px-4 ${styles.scroolBox}`}
            >
                {children}
        </div>
    )
}