const btn = document.querySelector('.btn_Add_Tarefa');
const input = document.querySelector('.input_Tarefas');

const listaCompleta = document.querySelector('.lista_tarefas');

let listaDeTarefas = [];

function limparInput() {
    input.value = '';
}

function adicionarTarefaArray() {
    const erroAnterior = document.querySelector('.msg-erro');
    if (erroAnterior) erroAnterior.remove();

    if (input.value.trim() === '') {

        const p = document.createElement("p");
        p.classList.add('msg-erro');
        p.innerHTML = `<strong>* Por favor</strong> , insira uma descrição para a tarefa.`;

        document.getElementById("container").appendChild(p);

        setTimeout(() => p.remove(), 5000);

    } else {
        listaDeTarefas.push({
            tarefa: input.value,
            check: false
        });
    
        limparInput();
        mostrarTarefas();
    }
}

function mostrarTarefas() {
    let novaLi = '';

    if (document.body.classList != 'dark-mode') {
        listaDeTarefas.forEach((item, index) => {
            novaLi += 
            `
                <li class="tarefa ${item.check ? "itemConcluido" : ""}">
                    <img src="./src/img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                    <p>${item.tarefa}</p>
                    <img src="./src/img/trash.png" alt="lixeira" onclick="deletarItem(${index})">
                </li>
            `
        });
    } else {
        listaDeTarefas.forEach((item, index) => {
            novaLi += 
            `
                <li class="tarefa ${item.check ? "itemConcluido" : ""}">
                    <img src="./src/img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                    <p>${item.tarefa}</p>
                    <img src="./src/img/trash.png" alt="lixeira" onclick="deletarItem(${index})">
                </li>
            `
        });
    }

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(listaDeTarefas));
}

function concluirTarefa (index) {
    listaDeTarefas[index].check = !listaDeTarefas[index].check;

    console.log(listaDeTarefas[index].check)
    
    mostrarTarefas();
}

function deletarItem(index) {
    listaDeTarefas.splice(index, 1);

    mostrarTarefas();
}

function recarregarTarefas () {
    const tarefasLocalStorage = localStorage.getItem('lista');

    if (tarefasLocalStorage) {
        listaDeTarefas = JSON.parse(tarefasLocalStorage);
    }

    mostrarTarefas();
}


input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefaArray();
    }
});

recarregarTarefas();
btn.addEventListener('click', adicionarTarefaArray);