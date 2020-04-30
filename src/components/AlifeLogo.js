import React, { Component }  from 'react';
import logo from '../logo.svg';
import withToggle from '../shared/withToggle'


class AlifeLogo extends Component{
    render(){
        const { toggle, toggleStatus, name } = this.props
        const style = {
            visibility: 'visible'
        }
        !toggleStatus? style.visibility = 'hidden' : style.visibility = 'visible'
        console.log(toggleStatus)
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" onMouseOver={toggle}
                style={style}
                />
                <div> Toggle Satus is {toggleStatus} </div>
                <div> My Name is {name} </div>
            </div>
        )
    }
}
export default withToggle(AlifeLogo)