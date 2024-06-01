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
                <PortBox link={item.link} mouseEnter={mouseEnter} mouseLeave={mouseLeave} key={index}>
                    <PortImg image={item.image} title={item.title} />
                    <div className="ps-3 d-flex flex-column">
                        <PortTitle title={item.title} />
                        <PortDescription description={item.description} />
                        <PortTech tech={item.tech} />
                    </div>
                </PortBox>
            ))}
        </div>
    )
}