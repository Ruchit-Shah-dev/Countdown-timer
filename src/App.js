import Homepage from "./homepage";

function App() {
  // const [isRunning, setIsRunning] = useState(false);
  // const [date, setDate] = useState(new Date());
  // const [data, setData] = useState({
  //   day: "",
  //   hr: "",
  //   min: "",
  //   sec: "",
  // });
  // const [error, setError] = useState("");
  // const handleChange = (e) => {
  //   // const inputData = console.log(e.target.value);
  //   // console.log(new Date(inputData));
  //   // console.log(new Date(e.target.value));
  //   setDate(new Date(e.target.value));
  // };

  // useEffect(() => {
  //   let intervalId;
  //   if (isRunning) {
  //     intervalId = setInterval(() => {
  //       const currentDateAndTime = new Date();
  //       const time = currentDateAndTime.getTime();
  //       // console.log(date.getTime());
  //       // console.log((date.getTime() - time) / (1000 * 60 * 60 * 24));
  //       if ((date.getTime() - time) / (1000 * 60 * 60 * 24) <= 99) {
  //         let remaningDay = (date.getTime() - time) / (1000 * 60 * 60 * 24);
  //         // remaningDay = remaningDay < 10 ? "0" + remaningDay : remaningDay;
  //         // console.log(remaningDay);
  //         let remaningHr = (remaningDay % Math.floor(remaningDay)) * 24;
  //         // remaningHr = remaningHr < 10 ? "0" + remaningHr : remaningHr;
  //         // console.log(remaningHr);
  //         let remaningMin = (remaningHr % Math.floor(remaningHr)) * 60;
  //         // remaningMin = remaningMin < 10 ? "0" + remaningMin : remaningMin;
  //         // console.log(remaningMin);
  //         let remaningSec = (remaningMin % Math.floor(remaningMin)) * 60;
  //         // remaningSec = remaningSec < 10 ? "0" + remaningSec : remaningSec;
  //         // console.log(Math.floor(remaningSec));
  //         setError("");
  //         setData({
  //           ...data,
  //           day: Math.floor(remaningDay),
  //           hr: Math.floor(remaningHr),
  //           min: Math.floor(remaningMin),
  //           sec: Math.floor(remaningSec),
  //         });
  //       } else {
  //         setData({
  //           day: "",
  //           hr: "",
  //           min: "",
  //           sec: "",
  //         });
  //         setError("date is more than 99 days ahead ");
  //         // console.log("invalid");
  //       }
  //     }, 1000);
  //   } else {
  //     clearInterval(intervalId);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [isRunning]);

  // const handleClick = () => {
  //   setIsRunning((previsRunning) => !previsRunning);
  // };

  return (
    // <div>
    //   <h1>Countdown Timer</h1>
    //   <input type="datetime-local" onChange={handleChange}></input>
    //   <button onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
    //   <br />
    //   <h1>{data.day && data.day < 10 ? "0" + data.day : data.day}</h1>
    //   <h1>{data.hr && data.hr < 10 ? "0" + data.hr : data.hr}</h1>
    //   <h1>{data.min && data.min < 10 ? "0" + data.min : data.min}</h1>
    //   <h1>{data.sec && data.sec < 10 ? "0" + data.sec : data.sec}</h1>
    //   <h1>{error}</h1>
    // </div>
    <Homepage />
  );
}

export default App;
