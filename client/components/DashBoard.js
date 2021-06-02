import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/currentUser'
import { hashHistory } from 'react-router'

class DashBoard extends Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        if(this.props.data.user === null) { hashHistory.push('/') }
    }
    render(){
        const { loading, user } = this.props.data
        if(loading) {return <div>Loading..</div>}
        return(
            <div>Weshcome</div>
        )
    }
}

export default graphql(query)(DashBoard)