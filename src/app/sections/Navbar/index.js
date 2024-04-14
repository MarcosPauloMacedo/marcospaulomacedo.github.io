import NavButton from "./NavButtom"
import NavLogo from "./NavLogo"
import NavRoot from "./NavRoot"
import NavUl from "./NavUl"

export default function Navbar(){
    return(
        <NavRoot>
            <NavLogo/>
            <NavButton />
            <NavUl />
        </NavRoot>
    )
}