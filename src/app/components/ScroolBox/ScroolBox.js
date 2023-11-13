import styles from './scroolBox.module.css'

export function ScroolBox({children}) {
    return(
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class={`scrollspy-example me-md-5 pe-md-4 ps-md-0 ps-4 pe-4 ${styles.scroolBox}`} tabindex="0">
            {children}
        </div>
    )
}