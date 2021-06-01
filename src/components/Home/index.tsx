import './style.scss';

import { ReactComponent as LockerIcon } from '../../assets/svg/cadeado.svg';
import { ReactComponent as CardIcon } from '../../assets/svg/cartao.svg';
import { ReactComponent as TruckIcon } from '../../assets/svg/caminhao.svg';
import { ReactComponent as FullStarIcon } from '../../assets/svg/estrela-cheia.svg';

function Home() {
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

      <section className="products-section">
        <div className="title">
          <div className="line"></div>
          <h1>Destaques</h1>
        </div>
        <div className="products">
          <article>
            <div className="image-container">
              <img src={require('../../assets/images/category-1.jpeg').default} alt="Imagem do Produto" />
            </div>
            
            <div className="product-content">
              <p>Box de Livros - Senhor Dos Anéis (3 Volumes) + Pôster</p>

              <div className="stars">
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
              </div>

              <small className="discount">R$ 114,50</small>

              <h1>R$ 97,99</h1>

              <small className="conditions">Ou R$ 88,20 com 10% off no boleto</small>

              <button type="button">Comprar</button>
            </div>
          </article>
          <article>
            <div className="image-container">
              <img src={require('../../assets/images/category-1.jpeg').default} alt="Imagem do Produto" />
            </div>

            <div className="product-content">
              <p>Box de Livros - Senhor Dos Anéis (3 Volumes) + Pôster</p>

              <div className="stars">
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
              </div>

              <small className="discount">R$ 114,50</small>

              <h1>R$ 97,99</h1>

              <small className="conditions">Ou R$ 88,20 com 10% off no boleto</small>

              <button type="button">Comprar</button>
            </div>
          </article>
          <article>
            <div className="image-container">
              <img src={require('../../assets/images/category-1.jpeg').default} alt="Imagem do Produto" />
            </div>

            <div className="product-content">
              <p>Box de Livros - Senhor Dos Anéis (3 Volumes) + Pôster</p>

              <div className="stars">
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
              </div>

              <small className="discount">R$ 114,50</small>

              <h1>R$ 97,99</h1>

              <small className="conditions">Ou R$ 88,20 com 10% off no boleto</small>

              <button type="button">Comprar</button>
            </div>
          </article>
          <article>
            <div className="image-container">
              <img src={require('../../assets/images/category-1.jpeg').default} alt="Imagem do Produto" />
            </div>

            <div className="product-content">
              <p>Box de Livros - Senhor Dos Anéis (3 Volumes) + Pôster</p>

              <div className="stars">
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
                <FullStarIcon />
              </div>

              <small className="discount">R$ 114,50</small>

              <h1>R$ 97,99</h1>

              <small className="conditions">Ou R$ 88,20 com 10% off no boleto</small>

              <button type="button">Comprar</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;