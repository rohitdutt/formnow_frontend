import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ViewResponses from "../pages/ViewResponses";
import Analytics from "./formDashboard/Analytics";
import ResponseProvider, {responseContext} from "../context/ResponseProvider";
import {spinnerContext} from "../context/SpinnerProvider";
import {userContext} from "../context/UserProvider";
import {useHistory , Link} from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ViewFormTabs = ({id}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const {setResponses , formDetails , setFormsDetails , responses} = useContext(responseContext);
  const {setShowSpinner} = useContext(spinnerContext);
  const {auth , db , setUser} = useContext(userContext);
  const history = useHistory();


  const fetchResponses = async () =>{
    const res = await db.collection('response').where("formId" , "==" , id).get();
    res.docs.forEach(response =>{
      setResponses(oldResponses => [...oldResponses , response.data().response])
    });
  };

  const fetchFormFields = async () =>{
    const res = await db.collection('forms').doc(id).get();
    setFormsDetails(res.data());
  };
  useEffect(()=>{
    setShowSpinner(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchFormFields();
        if(responses.length === 0){
          fetchResponses();
        }
        setShowSpinner(false);
      }else{
        setShowSpinner(false);
        history.push('/log-in')
      }
    });
  },[]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className={classes.root}>
          <div className={"relative bg-white border-t"}>
            <Link to={"/organization-home"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-8 top-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <p className={"py-4 font-semibold text-2xl text-gray-700 text-center"}>{formDetails ? formDetails.title : null}</p>
            <p className={"py-2 text-md text-gray-700 text-center absolute top-2 right-2"}>Created by : <span className={"font-semibold"}>{formDetails ? formDetails.createdBy : null}</span></p>
          </div>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  className={"bg-white text-black border-t"}>
              <Tab label="Responses" {...a11yProps(0)} className={"bg-white"}/>
              <Tab label="Analytics" {...a11yProps(1)}  className={"bg-white"}/>
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <p className={"py-1 px-40 text-md text-gray-700 text-center"}>{formDetails ? formDetails.description : null}</p>
            <ViewResponses id={id}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Analytics id={id}/>
          </TabPanel>
        </div>
  );
}

export default ViewFormTabs;
