import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FormsTable from '../components/FormsTable';
import HeaderCard from '../components/HeaderCard';
import TextInput from '../components/inputs/TextInput';
import Navbar from '../components/Navbar';
import ShowFieldCard from '../components/ShowFieldCard';
import { spinnerContext } from '../context/SpinnerProvider';
import { userContext } from '../context/UserProvider';
import Spinner from '../components/common/Spinner';
import { useHistory } from 'react-router';

const ViewAllForms = () => {

    const [forms , setForms] = useState([]);
    const {setShowSpinner} = useContext(spinnerContext);
    const {db , auth , user , setUser} = useContext(userContext);
    const history = useHistory();

    const fetchForms = async () =>{
        const res = await db.collection('forms').where("organizationId","==" , auth.currentUser.uid).get();
        res.docs.forEach(form => {
            console.log(form)
            const data = form.data();
            data["formId"] = form.id;
            setForms(oldArray => [...oldArray , data]);
            console.log(form)
        });
        setShowSpinner(false);
    };

    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                if(forms.length === 0){
                    fetchForms();
                }
            }else{
                history.push('/log-in')
            } 
          });
    },[]);

    console.log(forms)
    return ( 
        <div className={"bg-green-300 h-screen w-full"}>
            <div className={"h-full bg-blue-500"}>
                <Navbar/>
                <div>
                    <FormsTable data={forms}/>
                </div>
            </div>
            <Spinner/>
        </div>
     );
}
 
export default ViewAllForms;