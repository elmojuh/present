function fazerLogin() {
	var loginUser = document.getElementById("entradaUsuario").value; //ok
	var senhaUser = document.getElementById("entradaSenha").value;  //ok
	var senhaConfirmarUser = document.getElementById("entradaConfirmarSenha").value; //ok
	var emailUser = document.getElementById("entradaEmail").value;	//ok
	var emailConfirmarUser = documento.getElementById("entradaConfirmarEmail").value; //ok
	var cpfUser = document.getElementById("entradaCPF").value;	//ok

	if(loginUser.value == ""){
		alert("Informe seu login.");
	}
	
	else if(senhaUser.value == ""){
		alert("Informe sua senha.");
	}
	
	else if(senhaConfirmarUser.value == "") {
		alert("Confirme sua Senha.")
	}
	
	else if(emailUser.value == ""){
		alert("Informe seu email.");
	}
	
	else if(emailConfirmarUser.value == "" || emailConfirmarUser.value != "email@fsi.br"){
		alert("Confirme seu email.");
	}
	
	else if(cpfUser.value != ""){
		alert("CPF inválido.");
	}


	if((senhaUser=="123")&&((senhaConfirmarUser=="123"))&&(loginUser!=""))&&((emailUser=="email@fsi.br"))&&((emailConfirmarUser=="email@fsi.br"))&&(( cpfUser != "")) {
	//Autenticado
		localStorage.setItem("nomeUsuario", loginUser);
		localStorage.setItem("emailUsuario", emailUser);
		localStorage.setItem("senhaUsuario", senhaUser);
		localStorage.setItem("cpfUsuario", cpfUser);
		window.location.href="../index/logado/configuracoes/configuracoes.html";
		window.location.href="../index/logado/configuracoes/configuracoes-de-perfil.html";
		window.location.href="../index/logado/configuracoes/configuracoes-de-local.html";
		window.location.href="../index/logado/avaliacao.html";
		window.location.href="../index/logado/busca.html";
		window.location.href="../index/logado/feed.html";
		window.location.href="../index/logado/persona.html";

	} else {
	//nao autenticado
		alert("Dados não conferem.");
	}
}