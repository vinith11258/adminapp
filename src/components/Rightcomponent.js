import React from 'react'
import TableData from './TableData'

function Rightcomponent(props)
{
    const {activeli, setapiData, apidata, sort, setSort} = {...props}
    const customer = apidata.customer
    const project = apidata.project
    const employee = apidata.employee

    //check PROJECT/CUSTOMER/EMPLOYEES
    let tabledata = [customer, project, employee];

    return(
        <div className = "r-div">
           <TableData  
              sort = {sort}
              setSort = {setSort} 
              activeli = {activeli} 
              data = {tabledata[activeli]}
            />
        </div>
    );
}

export default Rightcomponent;