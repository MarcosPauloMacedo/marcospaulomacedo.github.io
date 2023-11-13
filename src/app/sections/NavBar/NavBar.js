import { NavLi } from "./NavLi";
import './navBar.css'

export default function NavBar(){
    return(
        <nav id="navbar-example2" className="navBarBackground navbar navbar-expand-lg pb-3
        fixed-top ms-md-5 me-md-5 ps-4 pe-4">
            <a className="fs-2 fw-semibold navbar-brand text-light" href="#">Portfolio.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="collapse navbar-collapse nav nav-pills justify-content-end" id="navbarTogglerDemo02">
                <NavLi href="#" title="Home" />
                <NavLi href="#Formacao" title="Formação" />
                <NavLi href="#Portifolio" title="Portifolio" />
                {/* <NavBar href="Experiencia" title="Experiência" /> */}
                <NavLi href="#Contato" title="Contato" />
            </ul>
        </nav>
    )
}
