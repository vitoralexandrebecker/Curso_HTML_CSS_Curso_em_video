function adicionar(){
    var txttarefa = document.getElementById('txttarefa')
    var lista = document.getElementById('lista')
    var item = document.createElement("li")
    var botaoconcluir = document.createElement("button")
    var botaodesconcluir = document.createElement("button")
    var botaoexcluir = document.createElement("button")
    var main = document.getElementById("main")
    
    item.innerHTML=txttarefa.value
    lista.appendChild(item)
    item.style.textAlign='initial'
    if(txttarefa.value.length > 28){
        main.style.width='max-content'
    }
        item.appendChild(botaoconcluir)
        botaoconcluir.style.borderRadius= '10px'
        botaoconcluir.style.marginInline= '15px'
        botaoconcluir.style.marginTop='10px'
        botaoconcluir.innerHTML='Concluir'
        botaoconcluir.addEventListener('click', concluir)
            function concluir(){
                item.style.textDecoration='line-through'
            }
        item.appendChild(botaodesconcluir)
        botaodesconcluir.style.borderRadius='10px'
        botaodesconcluir.innerHTML='Desconcluir'
        botaodesconcluir.addEventListener('click', desconcluir)
            function desconcluir(){
                item.style.textDecoration=''
            }
        item.appendChild(botaoexcluir)
        botaoexcluir.style.borderRadius='10px'
        botaoexcluir.style.marginInline= '15px'
        botaoexcluir.innerHTML='Excluir'
        botaoexcluir.addEventListener('click', excluir)
            function excluir(){
                lista.removeChild(item)
            }
    txttarefa.focus()
    txttarefa.value=''
    
}