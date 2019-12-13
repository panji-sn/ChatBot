import {createStore, applyMiddleware} from 'redux'
import {ApiAiClient} from 'api-ai-javascript'
const accessToken = 'e43941700c974176a90da0fea9bccef7'
const client = new ApiAiClient({accessToken})

const ON_MESSAGE ='ON_MESSAGE'

export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE,
    payload: {text, sender}
})

const messageMiddleware = () => next => action => {
    next(action)
    if (action.type === ON_MESSAGE) {
        const {text} = action.payload
        client.textRequest(text).then(onSuccess)
        // client.eventRequest
        function onSuccess (response) {
            console.log(response)
            console.log(response.result.fulfillment.speech)
            next(sendMessage(response.result.fulfillment.speech, 'bot'))
        }
    }
}

const initStat = [{text: 'Aloha'}]
const messageReducer = (state = initStat, action) => {
    switch (action.type) {
        case ON_MESSAGE:
            return [...state, action.payload]
        default:
            return state
    }
}

export const store=createStore(messageReducer, applyMiddleware(messageMiddleware))