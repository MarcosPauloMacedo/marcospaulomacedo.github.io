export function NavLi(props){
    const {href, title} = props;

    return(
        <li class="nav-item">
            <a class="nav-link" href={href}>{title}</a>
        </li>
    )
} 