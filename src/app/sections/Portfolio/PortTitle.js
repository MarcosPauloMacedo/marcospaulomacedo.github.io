import styles from './port.module.css'

export default function PortTitle(props){
    const {title} = props;
    return(
        <h6 className={`d-flex`}>
            {title}
            <span className={styles.styleI}>
                <i class={` ms-2 bi bi-arrow-up-right`}></i>
            </span>
        </h6>
    )
}

// text-light d-flex align-self-center align-self-md-start mb-4 ${styles.subtitle}