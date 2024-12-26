let contador = 0;
let input = document.getElementById('iptTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    let valorInput = iptTarefa.value;

    if(valorInput != ""){
        contador += 1
        let novoItem = ` <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone" >
                <i id="icone_${contador}" class="fa-regular fa-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash"></i> Deletar</button>
            </div>
        </div>`

            areaLista.innerHTML += novoItem;
            
            //zerar campos
            iptTarefa.value = "";
            iptTarefa.focus();
    } else {
        alert("Digite alguma tarefa!");
    }
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-regular', 'fa-circle');
        icone.classList.add('fa-solid', 'fa-circle-check');

        item.parentNode.appendChild(item);
    } else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-solid', 'fa-circle-check');
        icone.classList.add('fa-regular', 'fa-circle');
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


iptTarefa.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});