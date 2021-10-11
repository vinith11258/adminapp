import React from 'react'
import Form from 'react-bootstrap/Form'

function Input(props)
{
    const {placeholder, text, newdata, setNewData} = {...props}
    return(
        <Form.Group className="mb-3" controlId={text}>
            <Form.Label>{text}</Form.Label>
            <Form.Control onChange = {(e) => {
                let newdata1 = newdata
                newdata1[text] = e.target.value
                setNewData(newdata1)
                console.log(newdata1)
            }
            } 
                type="text" placeholder={placeholder} />
        </Form.Group>
    )
}

export default Input