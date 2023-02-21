import { nanoid } from "nanoid";

function Header({ arrCardTape, date, newsList, news }) {
  // console.log(news);
  let workBugs = require("../img/rab-nad-oshibkami.jpg");
  return (
    <div className="header">
      <div className="block-content">
        <ol className="card-tape">
          {arrCardTape.map((card) => (
            <li key={nanoid()}>{card}</li>
          ))}
          <span className="date">{date}</span>
        </ol>

        <ol className="news-list">
          {newsList.map((el) => (
            <li key={nanoid()}>
              <img className="iconsImg" src={el.icons} alt="icons" />
              <a href="#">{el.text}</a>
            </li>
          ))}
        </ol>

        <div className="exchange-rate">КУРС ВАЛЮТ</div>
      </div>
      <div className="sidebar">
        <img src={workBugs} width="100" height="100" alt="sidebarImg" />
        <p>Работа над ошибками</p>
        <span>Смотрите на Яндексе и зпоминайте</span>
      </div>
    </div>
  );
}

export default Header;
