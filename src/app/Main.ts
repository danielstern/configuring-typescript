import { TicketSchema } from '../interfaces';

export class Main {
    
    render() : string {

        return `
            <div>
              <h1>Ticket Price Upload Application</h1>
              <div>
                ${this.ticketInfo.map(ticket => `<div>${ticket.concertName} -- ${ticket.price}</div>`).join("")}
              </div>
            </div>
        `;

    }

    constructor(private ticketInfo : TicketSchema[]) {}

}