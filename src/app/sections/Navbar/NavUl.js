export default function NavUl(props){
    return(
        <ul className="collapse navbar-collapse nav nav-pills justify-content-end" id="navbarTogglerDemo02">
            {props.children}
        </ul>
    )
}