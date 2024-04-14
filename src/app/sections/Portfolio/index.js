import Subtitle from "@/app/components/Subtitle"
import { PortContn } from "./PortContn"
import { PortRoot } from "./PortRoot"

export default function Portfolio(){
    return(
        <PortRoot>
            <Subtitle text="Portifólio" />
            <PortContn />
        </PortRoot>
    )
}