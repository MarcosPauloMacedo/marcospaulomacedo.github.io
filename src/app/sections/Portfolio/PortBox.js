import styles from './port.module.css'

export default function PortBox(props){
    const {mouseEnter, mouseLeave, children} = props

    return(
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            className={`${styles.box} ${styles.backMobile} ${styles.styleBoxHeader}`}>
                {children}
        </div>
    )
}