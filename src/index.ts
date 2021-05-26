import {Main} from "./app/Main";

export interface TicketSchema {

    ticketId : string;
    concertName: string; 
    quantity: number;
    price: number;
    

}

export interface TicketAppSchema {

    username : string;
    ticketInfo: TicketSchema[];
    
}
declare global {

    interface Window {
        dispatchAction:any;
    }
    

}

let ticketAppState = {

    username: "Classy Classicals",
    ticketInfo: [{
        ticketId: "A1",
        concertName: "The Chatty Chellists",
        quantity: 10,
        price: 75,
    },{
        ticketId: "A2",
        concertName: "Big Bill's Big Brass Band",
        quantity: 17,
        price: 55,
    },
    {
        ticketId: "A3",
        concertName: "Swift Stella's Saxophone Solos and Sonatas",
        quantity: 9,
        price: 90,
    }]
}

const renderApp = ()=>{

    const rendered : string = new Main(ticketAppState.username, ticketAppState.ticketInfo).render();

    document.getElementById("App").innerHTML = rendered;

}

renderApp();

// export const incrementTicketQuantityAction = (ticketId: string, quantity : number) => {
    
//     return `{type:'increment-ticket-quantity', ticketIdId: '${ticketId}', quantity: ${quantity}}`;
//     // const newState = incrementTicketQuantityReducer(state, quantity);
//     // ticketAppState = newState;
//     // renderApp();

// }

const reducer = (state : TicketAppSchema, action) : TicketAppSchema  => {

    console.log("reducer", action);
    switch (action.type) {

        case "adjust-ticket-quantity":
        return {
            ... state,
            ticketInfo: state.ticketInfo.map(ticket => ticket.ticketId === action.ticketId ? {...ticket, quantity: action.quantity} : ticket)
        }
            
    }

    return state;
}

// export const incrementTicketQuantityReducer = (state : TicketAppSchema, quantity : number)=>{
    
//     console.log("Reducer reducer reducer....");
//     return {
//         ... state,
//         ticketInfo: state.ticketInfo.map(ticket => ticket)
//     }

// }

window.dispatchAction = (action) => {

    console.log("Dispatching", action);
    ticketAppState = reducer(ticketAppState, action);
    renderApp();
    document.getElementById(action.fieldId).focus();
    // dispatchAction
}