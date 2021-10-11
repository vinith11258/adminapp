import React from 'react'
import Form from 'react-bootstrap/Form'
import './SelectBox.css'

function SelectBox(props)
{
    const {text, newdata, setNewData} = {...props}
    return(
        <>
        <Form.Label>State</Form.Label>
        <Form.Select
            onChange = {(e) => {
                let newdata1 = newdata
                newdata1[text] = e.target.value
                setNewData(newdata1)
            }
            }
            id = {text} aria-label="Default select example">
            <option>Select State</option>
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
        </Form.Select>
        </>
    )
}

export default SelectBox