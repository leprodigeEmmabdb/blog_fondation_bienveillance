import {InputField, btnWidget, TextAreaField} from "../components/froms";
const Contact = () => {
    return (
        <div className="col-lg-12 contact py-5">
            <div className="container col-lg-8 shadow p-2">
                <div className="h3 mb-4 text-center d-flex flex-column justify-content-center align-items-center">
                    Contactez-nous
                    <div class="soulignement-animation"></div>
                </div>
            </div>
            <div className="container d-flex justify-content-center bg-light shadow col-lg-5 p-4 mt-4">
                <form action="" className="form-group col-lg-12">
                    <InputField name={"name"}
                        style={"col-lg-7"}
                        label={"Noms"}
                        type={"Text"}/>
                    <InputField name={"email"}
                        label={"Email"}
                        type={"email"}/>
                    <TextAreaField title={"Message"}/>

                    <div className="text-end mt-4">
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </div>
                </form>
            </div>
            <div className="container text-center fs-3 mt-3 text-primary">
                <p>Besoin d'une reponse rapide, Cliquez ici <a className="text-warning" href="tel:+243822890433">Call</a></p>
            </div>
        </div>
    );
}

export default Contact;
