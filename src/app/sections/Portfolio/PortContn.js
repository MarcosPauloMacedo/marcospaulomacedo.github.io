import { poppins } from "@/app/layout";
import { PortBox } from "./PortBox";
import styles from './port.module.css';

export function PortContn(props){
    const {list} = props;
    return(
        <div>
            <h3 className={`${styles.styleTitle} ${poppins.className}`}>Portifólio</h3>
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