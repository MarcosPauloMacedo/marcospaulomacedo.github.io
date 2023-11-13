import styles from './port.module.css'

export function PortRoot({children}){
    return(
        <section className={`mt-4 col-md-6 ${styles.portifolio}`} id="Portifolio">
            {children}
        </section>
    )
}