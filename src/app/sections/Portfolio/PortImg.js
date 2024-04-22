import Image from "next/image"
import styles from './port.module.css'

export default function PortImg(props){
    const {image,title} = props

    return(
        <div className={` ${styles.boxImg}`}>
            <Image src={image} alt={title} width={150} height={80} />
        </div>
    )
}