import dataset from './model/dataset.js';
// passando o caminho --> já consigo usar o dataset

// usar num loop, array de objetos --> for of
// acessa individualmente cada objeto por meio da variável food
for(const food of dataset){
  // acessa a tag section
  const cardDeck = document.querySelector('.card-deck');

  // vai inserir o nome e a imagem no HTML
  const card = createFoodCard(food);
  
// módulos de inserção de elemento --> sempre preservando o anterior
  cardDeck.insertAdjacentHTML('beforeend', card);
  
  // inserir esse card na área dos rows no HTML no section
}
function createFoodCard(food){
  // cada vez que acessar o loop vai estar criando essa div
  // retornar o código html do card do bootstrap
  // tronar dinâmico através de food
  // transformamos array num componente gráfico - geração dinâmica de conteúdo
  
  return `<div class="col">
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
          </div>`
};
// branch : armazenamento do código atual
//  bloco de origin --> origem do repositório com o endereço
//  push --> envio do códigopara origin para a branch main

