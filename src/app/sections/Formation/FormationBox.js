import { poppins } from '@/app/layout'
import styles from './formation.module.css'
import Text from '@/app/components/Text'

export default function FormationBox(props) {
    const { title, subtitle, text, style } = props

    return(
        <div className={`${style} ${styles.box}`}>
            <Text tag='h6' className={poppins.className}>{title}</Text>
            <Text tag='p' className={`${poppins.className} fw-semibold mb-4`}>{subtitle}</Text>
            <Text tag='p' className={styles.textBox}>{text}</Text>
        </div>
    )
}