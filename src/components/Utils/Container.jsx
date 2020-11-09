import React from 'react';

export default function Container(props) {
    return (
        <div className="p-4 mt-5" style={styles.container}>
            {props.children}
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: 'white',
        fontFamily: 'Quicksand',
    },
};
