import React, { Component } from 'react';
import Header from '../components/Header';
import { withRouter } from "react-router";

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let value = document.getElementById("searchInput").value;
        this.props.history.push(`/search/${value}`)
    }

    render() {
        return(
            <Header handleSubmit={ this.handleSubmit }/>
        )
    }
}

export default withRouter(MenuContainer);