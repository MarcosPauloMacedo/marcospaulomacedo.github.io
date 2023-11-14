import styles from './description.module.css';

export function Description() {
    return(
        <div className="col-md-6 p-5">
            <p className={styles.color}>Desenvolvido com <span className={`${styles.colorSpan}`}>Next.js</span> para uma experiência dinâmica e <span className={`${styles.colorSpan}`}>Bootstrap</span> para uma estrutura sólida e responsiva. A implantação é feita com a eficiência do <span className={`${styles.colorSpan}`}>GitPages.</span> </p>
        </div>
    )
}