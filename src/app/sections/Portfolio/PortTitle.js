import styles from './port.module.css'
import Text from '@/app/components/Text'

export default function PortTitle(props){
    return(
        <header>
            <Text tag='h4' className='d-flex'>
                {props.title}
                <span className={styles.styleI}>
                    <i className={` ms-2 bi bi-arrow-up-right`}></i>
                </span>
            </Text>
        </header>
    )
}