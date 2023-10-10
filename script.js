const images = [
    {'id': '1', 'url': '1.png'},
    {'id': '2', 'url': '2.png'},
    {'id': '3', 'url': '3.png'},
    {'id': '4', 'url': '4.png'},
]

const container = document.querySelector('.container-items');
for(const image of images){
    container.innerHTML += `
    <div class='item'>
    <img src= '${image.url}'
    </div>
    `
    
}

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

 // Captura as caixas de seleção e o botão
 const selectOpcao = document.getElementById('opcoes');
 const selectCidade = document.getElementById('cidade');
 const buttonPesquisar = document.getElementById('pesquisar');

 // Adiciona um evento de clique ao botão
 buttonPesquisar.addEventListener('click', function() {
     // Obtém as opções selecionadas nas caixas de seleção
     const selectedOpcao = selectOpcao.value;
     const selectedCidade = selectCidade.value;

     // Redireciona com base nas opções selecionadas
     switch (selectedOpcao + selectedCidade) {
         case 'opcao1cidade1':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200091604';
             break;
         case 'opcao1cidade2':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800146273';
             break;
         case 'opcao1cidade3':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700006233';
             break;
         case 'opcao2cidade1':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200037615';
             break;
         case 'opcao2cidade2':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800151065';
             break;
         case 'opcao2cidade3':
             alert('Não encontramos resultados para a pesquisa selecionada.')
             break;
         case 'opcao3cidade1':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1801001553';
             break;
         case 'opcao3cidade2':
             window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1801001553';
             break;
         case 'opcao3cidade3':
            alert('Não encontramos resultados para a pesquisa selecionada.')
             break;


             case 'opcao4cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200171618';
                break;
            case 'opcao4cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800044421';
                break;
            case 'opcao4cidade3':
                alert('Não encontramos resultados para a pesquisa selecionada.')
                break;
            case 'opcao5cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200040356';
                break;
            case 'opcao5cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800111625';
                break;
            case 'opcao5cidade3':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700006502';
                break;
            case 'opcao6cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200031677';
                break;
            case 'opcao6cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800300100';
                break;
            case 'opcao6cidade3':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700006165';
                break;

                case 'opcao7cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200400056';
                break;
            case 'opcao7cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800300100';
                break;
            case 'opcao7cidade3':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700163570';
                break;
            case 'opcao8cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200112462';
                break;
            case 'opcao8cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800096595';
                break;
            case 'opcao8cidade3':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700005650';
                break;
            case 'opcao9cidade1':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/13200139332';
                break;
            case 'opcao9cidade2':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/1800058824';
                break;
            case 'opcao9cidade3':
                window.location.href = 'https://www.unimed.coop.br/site/guia-medico#/provider/28700005036';
                break;
         default:
             alert('Por favor, selecione opções válidas.');
     }
 });