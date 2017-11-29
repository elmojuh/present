function fazerLogin() {
	var loginUser = document.getElementById("entradaUsuario").value; //ok
	var senhaUser = document.getElementById("entradaSenha").value;  //ok
	var senhaConfirmarUser = document.getElementById("entradaConfirmarSenha").value; //ok
	var emailUser = document.getElementById("entradaEmail").value;
	var emailConfirmarUser = documento.getElementById("entradaConfirmarEmail").value;
	var cpfUser = document.getElementById("entradaCPF").value;


	if((senhaUser=="123")&&((senhaConfirmarUser=="123"))&&(loginUser!=""))&&((emailUser=="email@fsi.br"))&&((emailConfirmarUser=="email@fsi.br")) {
	//Autenticado
		localStorage.setItem("nomeUsuario", loginUser);
		window.location.href="feed.html";
	} else {
	//nao autenticado
		alert("Login ou senha não conferem.");
	}
}