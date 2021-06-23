
import { TicketSchema } from '../';
import { TicketInfoDisplay } from './TicketInfoDisplay';

export class TicketInfoListDisplay {

    constructor(private ticketInfoList : TicketSchema[]) { }

    render() : string {

        return `
            <div>

                <table>

                    <thead>

                         <th>Concert</th>
                         <th>Ticket Quantity</th>

                     <th>Price</th>

                  </thead>

                  <tbody>

                      ${this.ticketInfoList.map(ticketInfo => 

                          new TicketInfoDisplay(ticketInfo).render()

                      ).join("")}

                  </tbody>

                </table>

            </div>
            
        `;
    }

}
