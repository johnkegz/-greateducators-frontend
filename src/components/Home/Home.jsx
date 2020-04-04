import React, { Component } from 'react'
import { connect } from 'react-redux'
import {testAction} from "../../redux/actions/actions";
import "./Home.css"
import Sider from "./Slider";
import MainInfo from "./MainInfo";
import Schools from "./Schools"

class Home extends Component {
    render() {
        return (
            <div>
                  <Sider />
                  <MainInfo />
                  <Schools />
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
