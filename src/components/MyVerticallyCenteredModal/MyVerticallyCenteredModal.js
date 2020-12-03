import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'
import {clearState} from '../../actions/actions'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  const {user} = useAuth0();
  const [errors, setErrors] = useState({name: ''});
  const [inputValue, setInputValue] = useState('');

  // let inputValue = '';
  // let errors = {};
  console.log(errors);
  console.log(inputValue);

  if (localStorage.getItem('orders') === null) {
    localStorage.setItem('orders', JSON.stringify([]));
  }

  const onChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue);
  }

  const handleValidation = (input) => {
    let formIsValid = true;

    if (input === '') {
      formIsValid = false;
      setErrors({name: "Cannot be empty"});
    }

    if (!input.match(/^[A-Za-z0-9 _]*[A-Za-z]+[A-Za-z0-9 _]*$/) && input !== '') {
        formIsValid = false;
        setErrors({name: "Should contain both letters and numbers"});
    }
    return formIsValid;
  }

  const orderHandler = (e) => {
    e.preventDefault();
    if (user) {
      if (handleValidation(inputValue)) {
        let person = {
          user: user.name,
          orders: '',
          adress: ''
        };
        person.orders = (JSON.parse(localStorage.getItem('cartStorage')))
        person.adress = inputValue
        let raw = JSON.parse(localStorage.getItem('orders'))
        raw.push(person)
        localStorage.setItem('orders', JSON.stringify(raw));
        console.log('works');
        props.clearState();
        localStorage.removeItem('cartStorage');
        setInputValue('');
        setErrors({name: "Order Successfully Accepted!"})
      } else {
        console.log(errors.name);
      }
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 style={{display: errors.name ? 'block' : 'none' }} className='danger'>{errors.name}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={orderHandler}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter the adress..</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter The Adress.."
              name='adress'
              onChange={onChange}
              value={inputValue} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  clearState: value => dispatch(clearState(value))
});

const mapStateToProps = state => ({cart: state.cart});

export default connect(mapStateToProps, mapDispatchToProps)(MyVerticallyCenteredModal);
