import React, { Component } from 'react'
import { connect } from 'react-redux'
import {testAction} from "../../redux/actions/actions";
import "./Home.scss"

class Home extends Component {
    render() {
        console.log("props>", this.props)
        return (
            <div>
                  Home 
                  <button onClick={()=> this.props.testAction("clicked")}>Click me</button>
 
            </div>
        )
    }
}

const mapDispatchToProps = {
    testAction
}

const mapStateToProps = state => ({
    testData: state.testReduxReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
