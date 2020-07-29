import React from "react";


 import {withRouter} from "react-router-dom";

export default function MainWelcomeButton(){
    const Button = withRouter(({history}) => (
        <button className="main-start " type="button" 
        onClick={() => {history.push('/user')}}>Welcome</button>
    ));
    return <Button/>
}

