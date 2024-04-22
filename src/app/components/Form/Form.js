import styles from './form.module.css'

export function Form(props){
    const {children, onSubmit, nameButton} = props

    return(
        <form onSubmit={onSubmit} className={`${styles.form} px-5 ps-5 pe-5 d-flex flex-column position-relative`}>
            {children}
            <button type="submit" className={`${styles.styleButton}`}>{nameButton? nameButton: 'Enviar'}</button>
        </form>
    )
}