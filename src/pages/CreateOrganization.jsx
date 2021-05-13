import React from 'react';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import CreateConfirmed from '../components/products/CreateConfirmed';
import { userContext } from '../context/UserProvider';

const CreateOrganization = () => {

    const [isModalShown , setIsModalShown] = useState(false);

    const [organizationInfo , setOrganizationInfo] = useState({
        name: "",
        email: "",
        password: "",
        employees: ""
    });

    const {db , auth} = useContext(userContext);
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
          var res = await auth.createUserWithEmailAndPassword(organizationInfo.email , organizationInfo.password);
        //   console.log(res.user);
            res.user.sendEmailVerification();
            console.log(res.user)
            const formRef = await db.collection("organization")
                .add({
                    name: organizationInfo.name,
                    accountUID: res.user.uid,
                    employees: organizationInfo.employees
                });
                console.log(formRef);
                setIsModalShown(true)
        }catch(e){
                console.log(e);
        }  
    };

    console.log(organizationInfo)
    return(
        <div className="h-full flex justify-center items-center">
            <form className="max-w-xl p-6 bg-white rounded shadow-2xl">
                <p className="text-gray-800 text-2xl font-medium text-center">Organization information</p>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_name">Name of organization</label>
                    <input className="w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="text" required="" placeholder="Enter name of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , name: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">Email of organization</label>
                    <input className="w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="email" required="" placeholder="Enter email of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , email: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">Password for organization</label>
                    <input className="w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="password" required="" placeholder="Enter password of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , password: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">{"Employee names *(Names should be seperated by comma { , })"}</label>
                    <input className="w-full px-5 mt-1 py-4 text-gray-700 bg-gray-100 rounded" type="text" required="" placeholder="Enter names , you can also add employees later" aria-label="Email"  onChange={e => setOrganizationInfo({...organizationInfo , employees: e.target.value})}/>
                </div>
                <p className={"m-2"}>* We might contact you for more details</p>
                <div className="mt-4">
                     <button className="px-4 py-2 text-white font-light tracking-wider bg-indigo-500 rounded" onClick={handleSubmit}>get started now</button>
                </div>
            </form>
            <CreateConfirmed isShown={isModalShown} setIsModalShown={setIsModalShown}/>
        </div>
    );
}
 
export default CreateOrganization;