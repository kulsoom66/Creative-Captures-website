function addToCart(itemID)
{

  var quantity = prompt("Enter the quantity (0-9): ");
  let item = document.createElement('div'); //creating div element item
  item.classList.add('item');  //giving a class to div item

  // creating a div element for product's name and getting it from the html document
  const title = document.createElement('div');
  title.classList.add('itemcontent1'); //giving a class name to div item
  title.textContent = document.getElementById(itemID).getElementsByTagName('h1')[0].innerHTML ;

  // creating a div element for product's quantity 
  const number = document.createElement('div');
  number.textContent = quantity; //assigning promptted value's to the number div
  number.classList.add('itemcontent3'); //giving a class name to div item

  // creating a div element for product's price and getting it from the html document 
  const price = document.createElement('div')
  price.textContent= document.getElementById(itemID).getElementsByTagName('span')[0].innerHTML ;
  price.classList.add('itemcontent2');//giving a class name to div item

  // creating a button element to remove the product from the cart 
  var removeButton = document.createElement('button')
  removeButton.innerText = "Remove";
  removeButton.classList.add('removeButton');
  removeButton.addEventListener('click', function(){
      item.remove();//removing the whole item div 
      // updating the total 
      var noOfitems = price.textContent*number.textContent;
      sub(noOfitems);
    }
  )
  // adding the info taken to myCart div that's inside the html document:
  document.getElementById('myCart').appendChild(item);
  item.appendChild(title);
  item.appendChild(price);
  item.appendChild(number);
  item.appendChild(removeButton);

  // calling the add function to caculate the total price
  add(Number.parseFloat(price.textContent) * Number.parseInt(number.textContent));

}

// a function to add price of selected product to the total price
function add(number){

  document.getElementById('actual-price').textContent = Number.parseFloat(document.getElementById('actual-price').textContent) + number;
  document.getElementById('discount').textContent = Number.parseFloat(document.getElementById('actual-price').textContent);

  //if the total is bigger than 30, then a discount will be applied
  if (Number.parseFloat(document.getElementById('actual-price').textContent) > 30) {
      var discount_rate = Number.parseFloat(document.getElementById('actual-price').textContent)* 0.05;
      document.getElementById('discount').textContent = (Number.parseFloat(document.getElementById('actual-price').textContent)) - discount_rate;
  }
  // update the number of the items in the navigation bar
  var noOfitems = document.getElementById("spanNo");
  noOfitems.textContent++; 
}

// a function that will subtarct price of the removed product from the cart from the total price and will update the number of the items in the navigation bar
function sub(number){
  document.getElementById('actual-price').textContent = Number.parseFloat(document.getElementById('actual-price').textContent) - number;
      // // if the total is bigger than 30, then a discount will be applied
      if (Number.parseFloat(document.getElementById('actual-price').textContent) > 30) {
      var discount_rate = Number.parseFloat(document.getElementById('actual-price').textContent)* 0.05;
      document.getElementById('discount').textContent = (Number.parseFloat(document.getElementById('actual-price').textContent)) - discount_rate;
      }else{
        document.getElementById('discount').textContent =  document.getElementById('actual-price').textContent ;
      }
  // update the number of the items in the navigation bar
  var noOfitems = document.getElementById("spanNo");
  noOfitems.textContent--;
}


// a function to clear the cart
function cancel(){
  document.getElementById('myCart').innerHTML = "";
  document.getElementById('actual-price').textContent = 0;
  document.getElementById('discount').textContent = 0;
  var noOfitems = document.getElementById("spanNo");
  noOfitems.textContent = 0;
}
