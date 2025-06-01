function adicionarTarefa() {
      //mostra a mensagem de adicionado com sucesso, cada vez que clica no ok;
      let mensagem = "Tarefa adicionada com sucesso!";

      //procura no documento html o ID = "inputTarefa" e adiciona a informação na variavel do tipo texto "inputTarefa"
      let inputTarefa = document.getElementById("inputTarefa")
       
      // pega o valor da varivel "inputTarefa" e adiciona a varivel tarefa 
      let tarefa = inputTarefa.value 
      
      //adiciona 
      document.getElementById("mensagem").textContent = mensagem;
      
      let listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")

      novaTarefa.textContent = tarefa;


      listaTarefas.appendChild(novaTarefa)

      inputTarefa.value = ""
}