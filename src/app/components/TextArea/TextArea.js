export function TextArea(props){
    const {label, rows, name} = props;

    return(
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">{label}</label>
            <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows={rows? rows: '3'} 
                name={name}>
            </textarea>
        </div>
    )
}