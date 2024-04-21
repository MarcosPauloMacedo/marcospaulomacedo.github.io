import { MainRoot } from "./MainRoot"
import { MainIntro } from "./MainIntro"
import { MainSocial } from "./MainSocial"

export default function Main(){
    return(
        <MainRoot>
            <MainIntro />
            <MainSocial />
        </MainRoot>
    )
}