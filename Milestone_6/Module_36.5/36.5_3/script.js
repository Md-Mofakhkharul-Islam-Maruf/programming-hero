//Normal function to catch id
function addToCart() {
  const name =  document.getElementById('product-name').value;
  const price = document.getElementById('product-price').value;
  displayProduct(name, price)  
  
  document.getElementById('product-name').value = ""
  document.getElementById('product-price').value = ""
  handleSetToLocalStorage(name, price)
}

// A function to show value
function displayProduct(name, price){

  const productContainer = document.getElementById("product-container");
  const li = document.createElement('li');
  li.innerText=`${name}: ${price}`;
  productContainer.append(li)
}

// this function is for passing local data
const handleSetToLocalStorage= (name, price)=>{
  localStorage.setItem(JSON.stringify(name) ,JSON.stringify(price))
}