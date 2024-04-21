import Image from 'next/image'
import styles from './img.module.css'

export function Home() {
    return (
        <section id='home' className={`${styles.home} d-flex align-items-center justify-content-center`}>
            <div className={styles.img}>
                <Image className={styles.img} src="/img/dev.svg" alt="Picture of the author" fill='true' />
            </div>
        </section>
    )
}