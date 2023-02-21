import { nanoid } from "nanoid";

function Content({ chapter }) {
  return (
    <div className="content">
      <ol className="chapter">
        {chapter.map((el) => (
          <li key={nanoid()}>
            <a href="#">{el}</a>
          </li>
        ))}
      </ol>
      <div className="inputBlock">
        <span className="yandex">
          <span className="ya">Я</span>ндекс
        </span>
        <input className="input" type="text" name="browser" defaultValue="" />

        <button className="btn">Найти</button>
      </div>
      <div className="hint">
        <span>Найдется всё. Например, </span>
        <span className="valueColor">фаза луны сегодня</span>
      </div>
      <img className="banner" src={require("../img/banner.jpg")} alt="icons" />
    </div>
  );
}

export default Content;
