import { PortBox } from "./PortBox";
import Title from "@/app/components/Title";

export function PortContn(props){
    const {list} = props;
    return(
        <div>
            <Title title='Portfólio' />
            {list.map((item, index) => {
                return(
                    <PortBox
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        tech={item.tech}
                        link={item.link}
                    />
                )
            })}
        </div>
    )
}