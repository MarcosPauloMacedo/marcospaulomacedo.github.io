import styles from './main.module.css'

export function MainRoot({children}){
    return(
        <section id="main" className={`${styles.main} col-md-6 col-12`}>
            <div className='position-fixed col-md-5 bg-success'>
                {children}
            </div>
        </section>
    )
}