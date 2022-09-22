import React from 'react'

const ProfileCard = ({title, tagline, description}) => {
    return (
      <div style={{backgroundColor: 'white', margin: '40px'}}>
        <div style={{display: 'flex'}}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstreetartnews.net%2Fwp-content%2Fuploads%2F2019%2F09%2Fdeansunshine_landofsunshine_melbourne_streetart_graffiti_streetartnews_KAWS-Melbourne-NGV-19.jpg&f=1&nofb=1"
                    alt=""
                    height="300px"
                />
            <div>
                <h2 style={{ marginLeft: '10px', fontSize: '50px' }}>{title}</h2>
                <h6 style={{ marginLeft: '10px', fontSize: '25px' }}>{tagline}</h6>
            </div>
        </div>
            
        <div>
            <p style={{ fontSize: '23px', padding: '5px' }}>{description}</p>    
        </div>
      </div>
  )
}

export default ProfileCard