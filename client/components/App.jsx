import React from 'react'
import SavedPlants from './SavedPlants'


import Register from './Register'
import Login from './Login'

import PlantView from './plantview/PlantView'

import HomePage from './HomePage'
import Nav from './Nav'
import CreateListing from './CreateListing'

import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>

    {/* <Register />
    <Login /> */}
      {/* <HomePage /> */}
      {/* <CreateListing
        user='bossManThomas'
        usersId={3}
        plantsId={132811}
        contact='0221237654'
        email='thomas@bossMan.co.nz'
        scientificName='Pothos Aurea'
        commonName='Devils Ivy' /> --> */}

      {/* details under createListing hardcoded to have results*/}
      {/* need to request this as props for the actual caller of CreateListing Component*/}


      <Router>
        <Route path='/' component={Nav} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/plant/:plantId" component={PlantView} />
        <Route exact path="/savedPlants" component={SavedPlants} />
        <Route exact path="/createListing" component={CreateListing} />
      </Router>
      </>
  )
}

export default App
