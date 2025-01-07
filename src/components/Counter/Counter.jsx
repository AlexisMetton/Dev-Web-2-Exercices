import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === "increament") {
        return {
            count: state.count + 1
        }
    }
    if(action.type === "decreament") {
        return {
            count: state.count - 1
        }
    }

    throw Error('unknonw action type')
}

const Counter = (props) => {
    const [state, dispatch] = useReducer(reducer, {count: 0});



    return (
        <>
            <div>
                {state.count}
            </div>
            <button onClick={() => {
                dispatch({type: 'increament'})
            }}>
                increament
            </button>
            <button onClick={() => {
                dispatch({type: 'decreament'})
            }}>
                decreament
            </button>
        </>
    )
}

export default Counter;