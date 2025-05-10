function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";
            //document.getElementById("mensagem").textContent = mensagem;


      let inputTarefa = document.getElementById("inputTarefa")
      //console.log(inputTarefa)puxa a informação do html retornando todo o codigo html do input no console 
      let tarefa = inputTarefa.value /* pega o valor do campo */
      //console.log(tarefa) retorna no console do navegador

            document.getElementById("mensagem").textContent = tarefa;
}

