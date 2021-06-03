import './style.scss';
import { useState, useEffect } from 'react';

import { ReactComponent as LockerIcon } from '../../assets/svg/cadeado.svg';
import { ReactComponent as CardIcon } from '../../assets/svg/cartao.svg';
import { ReactComponent as TruckIcon } from '../../assets/svg/caminhao.svg';
import ProductList from '../ProductList';
import { Category, Product } from '../../interfaces';
import api from '../../services/api';

function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get<Product[]>('products').then(response => setAllProducts(response.data));
    api.get<Category[]>('categories').then(response => setCategories(response.data));
  }, []);

  return (
    <main>
      <section className="site-info">
        <div className="item">
          <LockerIcon id="locker" />
          <p>Site Seguro</p>
        </div>
        <div className="item">
          <CardIcon id="card" />
          <p>Até 12x sem juros</p>
        </div>
        <div className="item">
          <TruckIcon id="truck" />
          <p>Entrega em todo o Brasil</p>
        </div>
      </section>

      <section className="categories">
        <div className="category">
          <img src={require('../../assets/images/category-1.jpeg').default} alt="Livros" />
          <h1>Livros</h1>
        </div>
        <div className="category">
          <img src={require('../../assets/images/category-2.jpeg').default} alt="Escritório" />
          <h1>Escritório</h1>
        </div>
        <div className="category">
          <img src={require('../../assets/images/category-3.jpeg').default} alt="Vestuário" />
          <h1>Vestuário</h1>
        </div>
      </section>

      <ProductList products={allProducts} />

      {categories.map(category => {
        if (category.product.length > 3) {
          return <ProductList products={category.product} title={category.name} key={category.id} />
        }
        return '';
      })}
    </main>
  );
}

export default Home;