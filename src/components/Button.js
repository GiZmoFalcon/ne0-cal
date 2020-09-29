import React from 'react';
import '../styles/components/Button.css'
import GlobalContext from '../contexts/GlobalContext'

const doSomething = (type, name, state) => {
    // state.updateGlobalState({...state.GlobalState, expression: state.GlobalState.expression + name});
    // console.log('Button Clicked', name, state);

    switch(type){
        case 'func':
            if(name === 'del'){
                state.updateGlobalState({
                    ...state.GlobalState,
                    expression: state.GlobalState.expression.slice(0, -1)
                })
                console.log('deleting');
            }
            else if(name === 'AC'){
                state.updateGlobalState({
                    ...state.GlobalState,
                    expression: '',
                    history: ''
                })
                console.log('Clearing');
            }
            break;
        case 'math':
            if(state.GlobalState.expression === ''){
                console.log("Can't evaluate the expression");
            }
            else if (name === 'X'){
                state.updateGlobalState({
                    ...state.GlobalState,
                    expression: state.GlobalState.expression+'x'
                })
                console.log('multiply');
            }
            else {
                state.updateGlobalState({
                    ...state.GlobalState,
                    expression: state.GlobalState.expression+name
                })
                console.log('add math fn');
            }
            break;
        case 'normal':
            state.updateGlobalState({
                ...state.GlobalState,
                expression: state.GlobalState.expression+name,                
            })
            console.log('add number');
            break;
        case 'equals':
            const internalExpression = state.GlobalState.expression.replace('x', '*');
            state.updateGlobalState({
                ...state.GlobalState,
                history: state.GlobalState.expression,
                expression: JSON.stringify(eval(internalExpression))
            })
            console.log('evaluating');
            break;
        default:
            break;
    }
}

const Button = (props) => {
    return (
        <GlobalContext.Consumer>
            {
                (state) => {
                    return (<div className={`btn ${props.type}`} onClick={(e) => {doSomething(props.type, props.name, state)}}>
                        <p>{props.name}</p>
                    </div>);
                }
            }
        </GlobalContext.Consumer>
    );
}

export default Button;