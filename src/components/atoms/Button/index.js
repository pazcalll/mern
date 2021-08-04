import React from 'react'

function Button({title, ...rest}) {
    return (
        <div>
            <button className="btn btn-success" {...rest}>{title}</button>
        </div>
    )
}

export default Button
