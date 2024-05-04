import ReactInputMask from "react-input-mask";

export function FormControl({inputRef, ...props}){
    const {label, id, type, name, mask} = props;

    return(
        <div className="mb-3">
            <label for={id} className="form-label">{label}</label>
            <ReactInputMask
                className="form-control"
                id={id}
                ref={inputRef? inputRef: null}
                type={type? type : "text"}
                mask={mask? mask : ""}
                name={name}
                {...props}
            />
        </div>
    )
}