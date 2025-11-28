import { useState } from "react";

function Counter(){
  const [son, setSon] = useState(0);
  return (
    <div>
      <h1>{son}</h1>
      <button onClick={() => setSon(son + 1)}>+</button>
    </div>
  );
}
export default Counter;