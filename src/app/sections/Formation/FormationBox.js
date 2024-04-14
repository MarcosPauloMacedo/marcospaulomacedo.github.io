import { poppins } from '@/app/layout'
import styles from './formation.module.css'

export default function FormationBox(props) {
    const { title, subtitle, text, style } = props

    return(
        <div className={`${style} ${styles.styleBox}`}>
            <div>
                <h6 className={`${styles.titleBox} ${poppins.className}`}>{title}</h6>
                <p className={`${poppins.className} fw-semibold mb-4`}>{subtitle}</p>
            </div>
            <p className={`${styles.textBox}`}>{text}</p>
        </div>
    )
}