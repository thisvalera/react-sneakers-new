function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between cu-p">
                    Корзина
                    <img src="/img/remove-btn.svg" alt="closed" />
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.png" alt="sneakers" />
                        <div className="mr-20">
                            <p className="mb-5">alsssssssssss sssssss sssssssss </p>
                            <b>2.599 грн</b>
                        </div>
                        <img className="removeBtn" src="/img/remove-btn.svg" alt="remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul >
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>12 547 грн</b>
                        </li>
                        <li lassName="d-flex">
                            <span>налог 5%:</span>
                            <div></div>
                            <b>1074 грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;