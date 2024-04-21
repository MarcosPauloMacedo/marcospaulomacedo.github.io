export function FormControl(props){
    const {label, type, placeholder, name, required, autoComplete} = props;
    return(
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">{label}</label>
            <input type={type? type : "text"} 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder={placeholder} 
                name={name}
                required={required? required : true}
                autoComplete={autoComplete? autoComplete : "on"}
            />
        </div>
    )
}