import React, {useState} from "react";

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    return(
        <button onClick={() => setCount(count + 1)}>{`Count: ${count}`}</button>
    );
}

export default Counter;