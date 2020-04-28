import React, {useState} from 'react';

function HookCounterTwo (){
// Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
    const initialcount= 0;
    const [count, setCount] = useState(initialcount);

   const incrementFive= () =>{
        for (let i= 0; i<5 ;i++){
            // setCount(count+5)
            setCount(prevCount => prevCount+1) //utiliser prevstate pour incrementer
       }

    }
        return (
            <div>
                <p>Vous avez cliqué {count} fois</p>

                 <button onClick={() => setCount(initialcount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
                <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
                <button onClick={incrementFive}>Increment 5</button>
            </div>
        );

}

export default HookCounterTwo;