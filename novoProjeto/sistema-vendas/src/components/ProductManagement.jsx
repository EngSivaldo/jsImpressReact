import React, { useState } from 'react';

const ProductManagement = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ code: '', brand: '', type: '', quantity: 0, unitPrice: 0 });
  const [showProducts, setShowProducts] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const addProduct = () => {
    if (!newProduct.code || !newProduct.brand || !newProduct.type || newProduct.quantity <= 0 || newProduct.unitPrice <= 0) {
      setConfirmationMessage('Por favor, preencha todos os campos corretamente.');
      setTimeout(() => setConfirmationMessage(''), 3000); // Limpa a mensagem após 3 segundos
      return;
    }
    setProducts([...products, newProduct]);
    setNewProduct({ code: '', brand: '', type: '', quantity: 0, unitPrice: 0 });
    setConfirmationMessage('Produto adicionado com sucesso!');
    setTimeout(() => setConfirmationMessage(''), 3000); // Limpa a mensagem após 3 segundos
  };

  const removeProduct = (code) => {
    setProducts(products.filter(product => product.code !== code));
  };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});

  return (
    <div className="add-items-container">
      <h2>Gestão de Produtos</h2>
      <input
        type="text"
        placeholder="Código do Produto"
        value={newProduct.code}
        onChange={(e) => setNewProduct({ ...newProduct, code: e.target.value })}
      />
      <input
        type="text"
        placeholder="Marca do Produto"
        value={newProduct.brand}
        onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tipo do Produto"
        value={newProduct.type}
        onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Valor Unitário (R$)"
        value={newProduct.unitPrice}
        onChange={(e) => setNewProduct({ ...newProduct, unitPrice: parseFloat(e.target.value) })}
      />
      <button onClick={addProduct}>Adicionar Produto</button>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Ocultar Lista de Produtos' : 'Ver Lista de Produtos'}
      </button>
      {showProducts && (
        <div className="itemsContainer">
          {Object.keys(groupedProducts).map(type => (
            <div key={type}>
              <h3>{type}</h3>
              <ul>
                {groupedProducts[type].map(product => (
                  <li key={product.code} className="task-item">
                    <p>{product.brand} - {product.code} - {product.quantity} - R${product.unitPrice}</p>
                    <button onClick={() => removeProduct(product.code)}>Remover</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductManagement;