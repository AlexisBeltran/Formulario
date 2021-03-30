/* ---- ---- Variables ---- ---- */
const Formulario = document.querySelector('#formulario');
const Inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const Campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}
/* ---- ---- Funciones ---- ---- */
const ValidarFormulario = (e) =>{
    switch (e.target.name){
        case 'usuario': 
            ValidarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case 'nombre': 
            ValidarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case 'password': 
            ValidarCampo(expresiones.password, e.target, 'password');
        break;
        case 'password2': 
            ValidarPassword();
        break;
        case 'correo': 
            ValidarCampo(expresiones.correo, e.target, 'correo');
        break;
        case 'telefono': 
            ValidarCampo(expresiones.telefono, e.target, 'telefono');
        break;

    }
}
const ValidarCampo = (Expresion, input, campo ) =>{
    if(Expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto')
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
        Campos[campo] = true;
    }
    else{
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
        Campos[campo] = false;
    }
}
const ValidarPassword = () =>{
    const Contraseña = document.querySelector('#password');
    const Contraseña2 = document.querySelector('#password2');

    if(Contraseña.value !== Contraseña2.value){
        document.getElementById(`grupo-password2`).classList.add('formulario-grupo-incorrecto')
        document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-password2 .formulario-input-error`).classList.add('formulario-input-error-activo');
        Campos['password'] = false;
    }
    else{
        document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-incorrecto')
        document.getElementById(`grupo-password2`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-password2 .formulario-input-error`).classList.remove('formulario-input-error-activo');
        Campos['password'] = true;
    }
}
/* ---- ---- Eventos ---- ---- */
Inputs.forEach((input) => {
    input.addEventListener('keyup', ValidarFormulario);
    input.addEventListener('blur', ValidarFormulario);
});
Formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const Terminos = document.querySelector('#terminos');
    if(Campos.usuario && Campos.nombre && Campos.password && Campos.correo && Campos.telefono && Terminos.checked){
        Formulario.reset();
        document.querySelector('#formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
        setTimeout( () =>{
            document.querySelector('#formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
            document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) =>{
                icono.classList.remove('formulario-grupo-correcto');
            });
        },4000);
    }
    else{
        document.querySelector('#formulario-mensaje').classList.add('formulario-mensaje-activo');
        setTimeout(() => {
            document.querySelector('#formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 4000);
    }
   
    
});

