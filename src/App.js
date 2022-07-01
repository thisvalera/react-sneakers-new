import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 4_999, imageUrl: '/img/sneakers/1.png' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 2_999, imageUrl: '/img/sneakers/2.png' },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {/* <Card title='Мужские Кроссовки Nike Blazer Mid Suede' price={2_999} imageUrl='/img/sneakers/1.png' />
          <Card title='Мужские Кроссовки Nike Air Max 270' price={4_999} imageUrl='/img/sneakers/2.png' /> */}
          {arr.map(obj =>
            <Card title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />)}

        </div>
      </div>
    </div >
  );
}

export default App;
