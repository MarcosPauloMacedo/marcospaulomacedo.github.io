import Subtitle from "@/app/components/Subtitle"
import FormationRoot from "./FormationRoot"
import { FormationContn } from "./FormationContn"

export default function Formation(){
    return(
        <FormationRoot>
            <Subtitle text="Formação" />
            <FormationContn />
        </FormationRoot>
    )
}