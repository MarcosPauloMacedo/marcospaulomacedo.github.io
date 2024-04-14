import { poppins } from '@/app/layout'
import styles from './title.module.css'

export function Subtitle(props){
    return(
        <h2 className={`${styles.title} ${poppins.className}`}>{props.text}</h2>
    )
}