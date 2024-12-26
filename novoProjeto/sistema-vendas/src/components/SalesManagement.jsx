import React, { useState } from 'react';

const SalesManagement = ({ products, setProducts, sales, setSales }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSale = () => {
    const product = products.find(p => p.code === selectedProduct);
    if (product && quantity > 0 && product.quantity >= quantity) {
      const updatedProduct = { ...product, quantity: product.quantity - quantity };
      setProducts(products.map(p => p.code === selectedProduct ? updatedProduct : p));
      setSales([...sales, { ...product, quantity }]);
      setSelectedProduct('');
      setQuantity(0);
    } else {
      alert('Quantidade inválida ou produto não encontrado.');
    }
  };

  return (
    <div className="add-items-container">
      <h2>Gestão de Vendas</h2>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">Selecione um produto</option>
        {products.map(product => (
          <option key={product.code} value={product.code}>
            {product.brand} - {product.code} - Em estoque: {product.quantity}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={handleSale}>Vender</button>
      <h3>Produtos Vendidos</h3>
      <ul className="itemsContainer">
        {sales.map((sale, index) => (
          <li key={index} className="task-item">
            <p>{sale.brand} - {sale.code} - Quantidade: {sale.quantity} - R${sale.unitPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesManagement;