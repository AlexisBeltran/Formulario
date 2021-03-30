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
/* ---- ---- Funciones ---- ---- */
const ValidarFormulario = (e) =>{
    switch (e.target.name){
        case 'usuario': 
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-incorrecto')
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-usuario i').classList.add('fa-check-circle');
            }
            else{
                document.querySelector('#grupo-usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-usuario i').classList.add('fa-times-circle');
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-correcto');
            }
        break;
        case 'nombre': 
        
        break;
        case 'password': 
        
        break;
        case 'pasword2': 
        
        break;
        case 'correo': 
        
        break;
        case 'telefono': 
        
        break;

    }
}
/* ---- ---- Eventos ---- ---- */
Inputs.forEach((input) => {
    input.addEventListener('keyup', ValidarFormulario);
    input.addEventListener('blur', ValidarFormulario);
});
Formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

