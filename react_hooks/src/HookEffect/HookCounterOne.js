import React, {useEffect, useState} from 'react';

function HookCounterOne () {
// Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    //using function useeffect to updete a title of a document

    useEffect(()=>{
        console.log("Use Effect ---- updating document")
        document.title = `Vous avez cliqué ${count} fois`;
    },[count])

    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <input type="text" value={name} onChange={e=>setName({name:e.target.value})}/>
            <button onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );

}

export default HookCounterOne;