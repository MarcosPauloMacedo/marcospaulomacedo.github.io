import NavLi from "./NavLi"

const itemList = [
    {title: "Home", href: "#home"},
    {title: "Formação", href: "#Formacao"},
    {title: "Portifólio", href: "#Portifolio"},
    {title: "Contato", href: "#Contato"}
]

export default function NavUl(){
    return(
        <ul className="collapse navbar-collapse nav nav-pills justify-content-end" 
        id="navbarTogglerDemo02">
            {itemList.map((item, index) => (
                <NavLi key={index} title={item.title} href={item.href} />
            ))}
        </ul>
    )
}