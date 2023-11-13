import { PortContn } from "./PortContn"
import { PortRoot } from "./PortRoot"
import { portData } from "@/app/data/portData"

export default function Portfolio(){
    return(
        <PortRoot>
            <PortContn list={portData} />
        </PortRoot>
    )
}