export function Paragraph(props){
    const { style, className, children } = props
    
    return(
        <p style={style} className={className}>{children}</p>
    )
}