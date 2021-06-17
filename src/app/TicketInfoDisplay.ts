import { TicketSchema } from '../';

console.log("Ticket change");
export class TicketInfoDisplay {

    render() : string {

        return `<tr>
                    <td>
                        <!--<input type="text" value="${this.ticketInfo.concertName}">-->
                        ${this.ticketInfo.concertName} (${this.ticketInfo.quantity})
                        
                    </td>
                    <td>
                        <input 
                            type="number" 
                            id="${this.ticketInfo.ticketId}"
                            value="${this.ticketInfo.quantity}" 
                            onchange="window.dispatchAction({type:'adjust-ticket-quantity', ticketId: '${this.ticketInfo.ticketId}', quantity: +event.target.value, fieldId: '${this.ticketInfo.ticketId}'})"
                        >
                        
                    </td>
                    <td>

                        ${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.ticketInfo.price))}

                    </td>
                </tr>
                `

    }

    handle(){
        console.log("handling");
    }

    constructor(private ticketInfo : TicketSchema) {

    }

}
export class TicketInfoListDisplay {

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

    constructor(private ticketInfoList : TicketSchema[]) {

    }


}
