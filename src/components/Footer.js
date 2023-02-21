import { nanoid } from "nanoid";

function Footer({ footer }) {
  // console.log(footer);

  return (
    <div className="footer">
      <ol className="card">
        {footer.map((el) => (
          <li className="card-li" key={nanoid()}>
            <a href="#">{el.card}</a>
            <ol className="block-item" key={nanoid()}>
              {Array.from(el.block).map((i) => (
                <li key={nanoid()}>{i}</li>
              ))}
              {/* {console.log(el.block)} */}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Footer;
