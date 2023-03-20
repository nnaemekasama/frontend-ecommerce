import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'
import { savePaymentMethod } from '../actions/cartActions'



const PaymentScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    let navigate = useNavigate()

    if(!shippingAddress) {
        navigate('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod({paymentMethod}))
        navigate('/placeorder')
    }
  return (
    <>
    <CheckOutSteps step1 step2 step3/>
    <FormContainer>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>
                    Select Method
                </Form.Label>
            <Col>
                <Form.Check 
                type='radio' 
                label='PayPal or Credit Card' 
                id='PayPal'
                name='paymentMethod' 
                value='PayPal' 
                checked 
                onChange={(e) => setPaymentMethod(e.target.value)}>
                </Form.Check>
                {/* <Form.Check 
                type='radio' 
                label='Stripe' 
                id='Stripe'
                name='paymentMethod' 
                value='Stripe' 
                onChange={(e) => setPaymentMethod(e.target.value)}>
                </Form.Check> */}
            </Col>
            </Form.Group>
            <Button className='mt-3' type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>
    </>
  )
}

export default PaymentScreen