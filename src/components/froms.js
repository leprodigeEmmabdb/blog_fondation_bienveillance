export const InputField = (props) => {
    var name = props.name
    var type = props.type
    var label = props.label
    return (
        <div className="mb-3 ">
            <label htmlFor={name}
                className="col-form-label col-lg-2">
                {label}
                <span className="text-danger">*</span>
                </label>
            <div className="col">
                <input type={type}
                    className="col form-control bg-transparent"
                    id={name}
                    required/>
                <div className="invalid-feedback">
                    Please provide a valid {label}.
                </div>
            </div>
        </div>

    );
}
export const TextAreaField = (props) => {
    var title=props.title
    return (
        <div className=" row">
            <label htmlFor="textArea" className="col-form-label col-lg-2 text-end">{title}</label>
           <div className="col">
           <textarea name="textArea" id="textArea" cols="30" rows="10" className="form-control bg-transparent col-lg-6 " placeholder="Votre messsage..."></textarea>
           </div>
        </div>
    );
}
