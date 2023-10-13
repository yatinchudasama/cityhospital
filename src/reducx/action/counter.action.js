import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType"

export const increment = () => (dispatche) => {
    dispatche({type: INCREMENT_COUNTER})
}

export const decrement = () => (dispatche) => {
    dispatche({type: DECREMENT_COUNTER})
}