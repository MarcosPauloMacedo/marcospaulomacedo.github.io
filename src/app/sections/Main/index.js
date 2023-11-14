import { MainRoot } from "./MainRoot"
import { MainIntro } from "./MainIntro"
import { MainSocial } from "./MainSocial"

export default function Main(){
    return(
        <MainRoot>
            <MainIntro />
            <MainSocial />
            {/* <h6 className="text-danger">Portifolio ainda em desenvolvimento..</h6> */}
        </MainRoot>
    )
}