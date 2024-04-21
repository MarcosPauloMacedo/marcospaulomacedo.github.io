'use client'

import { portifolios } from "./portData"
import PortBox from "./PortBox"
import PortImg from "./PortImg"
import PortTech from "./PortTech"
import PortTitle from "./PortTitle"
import PortDescription from "./PortDescription"
import styles from './port.module.css'

export function PortContn(){

    const mouseEnter = (e) => {
        e.currentTarget.classList.remove(styles.styleBoxHeader)
        e.currentTarget.classList.add(styles.styleBox)
    }

    const mouseLeave = (e) => {
        e.currentTarget.classList.remove(styles.styleBox)
        e.currentTarget.classList.add(styles.styleBoxHeader)
    }
    
    return(
        <div>
            {portifolios.map((item, index) => (
                <PortBox mouseEnter={mouseEnter} mouseLeave={mouseLeave} key={index}>
                    <PortImg key={index} image={item.image} title={item.title} />
                    <div className="ps-3 d-flex flex-column">
                        <PortTitle key={index} title={item.title} />
                        <PortDescription key={index} description={item.description} />
                        <PortTech key={index} tech={item.tech} />
                    </div>
                </PortBox>
            ))}
        </div>
    )
}