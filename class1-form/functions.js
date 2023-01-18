function sendComment() {
  let nameField = document.getElementById("name");
  let emailField = document.getElementById("email");
  let commentField = document.getElementById("comment");
  
  if(!nameField.value || !emailField.value || !commentField.value) {
    return alert("Você deve preencher todos os campos antes de enviar")
  };

  if(nameField.value && emailField.value && commentField.value) {
    return alert("Enviando formulário..")
  };
}