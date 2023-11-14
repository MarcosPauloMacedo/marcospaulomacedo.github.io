import styles from './boxFormacao.module.css'
import { poppins } from '@/app/layout'

export function BoxFormacao(props) {
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