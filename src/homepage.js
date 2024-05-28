import { useState, useEffect } from "react";
import Card from "./card";
import style from "./homepage.module.css";
function Homepage() {
  const [isRunning, setIsRunning] = useState(false);
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({
    day: 0,
    hr: 0,
    min: 0,
    sec: 0,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    // const inputData = console.log(e.target.value);
    // console.log(new Date(inputData));
    // console.log(new Date(e.target.value));
    setDate(new Date(e.target.value));
  };

  useEffect(() => {
    let intervalId;
    setSuccess("");
    if (isRunning) {
      intervalId = setInterval(() => {
        const difference = date.getTime() - new Date().getTime();
        if (difference / (1000 * 60 * 60 * 24) <= 100 && difference > 0) {
          let remaningDay = Math.floor(difference / (1000 * 60 * 60 * 24));
          remaningDay = remaningDay < 10 ? "0" + remaningDay : remaningDay;
          //   console.log(remaningDay);

          let remaningHr = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          remaningHr = remaningHr < 10 ? "0" + remaningHr : remaningHr;
          //   console.log(remaningHr);

          let remaningMin = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          remaningMin = remaningMin < 10 ? "0" + remaningMin : remaningMin;
          //   console.log(remaningMin);

          let remaningSec = Math.floor((difference % (1000 * 60)) / 1000);
          remaningSec = remaningSec < 10 ? "0" + remaningSec : remaningSec;
          //   console.log(remaningSec);

          setError("");
          setData({
            ...data,
            day: remaningDay,
            hr: remaningHr,
            min: remaningMin,
            sec: remaningSec,
          });

          if (difference === 0) {
            setSuccess(true);
            clearInterval(intervalId);
          }
        } else {
          setData({
            day: "",
            hr: "",
            min: "",
            sec: "",
          });
          setError("Selected Time is more than 100 Days");
          // console.log("invalid");
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleClick = () => {
    setSuccess("");
    setIsRunning((previsRunning) => !previsRunning);
  };

  const minValue = () => {
    let today = new Date().toISOString();
    let dateTimeParts = today.split("T");
    let datePart = dateTimeParts[0];
    let timePart = dateTimeParts[1].split(":").slice(0, 2).join(":"); // Extracting only hours and minutes

    let newDateTimeString = datePart + "T" + timePart;
    // console.log(newDateTimeString);
    return newDateTimeString;
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Countdown Timer</h1>
      </div>
      <div className={style.input}>
        <input
          type="datetime-local"
          onChange={handleChange}
          min={minValue()}
        ></input>
      </div>
      <div>
        <button className={style.button} onClick={handleClick}>
          {isRunning ? "Stop" : "Start"} Timer
        </button>
      </div>
      <div className={style.card}>
        {success ? (
          <h3>The Countdown is over! what's next on your adventure</h3>
        ) : (
          ["Days", "Hours", "Minutes", "Seconds"].map((item, index) => {
            return (
              <div key={index}>
                <Card item={item} data={data} />
              </div>
            );
          })
        )}
      </div>
      <h3>{error}</h3>
    </div>
  );
}
export default Homepage;
