import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'
import chart from './components/chart'

import { ApolloProvider } from 'react-apollo'

import SongList from './components/SongList'

import App from './components/App'
const client = new ApolloClient({})
const Root = () => {
    return ( <
        ApolloProvider client = { client } >
        <
        Router history = { hashHistory } >
        <
        Route path = '/'
        component = { App } >
        <
        IndexRoute component = { SongList }
        /> <
        Route path = 'songs/new'
        component = { SongCreate }
        /> <
        Route path = 'songs/:id'
        component = { SongDetail }
        /> <
        Route path = 'chart'
        component = { chart }
        /> <
        /Route> <
        /Router> <
        /ApolloProvider>
    )
}

ReactDOM.render( <
    Root / > ,
    document.querySelector('#root')
)