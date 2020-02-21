function mostrarRegistro(id){
    document.location.assign("index.php?id="+id);
}

function mostrarResultados(letraEscogida){
    document.location.assign("index.php?letra="+letraEscogida);
}

function mostrarDatosIndividuales(){
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("registro").style.display = "flex";
}

function ocultarTarjeton(){
    //recarga la página
    window.location.assign("index.php");
}

function mostrarModal(){
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("formularioModal").style.display = "block";
}

function cerrarModal(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("formularioModal").style.display = "none";
}

function validarFormulario(){
    var campoNombre, campoApellido, campoEmail, campoEmpresa;
    campoNombre = document.getElementById("nombre").value;
    campoApellido = document.getElementById("apellido").value;
    campoEmail = document.getElementById("email").value;
    campoEmpresa = document.getElementById("empresa").value;
    var mensaje = new Array();
    var flag = false;
    if(campoNombre == "" || campoApellido == "" || campoEmail == "" || campoEmpresa == ""){
        flag = true;
        mensaje.push("Llene todos los campos para enviar el formulario");
    }

    var flagPrimerCaracter = false;
    var flagArroba = false;
    var flagPosicionArroba = false;
    var flagUltimoPunto = false;
    var flagNumCaracteres = false;

    var n = campoEmail.length;
    
    if (n < 6){
        flagNumCaracteres = true;
    }

    //primer caracter
    var primerCaracter = campoEmail.charCodeAt(0);
    if ((primerCaracter>= 65 && primerCaracter>= 90) || (primerCaracter>= 97 && primerCaracter<=122)){
    }else{
        flagPrimerCaracter = true;
    }

    //@
    var numArrobas = 0;
    for (var i=0; i<n; i++){ 
        if(campoEmail.charAt(i) == "@") numArrobas++;}
        if(numArrobas != 1){
            flagArroba= true;
    }

    //posicion de la arroba
    if (!flagArroba){
        var posArroba = campoEmail.indexOf("@");
        if (posArroba >= 1 && posArroba <= campoEmail.length-5){
        }else{
            flagPosicionArroba = true;
        }
    }
    //ultimo punto
    var ultimoPunto = campoEmail.lastIndexOf(".");
    if((ultimoPunto >= campoEmail.length-5 && ultimoPunto<= campoEmail.length-3) && ultimoPunto!= 1){
    }else{
        flagUltimoPunto = true;
    }

    if((flagUltimoPunto) || (flagNumCaracteres) || (flagPosicionArroba) || (flagPrimerCaracter) || (flagArroba)){
        mensaje.push("El email no es válido");
    }

    if(!flag && !flagUltimoPunto && !flagNumCaracteres  && !flagPosicionArroba  && !flagPrimerCaracter && !flagArroba){
        document.getElementById("msj").innerHTML="";

        alert("Éxito");
    }else{

        imprimirErrores(mensaje);
    }
}
function imprimirErrores(errores){
var listaErrores = document.getElementById("msj");
    listaErrores.innerHTML = "";

errores.forEach(function (error){
    var li = document.createElement("li");
    li.innerHTML = "<span class = 'error'>"+error+"</span>";
    listaErrores.appendChild(li);
    });
}
