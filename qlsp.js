// khai báo giá trị nhập vào 
let products = [];
let tmpProducts = [];
let productIndex = null;

tmpProducts = products;

window.addEventListener("load", (event) => {
  products.push({
    name: 'San pham 1',
    quantity: 10,
    price: 5,
  })

  products.push({
    name: 'San pham 2',
    quantity: 8,
    price: 18,
  })
  showData();
});

// show data ra table
function showData() {
  let table = `<tr>
      <td>nameProduct</td>
      <td>quantity</td>
      <td>price</td>
      <td>Action</td>
    </tr>`;

  for(let i = 0; i < products.length; i++){ // duyệt mảng data
    table+=`<tr> 
      <td>${products[i].name}</td>
      <td>${products[i].quantity}</td>
      <td>$${products[i].price}</td>
      <td>
      <button onclick="deleteItem(${i})">Delete</button>
      <button onclick="edit(${i})">Edit</button>
      </td>
    </tr>`
}
document.getElementById('tb').innerHTML = table
}


//  thêm sản phẩm xong , làm mới ô nhập
  function clear(){
    document.getElementById('nameProduct').value=""
    document.getElementById('quantity').value=""
    document.getElementById('price').value=""
}

// chức năng deleteProduct
function deleteItem(index){
  products.splice(index, 1)
  showData()
}

// chức năng EDit 
function edit(index) {
  document.getElementById('nameProduct').value = products[index].name;
  document.getElementById('quantity').value = products[index].quantity;
  document.getElementById('price').value = products[index].price;
  productIndex = index;
}

// chức năng save 
function save() {
  products[productIndex].name = document.getElementById('nameProduct').value;
  products[productIndex].quantity = document.getElementById('quantity').value;
  products[productIndex].price = document.getElementById('price').value;
  showData();
  clear();
}

//add san pham
function add() {
  let namePd = document.getElementById('nameProduct').value;
  let quantity = document.getElementById('quantity').value;
  let price = document.getElementById('price').value;

  let obj= {
    name: namePd,
    quantity: quantity,
    price: price,
  }
  products.push(obj)
  showData()
  clear()
}

// tim kiem san pham
function searchProduct() {
  let keyword = document.getElementById('keyword').value
  let searchProducts = [];

  products = tmpProducts;

  // tim kiem
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === keyword) {
      searchProducts.push(products[i]);
    }
  }

  // gan cac san pham theo dieu kien tim kiem
  products = searchProducts;
  showData()
}