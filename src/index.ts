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

const ticketAppState = {

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

const rendered : string = new Main(ticketAppState.username, ticketAppState.ticketInfo).render();

document.getElementById("App").innerHTML = rendered;