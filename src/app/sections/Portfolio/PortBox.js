import styles from './port.module.css'

export default function PortBox(props){
    const {link, mouseEnter, mouseLeave, children} = props

    return(
        <a href={link} target='blank' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            className={`${styles.box} ${styles.backMobile} ${styles.styleBoxHeader}`}>
                {children}
        </a>
    )
}