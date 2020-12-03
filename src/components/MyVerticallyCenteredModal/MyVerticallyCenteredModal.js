import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'
import {clearState} from '../../actions/actions'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  const {user} = useAuth0();
  const [errors, setErrors] = useState({name: '', userName: '', lastName: ''});
  const [inputValue, setInputValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  if (localStorage.getItem('orders') === null) {
    localStorage.setItem('orders', JSON.stringify([]));
  }

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const forTheName = (e) => {
    setNameValue(e.target.value)
  }

  const forTheLastName = (e) => {
    setLastNameValue(e.target.value)
  }

  const handleNamesValidation = (input) => {
    let formIsValid = true;

    if (input === '') {
      formIsValid = false;
      setErrors({userName: "Name cannot be empty"});
    }

    return formIsValid;
  }

  const handleLastNamesValidation = (input) => {
    let formIsValid = true;

    if (input === '') {
      formIsValid = false;
      setErrors({lastName: "Lastname cannot be empty"});
    }

    console.log(errors.lastName);

    return formIsValid;
  }

  const handleValidation = (input) => {
    let formIsValid = true;

    if (input === '') {
      formIsValid = false;
      setErrors({name: "Cannot be empty"});
    }

    if (!input.match(/\w+(\s\w+){2,}/) && input !== '') {
        formIsValid = false;
        setErrors({name: "Please Enter Valid Adress..."});
    }
    return formIsValid;
  }

  const orderHandler = (e) => {
    e.preventDefault();
    if (user) {
      if (handleValidation(inputValue) && handleNamesValidation(nameValue) && handleLastNamesValidation(lastNameValue)) {
        let person = {
          user: user.name,
          orders: '',
          adress: '',
          total: ''
        };
        person.orders = (JSON.parse(localStorage.getItem('cartStorage')))
        person.adress = inputValue
        person.total = (JSON.parse(localStorage.getItem('cartStorage'))).reduce((acc, item) => {return acc + (item.price*item.number)}, 0)
        let raw = JSON.parse(localStorage.getItem('orders'))
        raw.push(person)
        localStorage.setItem('orders', JSON.stringify(raw));
        console.log('works');
        props.clearState();
        localStorage.removeItem('cartStorage');
        setInputValue('');
        setNameValue('');
        setLastNameValue('');
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
            <Form.Label>e.g. 61 Park Street</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter The Adress.."
              name='adress'
              onChange={onChange}
              value={inputValue} />
            <Modal.Title id="contained-modal-title-vcenter">
              <h4 style={{display: errors.userName ? 'block' : 'none' }} className='danger'>{errors.userName}</h4>
            </Modal.Title>
            <Form.Label>Enter your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter The Name.."
              name='adress'
              onChange={forTheName}
              value={nameValue} />
            <Modal.Title id="contained-modal-title-vcenter">
              <h4 style={{display: errors.lastName? 'block' : 'none' }} className='danger'>{errors.lastName}</h4>
            </Modal.Title>
            <Form.Label>Enter your Lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter The Lastname.."
              name='adress'
              onChange={forTheLastName}
              value={lastNameValue} />
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
