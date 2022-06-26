function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-not_like.svg" alt="heart" />
            </div>
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
    );
}

export default Card;
