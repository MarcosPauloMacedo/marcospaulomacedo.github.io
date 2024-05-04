export function TextArea(props){
    const {label, id, textAreaRef, rows, name} = props;

    return(
        <div className="mb-3">
            <label for={id} className="form-label">{label}</label>
            <textarea 
                className="form-control" 
                id={id} 
                ref={textAreaRef? textAreaRef: null}
                rows={rows? rows: '3'} 
                name={name}
                {...props}>
            </textarea>
        </div>
    )
}