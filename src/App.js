import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import ChordsPlayer from './containers/ChordsPlayer'
import Typography from './components/Typography'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <Typography>
        <MenuSideBar />
        <Header />
        <ChordsPlayer />
        <Button compact>TEST</Button>
      </Typography>
    )
  }
}

export default App
