import Link from "@/app/components/Link";

export default function NavLi(props){
    const {href, title} = props;

    return(
        <li className="nav-item">
            <Link className={'nav-link'} href={href}>{title}</Link>
        </li>
    )
} 