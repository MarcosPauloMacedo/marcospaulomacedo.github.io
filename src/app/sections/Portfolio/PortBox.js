'use client'

import { useRef } from "react"
import { quicksand } from "@/app/layout"
import portStyle from "./port.module.css"
import Image from "next/image"
import { PortTech } from "./PortTech"

export function PortBox(props){
    const {title,description,image,tech,link} = props
    const hRef = useRef(null)
    const divRef = useRef(null)
    const divIRef = useRef(null)

    let mouseEnterStyle = () => {

        hRef.current.classList.remove('text-light')
        hRef.current.classList.add(portStyle.styleH6)
        divRef.current.classList.add(portStyle.styleBox)
        divIRef.current.classList.add(portStyle.styleIHover)
    }

    let mouseLeaveStyle = () => {
        hRef.current.classList.remove(portStyle.styleH6)
        hRef.current.classList.add('text-light')
        divRef.current.classList.remove(portStyle.styleBox)
        divIRef.current.classList.remove(portStyle.styleIHover)
    }

    let click = (link) =>{
        window.open(link, "_blank")
    }
     
    return(
        <div ref={divRef} onMouseEnter={mouseEnterStyle} onMouseLeave={mouseLeaveStyle}  onClick={() => click(link)} id="portBox" className={`d-flex p-4 mb-4 me-md-3 border border-0 flex-column flex-md-row align-items-center align-items-md-start ${portStyle.backMobile}`}>
            <div className="mb-md-0 mb-4">
                <Image src={image} alt={title} width={150} height={80} />
            </div>
            <div className="ps-3 d-flex flex-column">
                <h6 ref={hRef} className={`text-light d-flex align-self-center align-self-md-start mb-4 ${portStyle.center}`}>
                    {title}
                    <div ref={divIRef} className={portStyle.styleI}>
                        <i class={` ms-2 bi bi-arrow-up-right`}></i>
                    </div>
                </h6>
                <p dangerouslySetInnerHTML={{__html: description}} className={`${quicksand.className} ${portStyle.styleP}`}></p>
                <div className="d-flex flex-md-wrap flex-nowrap">
                    {tech.map((item, index) => {
                        return(
                            <PortTech
                                key={index}
                                tech={item}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}