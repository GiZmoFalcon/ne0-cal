import React from 'react';
import '../styles/components/Button.css'
import GlobalContext from '../contexts/GlobalContext'

const doSomething = (name, state) => {
    state.updateGlobalState({...state.GlobalState, expression: state.GlobalState.expression + name});
    console.log('Button Clicked', name, state);
}

const Button = (props) => {
    return (
        <GlobalContext.Consumer>
            {
                (state) => {
                    return (<div className={`btn ${props.type}`} onClick={(e) => {doSomething(props.name, state)}}>
                        <p>{props.name}</p>
                    </div>);
                }
            }
        </GlobalContext.Consumer>
    );
}

export default Button;