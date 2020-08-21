import React, { useState, useEffect } from 'react'

import { fetchItem } from './api/items'

const App = () => {
    const loading = 'assets/images/loading.gif'
    const [image, setImage] = useState(loading)
    const [info, setInfo] = useState({})
    const next = async () => {
        setImage(loading)
        setInfo({})
        const { image, title, author } = await fetchItem()
        setImage(image)
        setInfo({ title, author })
    }
    useEffect(() => {
        next()
    }, [])

    const hasInfo = Object.keys(info).length > 0

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                <center style={{ fontFamily: 'ConcertOne' }}>{process.env.REACT_APP_NAME}</center>
            </div>
            {image && (
                <img src={image} alt="kpop img" style={{ height: 'auto', width: 'auto' }} onClick={next} />
            )}
            {
                hasInfo && (
                    <div style={{ padding: '1rem', fontFamily: 'Quicksand', lineHeight: '1.5' }}>
                        <p style={{ marginBottom: '0' }}>{info.title}</p>
                        <small style={{ color: 'lightgray', fontSize: 'small' }}>{info.author}</small>
                        <div style={{ marginTop: '1rem' }}>
                            <button className="button -block">Sign up to vote</button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default App