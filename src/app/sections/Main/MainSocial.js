import Link from '@/app/components/Link'
import styles from './main.module.css'

class Social {
    constructor(icon, link){
        Object.assign(this, {icon, link})
    }
}

export function MainSocial(){
    const gitHub = new Social('github', 'https://github.com/marcospaulomacedo')
    const linkedin = new Social('linkedin', 'https://www.linkedin.com/in/marcos-paulo-macedo/')
    const whatsapp = new Social('whatsapp', 'https://wa.me/+5534988464788')

    const listSocial = [gitHub, linkedin, whatsapp]

    return(
        <div id="mainSocial" className="d-flex">
            {listSocial.map((social, index) => (
                <Link 
                    key={index}
                    target='_blank'
                    href={social.link}
                    className={styles.social}> 
                    <i className={`bi bi-${social.icon} fs-4`}></i>
                </Link>
            ))}
        </div>
    )
}