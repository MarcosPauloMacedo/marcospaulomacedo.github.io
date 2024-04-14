import styles from './description.module.css'
import P from '@/app/components/Paragraph'

export function Description() {
    return(
        <footer className="col-md-6 p-5">
            <P className={styles.color}>Desenvolvido com <span className={`${styles.colorSpan}`}>Next.js</span> para uma experiência dinâmica e <span className={`${styles.colorSpan}`}>Bootstrap</span> para uma estrutura sólida e responsiva. A implantação é feita pela ferramenta DX-Plataform da <span className={`${styles.colorSpan}`}>Vercel.</span> </P>
        </footer>
    )
}