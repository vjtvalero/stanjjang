import React, { useState, useEffect } from 'react'
import { fetchItems } from './api/items'
import Navbar from './components/navbar'
import VoteItemContainer from './components/voteItemContainer'

const App = () => {
    const loadingImage = 'assets/images/loading.gif'
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const getItems = async () => {
        setLoading(true)
        const items = await fetchItems()
        setItems(prevItems => {
            return [...prevItems, ...items]
        })
        setLoading(false)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Navbar />
            <div style={{ marginTop: '3.5rem', backgroundColor: '#F2F2F2' }}>
                <VoteItemContainer items={items} isLoading={isLoading} getItems={getItems} />
                {
                    isLoading && (
                        <img src={loadingImage} alt="loading img" />
                    )
                }
            </div>
        </div>
    )
}

export default App