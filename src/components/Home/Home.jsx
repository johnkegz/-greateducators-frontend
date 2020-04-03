import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from "../Layout/page";
import {testAction} from "../../redux/actions/actions";

class Home extends Component {
    render() {
        console.log("props>", this.props)
        return (
            <div>
                <Page>
                  Home 
                  <button onClick={()=> this.props.testAction("clicked")}>Click me</button>
                </Page>  
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
