import { TicketSchema } from '../';

export class TicketInfoDisplay {

    constructor(private ticketInfo : TicketSchema) { }

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

}