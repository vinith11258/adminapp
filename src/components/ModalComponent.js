import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {setActiveli} from '../components/setActiveli'
import ModalBody from './ModalBody';

function ModalComponent(props)
{
    const [newdata, setNewData] = useState({})
    const {activeli,
          setPopupStatus, 
          popupStatus, 
          apidata, 
          setapiData
          } = {...props}
    const customer = apidata.customer
    const project = apidata.project
    const employee = apidata.employee
    //check PROJECT/CUSTOMER/EMPLOYEES
    let tabledata = [customer, project, employee];
    const modifiedTabledata = () => Object.keys(tabledata[activeli][0]).map((ele, index) => {
            if(ele !== "State")
                return {FieldName : ele, FieldType : "input", Placeholder : "Enter value"}
            else
                return {FieldName : ele, FieldType : "select", Placeholder : ""}
    })
    
    return(
        <div>
            <Modal show = {popupStatus} onHide={() => setPopupStatus(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{setActiveli(activeli)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalBody 
                    tabledata = {modifiedTabledata()}
                    newdata = {newdata}
                    setNewData = {setNewData}
                    />
                </Modal.Body>
                <Modal.Footer>
                <Button onClick = {() => setPopupStatus(false)} variant="secondary">
                    Close
                </Button>
                <Button onClick = {() => {
                    tabledata[activeli].push(newdata)
                    setapiData({customer : tabledata[0], project : tabledata[1], employee : tabledata[2]});
                    setPopupStatus(false)
                }} 
                variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalComponent;