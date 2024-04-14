import styles from './port.module.css'

export default function PortBox(props){
    const {mouseEnter, mouseLeave, children} = props

    return(
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
        className={`d-flex p-4 mb-4 me-md-3 border border-0 flex-column flex-md-row align-items-center align-items-md-start ${styles.backMobile}`}>
            {children}
        </div>
    )
}