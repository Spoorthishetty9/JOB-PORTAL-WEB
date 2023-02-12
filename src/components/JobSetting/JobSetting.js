import React from 'react';
import Job from '../Job/Job';
import "../../App.css";
import { connect } from 'react-redux';
 function JobSetting({value},props) {
    console.log(value);
    return (
        <div>
            <div className="arrangement">
           <Job  phone="123456" time="Full Time" hours="7-10hrs" money="23-25Lakhs" location="Bangalore" title="Back Office Executive" department="Department" company="Oberlo" value={value}/>
           <Job  phone="654321" time="Part Time" hours="6-10hrs" money="9-13Lakhs" location="Chennai" title="Office Assistant Job" department="Department" company="Shopify" value={value}/>
           <Job  phone="345600" time="Full Time" hours="4-5hrs" money="20-25Lakhs" location="Delhi" title="Receptionist" department="Department" company="Wordlab" value={value}/>
           <Job  phone="987605" time="Full Time" hours="9-13hrs" money="3-5Lakhs" location="Goa" title="Back Office Executive" department="Department" company="FreshBooks" value={value}/>
           <Job  phone="234109" time="Half Time" hours="7-10hrs" money="8-15Lakhs" location="Madras" title="Data Entry Job" department="Department" company="GetSocio" value={value}/>
           <Job  phone="980760" time="Full Time" hours="4-10hrs" money="23-30Lakhs" location="Hyderabad" title="Front Desk Executive" department="Department" company="Wordoid" value={value}/>
           </div> 
        </div>
    )
}
const mapStateToProps = state => ({
    count: state.acceptReject.count
  });

  export default connect(mapStateToProps)(JobSetting);
