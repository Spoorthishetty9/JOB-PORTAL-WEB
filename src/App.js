
import React,{useEffect , useState} from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import JobSetting from "./components/JobSetting/JobSetting";
import HelpDesk from "./components/HelpDesk/HelpDesk";
import Tutorial from "./components/Tutorial/Tutorial";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Candidates from "./components/Candidates/Candidates";
import AcceptJobSetting from "./components/AcceptJobSetting/AcceptJobSetting";
import RejectJobSetting from "./components/RejectJobSetting/RejectJobSetting";
import "./App.css";   

import { connect } from 'react-redux';
import { handleAccept,handleReject} from './actions/accept_reject';

const App = () =>{

    return(
        <Router>
        <div className="App">
            <Navbar />
            <Routes>
            <Route path ="/" element={<JobSetting />}/>
            <Route path ="/acceptJob" element={<AcceptJobSetting/>}/>
            <Route path ="/rejectJob" element={<RejectJobSetting/>}/>
            <Route path ="/tutorial" element={<Tutorial/>}/>
            <Route path ="/feedback" element={<FeedbackForm/>}/>
            <Route path ="/helpDesk" element={<HelpDesk/>}/>
            <Route path ="/candidates" element={<Candidates/>}/>
            </Routes>
        </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    rejectValues: state.acceptReject.parametersReject
  });
  export default connect(mapStateToProps, { handleAccept,handleReject })(App);
 

