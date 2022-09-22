import React from 'react'
import profiles from '../mockDatabase'

// console.log(profiles)

const ProfileCard = ({image, name, title, description}) => {
    return (
      <div style={{backgroundColor: 'white', margin: 30, padding:5, borderRadius: 25,}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={image}
                    alt=""
                    style={{borderRadius: 20}}
                    height="300px"
                />
            <div>
                <h2 style={{ marginLeft: '10px', fontSize: '50px' }}>{name}</h2>
                <h6 style={{ marginLeft: '10px', fontSize: '25px' }}>{title}</h6>
            </div>
        </div>
            
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{ fontSize: '23px', padding: '5px' }}>{description}</p>    
        </div>
      </div>
  )
}

export default ProfileCard