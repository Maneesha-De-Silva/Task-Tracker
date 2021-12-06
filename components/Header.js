import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button' 

const Header = ({post}) => {
    const onClick = () => {
        console.log('Click')
    }
 
    return (
       <header className = 'header'>
        <h1> {post} </h1>
        <Button color ='green' text ='Add'  
        onClick = {onClick}/>   
       </header>
    )
}


Header.defaultProps = {
    post: 'Task Tracker',
}

Header.propTypes = {
    post : PropTypes.string.isRequired,
}

/*
const headingStyle = {
    color: 'black', 
    backgroundColor:'blue'
}
*/
export default Header;
