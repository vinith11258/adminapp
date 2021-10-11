import React from 'react'
import Form from 'react-bootstrap/Form'
import Input from '../re-useablecomponents/Input'
import SelectBox from '../re-useablecomponents/SelectBox'

function ModalBody(props){
    const {
            tabledata,
            newdata,
            setNewData
          } = {...props}
    const formForm = (ele, index) => {
        let FieldName = ele.FieldName
        if(ele.FieldType === "input")
            return <Input 
                    key = {index} 
                    placeholder = {ele.placeholder} 
                    text = {FieldName}
                    newdata = {newdata} 
                    setNewData = {setNewData}
                    />
        else
            return <SelectBox 
                    text = {FieldName}  
                    key = {index}
                    newdata = {newdata}
                    setNewData = {setNewData}
                    />
    }

    return(
        <Form>
            {
                tabledata.map((ele, index) => {
                    return formForm(ele, index)
                })
            }
        </Form>        
    );
}
export default ModalBody