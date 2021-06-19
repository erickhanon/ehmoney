import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Salário',
        type: 'deposit',
        category: 'WS',
        amount: 1800,
        createdAt: new Date('2021-05-06 19:19:19'),
      },
      {
        id: 2,
        title: 'Presente pra mari',
        type: 'withdraw',
        category: 'Despesas',
        amount: 300,
        createdAt: new Date('2021-12-06 19:19:19'),
      }
    ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
