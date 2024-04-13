import { poppins } from '@/app/layout'
import styles from './title.module.css'

export function Title(props){
    return(
        <h2 className={`${styles.title} ${poppins.className}`}>{props.title}</h2>
    )
}