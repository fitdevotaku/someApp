import React from 'react'

const ProfileCard = () => {
    const myStyle = {
        backgroundColor: "white",
        fontSize: "44px",
        display: "flex"
    }

    const hStyle = {
        marginLeft: "10px"
    }
  return (
      <div style={myStyle}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstreetartnews.net%2Fwp-content%2Fuploads%2F2019%2F09%2Fdeansunshine_landofsunshine_melbourne_streetart_graffiti_streetartnews_KAWS-Melbourne-NGV-19.jpg&f=1&nofb=1" alt="" height="400px" />
           <h2 style={hStyle}>ProfileCard</h2>
    </div>
  )
}

export default ProfileCard