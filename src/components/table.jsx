import React from 'react';
import jQuery from 'jquery'

export default class Table extends React.Component {

  constructor() {
    super()
    this.state = {
      settlements: [],
      settlementKey: 1,
    }
  }

  randomString(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return "0x"+result;
  }

  addRandomSettlement() {
    let transaction_hash = this.randomString(10) + "..."
    let from = this.randomString(10) + "..."
    let to = this.randomString(10) + "..."
    let amount = Math.floor(Math.random() * 1000)

   this.state.settlements.unshift ( {
       id: this.state.settlementKey,
       transaction_hash: transaction_hash,
       from: from,
       to: to,
       amount: amount,
   });
   if (this.state.settlements.length > 10) {
     this.state.settlements.pop()
   }
   this.state.settlementKey = this.state.settlementKey + 1
   this.setState(this.state);
   console.log(this.state.settlements);
  }

  componentDidMount() {

    setInterval( () => {
      this.addRandomSettlement()
    },2000);
  }

  render() {
    return(
      <table className="table table-striped table-hover ">
      <thead>
      <tr>
      <th>#</th>
      <th>Transaction Hash</th>
      <th>From</th>
      <th>To</th>
      <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {
        this.state.settlements.slice(0,10).map(function(settlement, index) {
          return(
            <tr key={settlement.id}>
            <td>{settlement.id}</td>
            <td>{settlement.transaction_hash }</td>
            <td>{settlement.from}</td>
            <td>{settlement.to}</td>
            <td>{settlement.amount}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
    );
  }
  }
