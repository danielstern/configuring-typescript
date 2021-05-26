import { TicketAppSchema, TicketSchema } from '../';

import { TicketInfoListDisplay } from './TicketInfoDisplay'
export class Main {

    
    render() : string {

        return `
            <div>
              <h1>Ticket Price Upload Application</h1>
              <h2>Welcome, ${this.username}</h2>
              <div>
                ${new TicketInfoListDisplay(this.ticketInfo).render()}
              </div>
            </div>
        `;
    }

    constructor(private username : string, private ticketInfo : TicketSchema[]) {

    }


}

console.log("Hello world from main!!");