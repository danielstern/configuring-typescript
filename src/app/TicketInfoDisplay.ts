import { TicketSchema } from '../';

export class TicketInfoDisplay {

    render() : string {

        return `<tr>
                    <td>
                        ${this.ticketInfo.concertName}
                    </td>
                    <td>
                        ${this.ticketInfo.quantity}
                    </td>
                    <td>
                        ${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.ticketInfo.price))}
                    </td>
                </tr>
                `

    }

    constructor(private ticketInfo : TicketSchema) {

    }

}
export class TicketInfoListDisplay {

    render() : string {

        return `
            <div>
                <table>
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
