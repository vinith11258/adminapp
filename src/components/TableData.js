import React from 'react'
import Table from 'react-bootstrap/Table'
import uparrow from '../icons/up-arrow.png'
import downarrow from '../icons/down-arrow.png'
import activeuparrow from '../icons/active-up-arrow.png'
import activedownarrow from '../icons/active-down-arrow.png'

function TableData(props)
{
    const {data, sort, setSort, activeli} = {...props}
    const arrows = (arrowtype, classname, ele) => {
        return <img onClick = {() => { setSort({sortField : ele, sortFlag : classname =="up-arrow" ? "desc" : "asc"});}} className = {classname} alt = {classname}  src = {arrowtype}/>
    }
    //Form table head
    const tableHead = (header) => {
        return header.map((ele, index) => {
            return(
                <th key = {index}>{ele}
                {sort.sortField === ele && sort.sortFlag === "desc" ? arrows(activeuparrow, "up-arrow", ele) : arrows(uparrow, "up-arrow", ele)}
                {sort.sortField === ele && sort.sortFlag === "asc" ? arrows(activedownarrow, "down-arrow", ele) : arrows(downarrow, "down-arrow", ele)}
                </th>
            )
        })
    }
    //Form table body
    const tableData = (data, okeys) => {
        console.log(sort)
        //sort function
        let sortField = sort.sortField
        let sortFlag = sort.sortFlag
        console.log(sortFlag)
        data = data.sort((a, b) => {
            switch(sortFlag)
            {
                case "asc":
                    if(a[sortField] < b[sortField]) return -1
                    if(a[sortField] > b[sortField]) return 1
                    if(a[sortField] === b[sortField]) return 0
                case "desc":
                    if(a[sortField] < b[sortField]) return 1
                    if(a[sortField] > b[sortField]) return -1
                    if(a[sortField] === b[sortField]) return 0
                default:
                    return data
            }
                
        })
        return data.map((ele,index) => {
            return(
                <tr key = {index}>
                    <td>{index+1}</td>
                    {
                        okeys.map((okey, oindex) => <td key = {oindex}>{ele[okey]}</td>)
                    }
                </tr>
            )
        })
    }
    return(
        <div>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                {
                    tableHead(Object.keys(data[0]))
                }
                </tr>
            </thead>
            <tbody>
                    {
                        tableData(data, Object.keys(data[0]))
                    }
            </tbody>
            </Table>
        </div>
    )
}

export default TableData