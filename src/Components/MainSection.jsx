import { useState } from "react";
import reactLogo from "../assets/react.svg";
import styles from "./MainSection.module.css";

function MainSection() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </main>
  );
}

export default MainSection;
