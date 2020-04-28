import React , {useState} from 'react';

function HookCounterObject () {
// Déclaration d'une nouvelle variable d'état, que l'on appellera “name”
    const [name, setName] = useState({firstName:'',lastName:''});
    return (
        <div>
            <h2>useState with objects</h2>
           <form>
               <div className="form-group">   <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/></div>
             <div className="form-group">   <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/></div>

               <p>your first name is - {name.firstName}</p>
               <p>your last name is - {name.lastName}</p>

               <h1>{JSON.stringify(name)}</h1>
           </form>

        </div>
    );

}

export default HookCounterObject;