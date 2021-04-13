import React from 'react'

const Layout = ({
    title = 'Title',
    description = "Description",
    className,
    childern
}) => (
    <div>
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{childern}</div>
    </div>
)

export default Layout