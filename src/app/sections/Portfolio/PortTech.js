import portStyle from './port.module.css'

export function PortTech(props){
    const {tech} = props
    return(
        <div className={"mt-4 me-2"}>
            <p className={`${portStyle.backgroundTech} ${portStyle.fontSize16} ${portStyle.marginNone}  rounded-pill ps-3 pe-3 pt-1 pb-1`}>{tech}</p>
        </div>
    )
}