import React, {memo} from 'react'
import usericon from '../icons/user-icon.png'
import './header.css'
import Button from 'react-bootstrap/Button'
import {setActiveli} from '../components/setActiveli'

function Header(props)
{
    const {activeli, setPopupStatus} = {...props}
    let newbtntext = setActiveli(activeli)
    
    return(
        <React.Fragment>
            <div className = "header">
                <p className = "company-name">Pillir</p>
                <div style = {{display : "inline"}}>
                    <p className = "user-name">Vinith T</p>
                    <img className = 'user-icon' alt = "user-icon" src = {usericon}/>
                    <Button 
                    size="sm" 
                    variant = "dark" 
                    className = "add-btn" 
                    onClick = {() => setPopupStatus(true)}>
                        {newbtntext}
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default memo(Header)