let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

// Selecione os elementos relevantes
const pedirButtons = document.querySelectorAll('.pedir');
const carrinhoList = document.querySelector('.itens-carrinho');

// Adicione um evento de clique aos botões "pedir"
pedirButtons.forEach((button) => {
  button.addEventListener('click', (tipo) => {
    const item = button.parentNode;
    const itemName = document.getElementById(`${tipo}`).value;
    const itemPrice = item.querySelector('h4 span').textContent;
    // Crie um novo elemento para o carrinho
    const carrinhoItem = document.createElement('li');
    carrinhoItem.textContent = `${itemName} - ${itemPrice}`;
    
    // Adicione o item ao carrinho
    carrinhoList.appendChild(carrinhoItem);
  });
});

const buttonJs = () => {
var x = document.getElementById("cart");
x.style.display = "none"; 

}

// Ajustes no codigo
const adicionaEntrada = (tipo) => {
  var x = document.getElementById("cart");
  x.style.display = "flex"; 
  console.log('t', tipo);
  const itemName = document.getElementById(`${tipo}`).value;
  //const itemPrice = item.querySelector('h4 span').textContent;
  console.log('r', itemName);
  // Crie um novo elemento para o carrinho
  const carrinhoItem = document.createElement('li');
  carrinhoItem.textContent = `${itemName}`;
  carrinhoItem.innerHTML = `<img src="./img/${itemName}.webp"></br><span>${itemName}</span>`
  // Adicione o item ao carrinho
  carrinhoList.appendChild(carrinhoItem);
}
