import dataset from './model/dataset.js';
// passando o caminho --> já consigo usar o dataset
import foods from './model/food.js';

const formFood = document.querySelector('#formFood'); //id do forms

foods.load(dataset); //array de objetos é criado
// usar num loop, array de objetos --> for of
// acessa individualmente cada objeto por meio da variável food
for(const food of foods.readAll()){ //f uma comida
  // vai inserir o nome e a imagem no HTML
  createFoodCard(food); //função sem retorno

  // inserir esse card na área dos rows no HTML no section
}
//conversão de conjunto de dados em aplicação gráfica na execução
function createFoodCard(food){ //inserção do card
  // cada vez que acessar o loop vai estar criando essa div
  // retornar o código html do card do bootstrap
  // tornar dinâmico através de food 
  // transformamos array num componente gráfico - geração dinâmica de conteúdo
  
  //controle dos cards para alinhamento
  // card-header text-center font-weight-bold
  const card = `<div class="card-food col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div class="card"> 
              <div class="card-header text-center font-weight-bold">
                <span class="food-name">
                  ${food.name}
                </span>
              </div>
              <div class="card-body p-0">
                <img src="${food.image}" alt="${food.name}" class="food-image w-100">
              </div>
            </div>
          </div>`;
  // acessa a tag section
  const cardDeck = document.querySelector('.card-deck');

  // módulos de inserção de elemento --> sempre preservando o anterior
  cardDeck.insertAdjacentHTML('beforeend', card);
}

//evento do botão ou do forms
//função anônima: evento de submissão no forms
formFood.onsubmit = (e) => {
  e.preventDefault();
  
  //pegar todos os valores de um forms
  //converter objeto FormData num JSON
  const food = Object.fromEntries(new FormData(formFood)); //tag de formulário, FormData tem todos os dados de formulário
 
  const newFood = foods.create(food);//inserção do id no local storage --> inserir id no nome e na imagem

  //dados do formulário em JSON
  console.log(newFood);

  createFoodCard(newFood); //inserir o objeto visualmente

  //sair do modal, fechar ele
  $('#formFoodModal').modal('toggle');
};
// branch : armazenamento do código atual
//  bloco de origin --> origem do repositório com o endereço
//  push --> envio do códigopara origin para a branch main