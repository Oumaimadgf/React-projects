import React from 'react';
const Tutotrial= (props) =>{
     console.log(props);

    setTimeout(()=>{
        props.history.push('/')
        },5000)
    return (

        <div className= "Container">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>OPS!</strong> this page is under construction.
                you will directed to Docs page in 5 seconds
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h1>Tutorial : Intro to React</h1>
        </div>
    )

}

export default Tutotrial;