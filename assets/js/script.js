let products = JSON.parse(localStorage.getItem('products')) || [];

function saveToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${product.name}</strong> - Rp${product.price}
      <button onclick="editProduct(${index})">Edit</button>
      <button onclick="deleteProduct(${index})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

function addOrUpdateProduct(e) {
  e.preventDefault();

  const idField = document.getElementById('product-id');
  const nameField = document.getElementById('product-name');
  const priceField = document.getElementById('product-price');

  const name = nameField.value.trim();
  const price = parseInt(priceField.value);

  if (!name || isNaN(price)) return;

  if (idField.value === '') {
    // CREATE
    products.push({ name, price });
  } else {
    // UPDATE
    const index = parseInt(idField.value);
    products[index] = { name, price };
    idField.value = '';
  }

  saveToLocalStorage();
  renderProducts();
  nameField.value = '';
  priceField.value = '';
}

function editProduct(index) {
  const product = products[index];
  document.getElementById('product-id').value = index;
  document.getElementById('product-name').value = product.name;
  document.getElementById('product-price').value = product.price;
}

function deleteProduct(index) {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    products.splice(index, 1);
    saveToLocalStorage();
    renderProducts();
  }
}

document.getElementById('product-form').addEventListener('submit', addOrUpdateProduct);

// Inisialisasi
renderProducts();
