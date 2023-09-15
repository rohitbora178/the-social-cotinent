import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, toggleFavorite } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { Card, Button, Input, Pagination, Alert } from 'antd';

const { Meta } = Card;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const favorites = useSelector((state) => state.favorites);

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);

    dispatch(fetchProducts())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
        setErrorMessage('Error fetching products. Please try again.');
      });
  }, [dispatch]);

  const handleToggleFavorite = (productId) => {
    dispatch(toggleFavorite(productId));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Product List</h1>
      <Input
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          closable
          onClose={() => setErrorMessage(null)}
          style={{ marginBottom: '20px' }}
        />
      )}
      {isLoading ? (
        <p id='loading'></p>
      ) : (
        <div className="product-list">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              style={{ width: 300, marginBottom: 20 }}
              cover={<img alt={product.title} src={product.thumbnail} />}
              actions={[
                <Link to={`/product/${product.id}`}>View Details</Link>,
                <Button
                  type="primary"
                  onClick={() => handleToggleFavorite(product.id)}
                  disabled={favorites.includes(product.id) && favorites.length >= 5}
                >
                  {favorites.includes(product.id) ? 'Remove Favorite' : 'Add Favorite'}
                </Button>,
              ]}
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          ))}
        </div>
      )}
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={filteredProducts.length}
        onChange={handlePageChange}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
};

export default ProductList;
