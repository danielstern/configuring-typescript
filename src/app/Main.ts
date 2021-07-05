import { TicketSchema } from '../';
import { TicketInfoListDisplay } from './TicketInfoListDisplay'

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

    constructor(private username : string, private ticketInfo : TicketSchema[]) {}

}