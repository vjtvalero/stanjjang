import React, { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const FeedItemContainer = ({ items, isLoading, getItems }) => {
    const voteItems = items.map((item, index) => {
        const currentPosition = index + 1
        const positionToGetNext = items.length - 2
        if (currentPosition === positionToGetNext) {
            return <VoteItem key={index} item={item} isLoading={isLoading} getItems={getItems} hasRef={true} />
        } else {
            return <VoteItem key={index} item={item} isLoading={isLoading} getItems={getItems} />
        }
    })
    return voteItems
}

const VoteItem = ({ item, isLoading, getItems, hasRef = false }) => {
    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                getItems(item.ref)
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, getItems, item.ref])
    return (
        <div style={containerStyle} ref={hasRef ? lastElementRef : null}>
            <p style={itemTopStyle}>
                <img src="assets/images/logo.png" alt="author img" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                <span style={{ marginLeft: '1rem', fontWeight: 'bold', fontSize: '0.8rem' }}>{item.author}</span>
            </p>
            <Image
                src={item.image}
                alt="kpop img"
                fluid />
            <div style={infoStyle}>
                <p style={{ marginBottom: 0 }}>{item.title}</p>
                <small style={{ color: 'gray', fontSize: '0.8rem' }}>2 days ago</small>
                <div style={{ marginTop: '1rem' }}>
                    <span><Link to="/login">log in</Link> to vote</span>
                </div>
            </div>
        </div>
    )
}

const containerStyle = {
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    backgroundColor: 'white',
    fontFamily: 'Quicksand',
}

const infoStyle = {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    lineHeight: '1.5',
    fontSize: '1rem'
}

const itemTopStyle = {
    marginBottom: 0,
    fontSize: '0.8rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
}

export default FeedItemContainer