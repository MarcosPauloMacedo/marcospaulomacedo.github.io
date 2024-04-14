import { poppins } from '@/app/layout'
import styles from './title.module.css'
import { Text } from '../Text/Text'

export function Subtitle(props){
    return(
        <Text tag='h2' className={`${styles.title} ${poppins.className}`}>{props.text}</Text>
    )
}