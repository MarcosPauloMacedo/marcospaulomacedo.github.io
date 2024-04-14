import Title from "@/app/components/Title"
import { PortContn } from "./PortContn"
import { PortRoot } from "./PortRoot"

export default function Portfolio(){
    return(
        <PortRoot>
            <Title title="Portfolio" />
            <PortContn />
        </PortRoot>
    )
}