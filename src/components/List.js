import React, { useState } from 'react'
import customericon from '../icons/customer_panel.png'
import employeeicon from '../icons/employee_panel.png'
import projecticon from '../icons/project_panel.png'


function List(props)
{
    
    const {activeli, setActiveli, setSort} = {...props}
    const renderIcon = (text) => {
        let imageVal = null;
        if(text == 'Customer')
            imageVal = customericon
        else if(text == 'Project')
            imageVal = projecticon
        else if(text == 'Employees')
            imageVal = employeeicon
        return <img src = {imageVal} alt = "icons"/>
        
    }
    return(
        <div>
             <ul className = "left-component">
            {props.list.map((list, index) => {
                return(
                    <li onClick = {(e) => {setActiveli(index); setSort({sortFlag : null, sortField : null, })}} className = {activeli == index ? "active-li" : ""} key = {index}>
                          <p>{list.text}</p>
                          {renderIcon(list.text)}
                    </li>
                );
            })}
           </ul>
        </div>
    );
}

export default List;