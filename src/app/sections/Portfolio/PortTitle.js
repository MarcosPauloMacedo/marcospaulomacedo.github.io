import styles from './port.module.css'
import P from '@/app/components/Paragraph'

export default function PortTitle(props){
    return(
        <header>
            <P className={'d-flex h6 mb-4'}>
                {props.title}
                <span className={styles.styleI}>
                    <i class={` ms-2 bi bi-arrow-up-right`}></i>
                </span>
            </P>
        </header>
    )
}

// text-light d-flex align-self-center align-self-md-start mb-4 ${styles.subtitle}