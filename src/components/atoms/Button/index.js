import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({title, ...rest}) => {
    return (
        <button className="btn btn-success" {...rest}>{title}</button>
    )
}

export default Button
