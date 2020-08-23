import React from 'react'

const Navbar = () => {
    return (
        <div style={styles}>
            <center style={{ fontFamily: 'ConcertOne', fontSize: '1rem' }}>{process.env.REACT_APP_NAME}</center>
        </div>
    )
}

const styles = {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: '100%'
}

export default Navbar