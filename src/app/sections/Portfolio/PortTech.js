import Text from '@/app/components/Text'
import portStyle from './port.module.css'

export default function PortTech(props){
    const {tech} = props
    
    return(
        <div className={"d-flex"}>
            {tech.map((item, index) => (
                <Text 
                    key={index} 
                    tag='p' 
                    className={`${portStyle.portTech} m-0 rounded-pill ps-3 pe-3 pt-1 pb-1 mt-4 me-2 `}>
                        {item}
                </Text>
            ))}
        </div>
    )
}