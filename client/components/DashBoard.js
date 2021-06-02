import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/currentUser'

class DashBoard extends Component {

    render(){
        const { loading} = this.props.data
        if(loading) {return <div>Loading..</div>}
        return(
            <div>Weshcome</div>
        )
    }
}

export default graphql(query)(DashBoard)