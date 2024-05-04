export function Link(props){
    const { href, style, className, target, children} = props

    return(
        <a 
            href={href} 
            style={style}
            className={className}
            target={target? target: '_self'}>
            {children}
        </a>
    )
}