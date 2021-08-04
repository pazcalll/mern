import React from 'react'

const Input = ({label, ...rest}) => {
    return (
        <div className="mb-3">
            <p className="form-label">{label}</p>
            <input className="form-control" {...rest}/>
        </div>
    )
}

export default Input
