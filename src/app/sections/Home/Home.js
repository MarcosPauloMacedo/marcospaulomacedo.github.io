import Image from 'next/image'
import styles from './img.module.css'

export function Home() {
    return (
        <div className={`${styles.img} d-flex align-items-center`}>
            <Image src="/img/dev.svg" alt="Picture of the author" width={400} height={400}  />
        </div>
    )
}