
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="sneakers" />
            <h5>Мужчкие Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>4 999 грн</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.png" alt="sneakers" />
            <h5>Мужчкие Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>4 999 грн</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.png" alt="sneakers" />
            <h5>Мужчкие Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>4 999 грн</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.png" alt="sneakers" />
            <h5>Мужчкие Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>4 999 грн</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
