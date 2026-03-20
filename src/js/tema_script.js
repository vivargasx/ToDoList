const check = document.querySelector('#btn_tema');

function checarTema() {

    check.addEventListener('change', () => {
        if (check.checked) {
            temaAtual = document.body.classList.add('dark-mode');
            temaAtual = document.body.classList.toggle('dark');
            localStorage.setItem('tema', 'dark');
        } else {
            temaAtual = document.body.classList.remove('dark');
            temaAtual = document.body.classList.remove('dark-mode');
            localStorage.setItem('tema', 'light');
        }
    });

    //Armazenar tema escolhido no localStorage

    let temaArmazenado = localStorage.getItem('tema');

    if (temaArmazenado === 'dark') {
        document.body.classList.add('dark-mode');
        temaAtual = document.body.classList.toggle('dark');

        check.checked = true; 

    } else {
        document.body.classList.remove('dark-mode');
        temaAtual = document.body.classList.remove('dark');

        check.checked = false; 
    }
};

checarTema();