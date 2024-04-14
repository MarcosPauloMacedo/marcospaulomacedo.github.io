import portStyle from './port.module.css'
import P from '@/app/components/Paragraph'

export default function PortTech(props){
    const {tech} = props
    return(
        <div className={"d-flex"}>
            {tech.map((item, index) => (
                <P key={index} className={`${portStyle.backgroundTech} ${portStyle.fontSize16} ${portStyle.marginNone} rounded-pill ps-3 pe-3 pt-1 pb-1 mt-4 me-2 `}>{item}</P>
            ))}
        </div>
    )
}