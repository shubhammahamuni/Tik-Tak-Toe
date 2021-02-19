import React from 'react'

const Footer =(props)=> {
        
    return (
        <h2>{!props.draw?(props.isgameactive == true? `${props.text}'s turns` : `${props.text} won the game`): `Draw`} 
                        
            
            
    </h2>
    )
}
export default Footer;