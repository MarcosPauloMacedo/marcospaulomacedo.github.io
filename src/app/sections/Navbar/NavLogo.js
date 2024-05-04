import Link from "@/app/components/Link";

export default function NavLogo(){
    return(
        <Link 
            href="#"
            style={{'color': 'var(--white)'}}
            className="fs-2 fw-semibold navbar-brand">
            Portfolio.
        </Link>
    )
}