export function Box(props){
    const {style, children} = props;
    
    return(
        <div className={style}>
            {children}
        </div>
    )
}