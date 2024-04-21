import styles from './description.module.css'
import Text from '@/app/components/Text'

export function Description() {
    return(
        <footer className="p-5">
            <Text tag='p' className={styles.color}>
                Desenvolvido com 
                <span className={styles.colorSpan}> Next.js </span> 
                para uma experiência dinâmica e
                <span className={`${styles.colorSpan}`}> Bootstrap </span> 
                para uma estrutura sólida e responsiva. A implantação é feita pela ferramenta DX-Plataform da 
                <span className={`${styles.colorSpan}`}> Vercel.</span>
            </Text>
        </footer>
    )
}