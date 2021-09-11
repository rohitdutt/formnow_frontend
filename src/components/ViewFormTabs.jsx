import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ViewResponses from "../pages/ViewResponses";
import Analytics from "./formDashboard/Analytics";
import {responseContext} from "../context/ResponseProvider";
import {userContext} from "../context/UserProvider";
import {useHistory , Link} from "react-router-dom";
import SplashScreen from "./common/SplashScreen";
import axios from "axios";
import firebase from '../firebase/firebase';
import {getFormFieldsByFormId, getResponsesByFormId} from "../httpResources/firebaseActions"

function TabPanel(props) {
  const {children, value, index, ...other } = props;
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

const ViewFormTabs = ({id}) => {

  const [value, setValue] = useState(0);
  const [isLoading , setIsLoading] = useState(false);
  const [joke , setJoke] = useState("");
  const {setResponses , formDetails , setFormsDetails , responses} = useContext(responseContext);
  const {setUser} = useContext(userContext);
  const history = useHistory();

  const fetchJoke = async () => {
    try {
      const res = await axios.get("https://api.chucknorris.io/jokes/random");
      setJoke(res.data.value)
      console.log(res.data)
    }catch (e){
      console.log(e)
    }
  }

  const fetchResponses = async () =>{
    setResponses([]);
    const res = await getResponsesByFormId(id);
    res.forEach(response =>{
      setResponses(oldResponses => [...oldResponses , response.data().response])
    });
  };

  const fetchFormFields = async () =>{
    const res = await getFormFieldsByFormId(id);
    setFormsDetails(res.data());
    if (res.data().description === "") {
      await fetchJoke();
    }
    setIsLoading(false);
  };

  useEffect(()=>{
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchFormFields().then(r => {});
        if(responses.length === 0){
          fetchResponses().then(r => {});
        }
      }else{
        setIsLoading(false);
        history.push('/log-in')
      }
    });
  },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      isLoading ?
        <SplashScreen/>
      :
          <div className={"h-screen bg-gray-200"}>
            <div className={"flex flex-col lg:flex-row h-full"}>
              <div className={"w-full lg:w-1/4 p-1 lg:p-2 lg:h-full"}>
                <div className={"h-full bg-white w-full rounded-lg shadow-2xl flex flex-col items-center relative"}>
                  <Link to={"/organization-home"}>
                    <p className={"uppercase text-xl lg:text-2xl font-semibold text-indigo-600 my-4 lg:my-8 hover:underline"}>Formnow</p>
                  </Link>
                  <p className={"py-2 lg:py-4 px-1 font-semibold text-xl lg:text-2xl text-gray-700 text-center break-words"}>{formDetails ? formDetails.title : null}</p>
                  {
                    formDetails && formDetails.createdBy != "None" ?
                        <p className={"py-2 text-md text-gray-700 text-center"}>Created by : <span className={"font-semibold"}>{formDetails ? formDetails.createdBy : null}</span></p>
                        :
                        null
                  }
                  <div className={"mt-2 px-2 max-h-72 overflow-y-auto"}>
                    {
                      <p className="overflow-y-auto dark:text-gray-50 h-auto text-gray-700 text-md py-2 break-words lg:mt-4 max-h-80">
                        {
                          formDetails && formDetails.description != "" ?
                              formDetails.description
                              :
                              <>
                              {joke && <p className={"hidden lg:block mb-4 font-semibold text-gray-500"}>We couldn't find any form description belongs with this form so here's a joke for you :</p>}
                                {joke}
                              </>
                        }
                      </p>
                    }
                  </div>
                </div>
              </div>
              <div className={" w-full pt-0 lg:pt-2 p-1 lg:p-2 h-full overflow-y-auto"}>
                <div className={"bg-white w-full min-h-full rounded-lg shadow-2xl pb-4 flex flex-col items-center"}>
                  <AppBar position="static">
                    <Tabs value={value} TabIndicatorProps={{style: {background:'#6366F1'}}} onChange={handleChange} aria-label="simple tabs"  className={"bg-white text-black border-t"}>
                      <Tab label="Responses" {...a11yProps(0)} className={"bg-white border border-indigo-500"}/>
                      <Tab label="Analytics" {...a11yProps(1)} className={"bg-white border-b-2 border-indigo-500"}/>
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0} className={"w-full"}>
                    <ViewResponses id={id}/>
                  </TabPanel>
                  <TabPanel value={value} index={1} className={"w-full"}>
                    <Analytics id={id}/>
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
  );
}

export default ViewFormTabs;
