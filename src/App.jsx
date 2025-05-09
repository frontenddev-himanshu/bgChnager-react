import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        className="bg w-full h-screen relative duration-[1s] border-5 border-[#fff]"
        style={{ backgroundColor: color }}
      >
        <div className="changer w-[80%] py-5 bg-[#fff] absolute left-[50%] bottom-20 translate-x-[-50%] rounded-[50px] shadow-2xl ">
          <div className="btns flex flex-wrap gap-6 justify-center">
            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[500] shadow-2xl  "
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "grey" }}
              onClick={() => setColor("grey")}
            >
              Grey
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "skyblue" }}
              onClick={() => setColor("skyblue")}
            >
              SkyBlue
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>

            <button
              className="text-[#fff] px-10 py-2 rounded-[50px] text-[.9rem] font-[600] shadow-2xl  "
              style={{ backgroundColor: "darkblue " }}
              onClick={() => setColor("darkblue")}
            >
              DarkBlue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
