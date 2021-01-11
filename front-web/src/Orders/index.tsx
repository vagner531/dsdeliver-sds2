import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './style.css';
import { Orderlocationdata, Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<Orderlocationdata>();

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  return(
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}
export default Orders;