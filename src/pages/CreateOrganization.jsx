import React,{useState, useContext} from 'react';
import CreateConfirmed from '../components/products/CreateConfirmed';
import { userContext } from '../context/UserProvider';
import Logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

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
            res.user.sendEmailVerification();
            const employees = organizationInfo.employees.split(",");
            await db.collection("organization").doc(res.user.uid)
                .set({
                    name: organizationInfo.name,
                    employees: employees
                });
                setIsModalShown(true)
        }catch(e){
                console.log(e);
        }  
    };

    return(
        <div className="h-full flex flex-col justify-center items-center">
            <div className={"hidden lg:block absolute top-2 left-4"}>
                <Link to={'/home'}>
                    <img src={Logo} alt={"logo"}/>
                </Link>
            </div>
            <div className={"lg:hidden -mb-2 mt-4"}>
                <img height={90} width={110} src={Logo} alt={"logo"}/>
            </div>
            <form className="m-3 max-w-xl p-6 bg-white rounded shadow-2xl">
                <p className="text-gray-800 text-2xl font-medium text-center">Organization information</p>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_name">Name of organization</label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="text" required="" placeholder="Enter name of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , name: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">Email of organization</label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="email" required="" placeholder="Enter email of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , email: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">Password for organization</label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full px-5 mt-1 py-1 text-gray-700 bg-gray-100 rounded" type="password" required="" placeholder="Enter password of Organization" aria-label="Name" onChange={e => setOrganizationInfo({...organizationInfo , password: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600" for="cus_email">{"Employee names *(Names should be seperated by comma { , })"}</label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full px-5 mt-1 py-4 text-gray-700 bg-gray-100 rounded" type="text" required="" placeholder="Enter names , you can also add employees later" aria-label="Email"  onChange={e => setOrganizationInfo({...organizationInfo , employees: e.target.value})}/>
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