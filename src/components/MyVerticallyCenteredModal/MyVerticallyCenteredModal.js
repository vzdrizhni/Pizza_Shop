import {Modal, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth0} from '@auth0/auth0-react'
import {clearState} from '../../actions/actions'
import {connect} from 'react-redux'

function MyVerticallyCenteredModal(props) {
    const {user} = useAuth0();

    let inputValue = '';

    if (localStorage.getItem('orders') === null) {
      localStorage.setItem('orders', JSON.stringify([]));
    }

    const onChange = (e) => {
      inputValue = e.target.value
      console.log(inputValue);
    }

    const orderHandler = (e) => {
      e.preventDefault();
      if (user) {
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
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={orderHandler}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter the adress..</Form.Label>
              <Form.Control type="text" placeholder="Please Enter The Adress.." onChange={onChange} />
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
  clearState: value => dispatch(clearState(value)),
});

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, mapDispatchToProps)(MyVerticallyCenteredModal);
