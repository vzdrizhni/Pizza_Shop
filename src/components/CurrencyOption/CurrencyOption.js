import React from 'react'
import {Col, Form} from 'react-bootstrap'
import {changeCurrency} from '../../actions/actions'
import {connect} from 'react-redux'

const CurrencyOption = ({changeCurrency}) => {

  const changeCurrentCurrency = (e) => {
    let {value} = e.target;
    changeCurrency(value);
  }

  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Label className="lg" htmlFor="inlineFormCustomSelect" srOnly>
              Preference
            </Form.Label>
            <Form.Control
              as="select"
              className="lg"
              id="inlineFormCustomSelect"
              custom
              defaultValue='1'
              onChange={changeCurrentCurrency}>
              <option value="1">USD</option>
              <option value="2">EUR</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeCurrency: value => dispatch(changeCurrency(value))
});

export default connect(null, mapDispatchToProps)(CurrencyOption);
