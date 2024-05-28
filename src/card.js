import style from "./card.module.css";

function Card({ item, data }) {
  return (
    <div className={style.cardContainer}>
      <h2>
        {item === "Days"
          ? data.day
          : item === "Hours"
          ? data.hr
          : item === "Minutes"
          ? data.min
          : item === "Seconds"
          ? data.sec
          : 0}
      </h2>
      <h1>{item}</h1>
    </div>
  );
}
export default Card;
