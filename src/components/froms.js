export const btnWidget = (props) => {
    var title=props.title
    var type=props.type
    var theme=`btn ${props.theme}`
    return ( 
        <div className="form-group">
            <button type={type} className={theme} >{title}</button>
        </div>
     );
}
 
export  const InputField = (props) => {
    var name = props.name
    var type = props.type
    var label = props.label
    return (
        <div className="col-md-6">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} className="form-control bg-transparent" id={name} required />
            <div className="invalid-feedback">
                Please provide a valid {label}.
            </div>
        </div>

    );
}
