import React from 'react'
import Table from 'react-bootstrap/Table'
import {useAuth0} from '@auth0/auth0-react'

const OrderHistory = () => {
  const {user} = useAuth0();
  if (user) {
    const orders = JSON
      .parse(localStorage.getItem('orders'))
      .filter(item => {
        return item.user === user.name
      }, []);
    return (
      <div>
        <h1>Order History :</h1>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Order</th>
              <th>Adress</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => {
              return <tr key={index}>
                <td>{index}</td>
                <td>{item.user}</td>
                <td key={index}>
                  {item
                    .orders
                    .map((item, index) => {
                      return <div key={index}>
                        <span>{item.title}
                          :
                        </span>
                        <span>{item.number}</span>
                      </div>
                    })}
                </ td>
                <td>{item.adress}</td>
                <td>{item.total}{item.orders[0].currency}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    )
  } else {
    return (
      <h1>Sign In to see the history of orders</h1>
    )
  }

}

export default OrderHistory
