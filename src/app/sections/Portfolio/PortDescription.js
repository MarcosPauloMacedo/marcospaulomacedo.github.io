import { quicksand } from "@/app/layout"
import styles from './port.module.css'

export default function PortDescription(props){
    return(
        <p dangerouslySetInnerHTML={{__html: props.description}} 
        className={`${quicksand.className} ${styles.styleP}`}></p>
    )
}