import {SIGNED_IN,SET_GOALS} from "../constants";


export function logUser(email){
    const action={
    type:SIGNED_IN, email:email


}
return action;


}

export function SetGoals(goals){
    const action = {
        type:SET_GOALS,
        goals
    }
    return action;
}