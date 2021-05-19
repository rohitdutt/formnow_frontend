import React , {useEffect , useContext, useState}from 'react';
import { useHistory, useParams } from 'react-router';
import Spinner from '../components/common/Spinner';
import { spinnerContext } from '../context/SpinnerProvider';
import { userContext } from '../context/UserProvider';

const ViewResponses = () => {

    const [formDetails , setFormsDetails] = useState(null);
    const [responses , setResponses] = useState([]);
    const {setShowSpinner} = useContext(spinnerContext);
    const {auth , db , setUser} = useContext(userContext);
    const history = useHistory();
    const {id} = useParams();

    const fetchFormFields = async () =>{
        const res = await db.collection('forms').doc(id).get();
        setFormsDetails(res.data());
        setShowSpinner(false);
    };

    const fetchResponses = async () =>{
        const res = await db.collection('response').where("formId" , "==" , id).get();
        res.docs.forEach(response =>{
            setResponses(oldResponses => [...oldResponses , response.data()])
        })
    };
    console.log(responses)
    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                fetchFormFields();
                if(responses.length === 0){
                    fetchResponses();
                }
            }else{
                history.push('/log-in')
            } 
          });
    },[]);

    return ( 
    <div className={"h-full justify-center items-center text-center bg-yellow-400"}>
        <p>{formDetails ? formDetails.title : ""}</p>
        <p>{formDetails ? formDetails.description : ""}</p>
        <p>Create by : {formDetails ? formDetails.createdBy : ""}</p>
        <div className={"flex justify-center"}>
        <table className=" p-4 bg-white shadow rounded-lg table">
            <div className={"flex"}>
                {
                        formDetails ? formDetails.formFields.map((field , index) => (
                            <div className={"flex flex-col divide-x-2"}>
                                <thead>
                                    <tr>
                                    {
                                        index < 1 ?
                                            (
                                                <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                                    #
                                                </th>
                                            )
                                        :
                                            ""
                                        }
                                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            {field.fieldName}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={"  divide-y"}>
                                {
                                    responses ? responses.map( (response , idx) => (
                                        <tr className={"divide-x-2"}>
                                        {
                                            index < 1 ?
                                            (
                                                <td className="p-4 whitespace-nowrap font-normal text-gray-900">
                                                    {idx+1}
                                                </td>
                                            )
                                            : ""
                                        }   
                                            <td className="p-4 whitespace-nowrap font-normal text-gray-900 ">
                                                {response.response[field.id]}
                                            </td>
                                        </tr>  
                                    ))
                                    : 
                                    ""
                                }
                                </tbody>
                            </div>
                        ))
                        :
                        ""
                }
            </div>
        </table>
        </div>
        <Spinner/>
    </div>
    );
}
 
export default ViewResponses;