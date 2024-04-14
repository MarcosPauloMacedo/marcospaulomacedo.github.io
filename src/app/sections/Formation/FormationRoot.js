import styles from './formation.module.css'

export default function FormationRoot({children}){
    return(
        <section id='Formacao' className={`col-md-6 ${styles.formacao}`}>
            {children}
        </section>
    )
}