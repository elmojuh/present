function fazerLogin() {
	var loginUser = document.getElementById("entradaLogin").value; //ok
	var senhaUser = document.getElementById("entradaSenha").value;  //ok
	// var senhaConfirmarUser = document.getElementById("entradaConfirmarSenha").value; //ok
	// var emailUser = document.getElementById("entradaEmail").value;	//ok
	// var emailConfirmarUser = documento.getElementById("entradaConfirmarEmail").value; //ok
	// var cpfUser = document.getElementById("entradaCPF").value;	//ok

	if(loginUser.value == ""){
		alert("Informe seu login.");
	}
	
	else if(senhaUser.value == ""){
		alert("Informe sua senha.");
	}
	
	// else if(senhaConfirmarUser.value == "") {
	// 	alert("Confirme sua Senha.")
	// }
	
	// else if(emailUser.value == ""){
	// 	alert("Informe seu email.");
	// }
	
	// else if(emailConfirmarUser.value == "" || emailConfirmarUser.value != "email@fsi.br"){
	// 	alert("Confirme seu email.");
	// }
	
	// else if(cpfUser.value != ""){
	// 	alert("CPF inválido.");
	// }
	else {

		if((senhaUser=="123")&&(loginUser!="")) {
			//Autenticado
			localStorage.setItem("entradaLogin", loginUser);
			// localStorage.setItem("emailUsuario", emailUser);
			localStorage.setItem("senhaUsuario", senhaUser);
			// localStorage.setItem("cpfUsuario", cpfUser);
			window.location.href="../index/logado/persona.html";

		} else {
			//nao autenticado
			alert("Dados não conferem.");
		}
	}


	
}

function fazerCadastro(){
	var usuario = document.getElementById("entradaUsuario").value;
	var senhaUsuario = document.getElementById("entradaSenha").value;
	var senhaConfirmaUsuario = document.getElementById("entradaConfirmarSenha").value;
	var emailUsuario = document.getElementById("entradaEmail").value;
	var emailConfirmarUsuario = document.getElementById("entradaConfirmarEmail").value;
	var cpfUsuario = document.getElementById("entradaCPF").value; 

	if(loginUsuario.value == ""){
		alert("Informe seu login.");
	}
	
	else if(senhaUsuario.value == ""){
		alert("Informe sua senha.");
	}
	
	else if(senhaConfirmarUsuario.value == "") {
		alert("Confirme sua Senha.")
	}
	
	else if(emailUsuario.value == ""){
		alert("Informe seu email.");
	}
	
	else if(emailConfirmarUsuario.value == "" || emailConfirmarUsuario.value != "email@fsi.br"){
		alert("Confirme seu email.");
	}
	
	else if(cpfUsuario.value != ""){
		alert("CPF inválido.");
	}

	else {

		if((senhaUser=="123")&&(loginUser!="")) {
			//Autenticado
			localStorage.setItem("entradaLogin", loginUser);
			// localStorage.setItem("emailUsuario", emailUser);
			localStorage.setItem("senhaUsuario", senhaUser);
			// localStorage.setItem("cpfUsuario", cpfUser);
			window.location.href="../index/logado/persona.html";

		} else {
			//nao autenticado
			alert("Dados não conferem.");
		}
	}


}

function postarMensagem(event) {
	if (event.keyCode==13) { 
		var p = document.createElement("p");
		var texto = document.createTextNode("Usuario:" + document.getElementById("textoDoUsuario").value);
		.appendChild(texto);
		document.getElementById("post").appendChild();
		document.getElementById("textoDoUsuario").value = "";
    }
}
