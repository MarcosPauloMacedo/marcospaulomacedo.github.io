import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher"
import { getTheme } from "@/app/cookies/themes"
import NavLi from "./NavLi"

const itemList = [
    {title: "Home", href: "#main"},
    {title: "Formação", href: "#Formacao"},
    {title: "Portifólio", href: "#Portifolio"},
    {title: "Contato", href: "#Contato"}
]

export default async function NavUl(){
    const icon = await getTheme() === 'dark' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill'

    return(
        <ul className="collapse navbar-collapse nav nav-pills justify-content-end" 
        id="navbarTogglerDemo02">
            {itemList.map((item, index) => (
                <NavLi key={index} title={item.title} href={item.href} />
            ))}
            
            <ThemeSwitcher icon={icon} />
        </ul>
    )
}