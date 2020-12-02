import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth0} from '@auth0/auth0-react'

const OrderHistory = () => {
  const orders = JSON.parse(localStorage.getItem('orders'))
  console.log(orders);
  const {user} = useAuth0();
  if (orders) {
    return (
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Order</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((item, index) => {
            return  <tr key={index}>
                        <td>{index}</td>
                        <td>{item.user}</td>
                        {item.orders.map(item => {
                            return <tr><td>{item.title}</td><td>{item.number}</td></tr>
                        })}
                        <td>{item.adress}</td>
                    </tr>
        })}
        </tbody>
      </Table>
    )
  } else {
      return (
          <h1>Sign In to see the history of orders</h1>
      )
  }

}

export default OrderHistory
