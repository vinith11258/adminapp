import React, { useState } from 'react'
import Header from '../re-useablecomponents/header'
import Leftcomponent from './Leftcomponent'
import Rightcomponent from './Rightcomponent';
import ModalComponent from '../components/ModalComponent'
import './app.css'


function App()
{
    const [activeli, setActiveli] = useState(0)
    const [popupStatus, setPopupStatus] = useState(false)
    const [sort, setSort] = useState({sortFlag : '', sortField : null, })
    const [apidata, setapiData] = useState({employee : [
        {
            Name : "Vinith",
            Age : 25,
            Email : "vinith1258@gmail.com",
            State : "Active",
        },
        {
            Name : "Srithar",
            Age : 24,
            Email : "srithar@gmail.com",
            State : "Active",
        },
        {
            Name : "Tony",
            Age : 27,
            Email : "tony@gmail.com",
            State : "Active",
        }
        ],
            project : [
                {
                 "Name" : "POC",
                 "Client" : "Algoma",
                 "State" : "Active",
                 "Deadline" : "2-June-2020",
                 "Manager" : "Me "
                },
                {
                 "Name" : "POC1",
                 "Client" : "Algoma1",
                 "State" : "Active",
                 "Deadline" : "2-June-2020",
                 "Manager" : "Me1"
                }
            ],
            customer :  [
                {
                    "Name" : "DOLE",
                    "Client ID" : "DOL10001",
                    "State" : "Active",
                },
                {
                    "Name" : "SMART",
                    "Client ID" : "SMRT12411",
                    "State" : "Active",
                },
            ]
        })
    return(
        <div>
            {
            popupStatus && 
            <ModalComponent 
            setapiData = {setapiData}
            apidata = {apidata} 
            popupStatus = {popupStatus} 
            activeli = {activeli} 
            setPopupStatus = {setPopupStatus}
            />}

            <Header 
            setPopupStatus = {setPopupStatus} 
            activeli = {activeli} 
            />
            <div className = "app-div">

                <Leftcomponent 
                setSort = {setSort} 
                activeli = {activeli} 
                setActiveli = {setActiveli}
                />

                <Rightcomponent 
                sort = {sort} 
                setSort = {setSort} 
                apidata = {apidata} 
                setapiData = {setapiData} 
                activeli = {activeli}
                />
            </div>
        </div>
    );
}

export default App