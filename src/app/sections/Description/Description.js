import styles from './description.module.css';

export function Description() {
    return(
        <div className="col-md-6 p-5">
            <p className={styles.color}>Desenvolvido com Next.js para uma experiência dinâmica e Bootstrap para uma estrutura sólida e responsiva. A implantação é feita com a eficiência do GitPages.</p>
        </div>
    )
}