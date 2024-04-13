export function Link(props){
    const { className, href, title} = props

    return(
        <a className={`${className} nav-link`} href={href}>{title}</a>
    )
}