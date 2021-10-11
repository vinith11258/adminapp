import React from 'react'
import List from './List'

function Leftcomponent(props)
{
    console.log(props)
    const {activeli, setActiveli, setSort} = {...props}
    let listJson = [
        {
            text:'Customer',
            image:'customericon'},
        {
            text:'Project',
            image:'projecticon',
        },
        {
            text:'Employees',
            image:'employeeicon',
        },
    ]
    return(
        <div className = "l-div">
            <List 
                setSort = {setSort} 
                activeli = {activeli} 
                setActiveli = {setActiveli} 
                list = {listJson} 
            />
        </div>
    );
}

export default Leftcomponent;