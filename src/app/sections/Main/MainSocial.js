import Link from '@/app/components/Link'
import styles from './main.module.css'

export function MainSocial(){
    const linkGitHub = 'https://github.com/marcospaulomacedo'
    const linkLinkedin = 'https://www.linkedin.com/in/marcos-paulo-macedo/'
    const linkWhatsapp = 'https://wa.me/+5534988464788'

    return(
        <div id="mainSocial" className="d-flex">
            <Link 
                target='_blank'
                href={linkGitHub}
                className={styles.styleSocial}> 
                <i className="bi bi-github fs-4"></i>
            </Link>
            <Link 
                target='_blank'
                href={linkLinkedin}
                className={styles.styleSocial}>
                <i className="bi bi-linkedin fs-4"></i>
            </Link>
            <Link 
                target='_blank'
                href={linkWhatsapp}
                className={styles.styleSocial}> 
                <i className="bi bi-whatsapp fs-4"></i>
            </Link>
        </div>
    )
}