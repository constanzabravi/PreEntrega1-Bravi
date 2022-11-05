import Swal from "sweetalert2";
import { useState, createContext } from "react";
import './Form.css'


export const FormContext = createContext({
    declaredName: "",
    declaredAddress: "",
    declaredPhone: "",
    declaredEmail: ""

})


const FormularioCliente = ({ completoDatos }) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");




    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
            Swal.fire({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,

            })
        }
        else if (email !== checkEmail && email && checkEmail) {
            Swal.fire({
                title: "Los emails no coinciden",
                html: "Por favor, intente nuevamente",
                buttons: true,
                dangerMode: true,
            })
        }

        else {
            Swal.fire({
                title: "Datos Guardados",
                icon: "success",
                buttons: true,
            })
            completoDatos(
                name,
                address,
                phone,
                email
            )
        }
    }




    return (
        <div class='body1'>
            <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"></link>
            <div class="ccheader">
                <h1>Formulario para generar orden de compra</h1>
            </div>
            <div class="wrapper">
                <form method="post" action="" class="ccform">
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-user fa-2x"></i></span>
                        <input class="ccformfield" value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="Nombre y Apellido" required />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-user fa-2x"></i></span>
                        <input class="ccformfield" value={address} onChange={(e) => setAddress(e.target.value)}   type="text" placeholder="Dirección" required />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-envelope fa-2x"></i></span>
                        <input class="ccformfield" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-envelope fa-2x"></i></span>
                        <input class="ccformfield" value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="email" placeholder="Confirme Email" required />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-mobile-phone fa-2x"></i></span>
                        <input class="ccformfield" value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Teléfono" />
                    </div>
                    <div class="ccfield-prepend">
                        <span class="ccform-addon"><i class="fa fa-comment fa-2x"></i></span>
                        <textarea class="ccformfield" name="comments" rows="8" placeholder="Comentario" required></textarea>
                    </div>
                    <div class="ccfield-prepend">
                        <button class="ccbtn"  onClick={submit}>TERMINAR ORDEN DE COMPRA</button>
                    </div>
                </form>
            </div>
        </div>
   
    )
}


export default FormularioCliente