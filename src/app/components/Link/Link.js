export function Link(props){
    const { className, href, target, children} = props

    return(
        <a 
            href={href} 
            className={className}
            target={target? target: '_self'}>
            {children}
        </a>
    )
}