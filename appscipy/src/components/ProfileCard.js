import React from 'react'

const ProfileCard = ({image, name, title, description}) => {
    return (
      <div style={{backgroundColor: 'white', margin: '40px'}}>
        <div style={{display: 'flex'}}>
                <img src={image}
                    alt=""
                    height="300px"
                />
            <div>
                <h2 style={{ marginLeft: '10px', fontSize: '50px' }}>{name}</h2>
                <h6 style={{ marginLeft: '10px', fontSize: '25px' }}>{title}</h6>
            </div>
        </div>
            
        <div>
            <p style={{ fontSize: '23px', padding: '5px' }}>{description}</p>    
        </div>
      </div>
  )
}

export default ProfileCard