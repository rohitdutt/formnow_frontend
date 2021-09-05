import { collection, where, query, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebase";
import firebase from "../firebase/firebase";
import axios from "axios";

const auth = firebase.auth();

export const getOrganizationByUserId = async (setOrganization, setShowSpinner) =>{
    try{
        const res = await db.collection("organization").doc(auth.currentUser.uid).get();
        setOrganization(res.data());
        setShowSpinner(false);
    }catch (e){
        console.log(e)
        return "error";
    }
}

export const getFormsByUserId = async (userId) =>{
    try{
        return await getDocs(query(collection(db, "forms"), where("organizationId", "==", userId)));
    }catch(e){
        return e;
    }
}

export const getFormFieldsByFormId = async (formId) =>{
    try{
        return await db.collection("forms").doc(formId).get();
    }catch(e){
        return e;
    }
}

export const getResponsesByFormId = async (formId) =>{
    try{
        return await getDocs(query(collection(db, "response"), where("formId", "==",formId)));
    }catch(e){
        return e;
    }
}

export const getDashboardData = async (formId) =>{
    try{
        const token = await firebase.auth().currentUser.getIdToken(true);
        const headers = {
            "Authorization": "Bearer " + token,
        }
        return await axios.post("https://formnow-dashboard.herokuapp.com/api/v1/get-dashboard-data", {
            formId: formId
        }, {headers: headers});
    }catch(e){
        return e;
    }        
}

export const fetchFormbyFormId = async (formId, setForm, setIsLoading, setJoke) => {
    try {
        const res = await db.collection('forms').doc(formId).get();
        setForm(res.data());
        if(res.data().description == "") {
            await fetchJoke(setJoke);
        }
        setIsLoading(false)
    }catch (e) {
        console.log(e)
    }
};


export const handleSubmitForm = async (e, setIsAlertOpen, response, alertRef, form, id, setIsModalShown) =>{
    e.preventDefault();
    setIsAlertOpen(false);
    if(response === undefined){
        setIsAlertOpen(true);
        alertRef.current.scrollIntoView();
        return;
    }else {
        for (let i = 0; i < form.formFields.length; i++) {
            if (form.formFields[i]['isRequired']) {
                if (!response.hasOwnProperty(form.formFields[i]['fieldName']) || response[form.formFields[i]['fieldName']] === "") {
                    setIsAlertOpen(true);
                    alertRef.current.scrollIntoView();
                    return;
                }
            }
        }
    }
    try {
        await db.collection("response")
            .add({
                formId: id,
                response: response,
                respondedAt: new Date().toString().split("GMT")[0]
            });
        setIsModalShown(true);
    }catch (e){
        setIsAlertOpen(true);
    }
};

const fetchJoke = async (setJoke) => {
    try {
        const res = await axios.get("https://api.chucknorris.io/jokes/random");
        setJoke(res.data.value)
    }catch (e){
        console.log(e)
    }
}

export const sendFeedback = async (setIsSending, setError, setIsSent, history, name, email, subject, message) =>{
    setIsSending(true);
    setError(false);
    if(name === "" || email === "" || subject === "" || message === ""){
        setError(true);
    }else{
        try {
            await addDoc(collection(db, "feedback"),{
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            setIsSent(true);
            setTimeout(()=>{
                history.push('/')
            },10000);
        }catch (e){
            console.log(e)
            history.push('/404-not-found')
        }
    }
    setIsSending(false)
}

export const handleSignUp = async (e, setIsCreating, setIsEmailAlreadyExist, setIsAccountCreated, setUser, history, email, password) => {
    setIsCreating(true);
    setIsEmailAlreadyExist(false)
    setIsAccountCreated(false);
    e.preventDefault();
    try{
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const newUser = res.user;
      setUser(newUser);
      await newUser.sendEmailVerification();
        setIsAccountCreated(true);
        setTimeout(()=>{
            history.push('/organization-home')
        },15000);
    }catch(e){
        setIsEmailAlreadyExist(true);
    }
    setIsCreating(false);
  }

export const handleCreateFormUser = async (e, setIsErrorInTitle, setIsErrorInEmployee, setIsAlertOpen, history, selected, formFields, title, alertRef, user, description) =>{
    e.preventDefault();
    setIsErrorInTitle(false);
    setIsErrorInEmployee(false);
    if(title == ""){
        setIsErrorInTitle(true);
        setIsAlertOpen(true);
        alertRef.current.scrollIntoView();
        return
    }else{
        for (let i=0; i<formFields.length;i++) {
            if (formFields[i]['fieldName'] == "") {
                setIsAlertOpen(true);
                alertRef.current.scrollIntoView();
                return
            }
        }
    }
    try{
        setIsErrorInEmployee(false);
        setIsErrorInTitle(false);
        console.log(description)
        const formRef = await db.collection("forms")
            .add({
                isActive: true,
                organizationId: user.uid,
                createdBy: selected,
                title: title,
                description: description,
                formFields: formFields,
                timeStamp: new Date().toString()
            });
        history.push(`/share-form/${formRef.id}`);
    }catch (e) {
        console.log(e)
    }
};

export const handleCreateFormOrg = async (e, setIsErrorInTitle, setIsErrorInEmployee, setIsAlertOpen, history, selected, formFields, title, alertRef, user, description) =>{
    e.preventDefault();
    setIsErrorInTitle(false);
    setIsErrorInEmployee(false);
    if(selected === "None"){
        setIsErrorInEmployee(true);
    }else if(title == ""){
        setIsErrorInTitle(true);
    }else{
        setIsErrorInEmployee(false);
        setIsErrorInTitle(false);
        const formRef = await db.collection("forms")
            .add({
                isActive: true,
                organizationId: user.uid,
                createdBy: selected,
                title: title,
                description: description,
                formFields: formFields,
                timeStamp: new Date().toString()
            });
        history.push(`/share-form/${formRef.id}`);
    }
};

export const sendMail = async (e, setIsSending, setIsSent, history, personName, formId) =>{
    e.preventDefault();
    setIsSending(true);
    const token = await auth.currentUser.getIdToken(true)
    console.log(await auth.currentUser.getIdToken(true))
    const headers = {
        "Authorization": "Bearer "+ token,
    }
    try{
    const res = await axios.post('https://jet-polished-need.glitch.me/share-form',{
        receiver: personName,
        form_url: `https://formsnow-40b50.web.app/form/${formId}`
    },{headers: headers});
    console.log(res)
    if(res.data == "sent"){
        setIsSending(false);
        setIsSent(true);
        setTimeout(()=>{
            history.push('/organization-home')
        },10000);
    }
    }catch(e){
        console.log(e)
    }
}

export const handleFormStatus = async (formId , isActive, setStatusChanged, statusChanged) =>{
    await db.collection("forms").doc(formId).update({
        "isActive": !isActive,
    })
    setStatusChanged(!statusChanged);
}

export const deleteFormById = async (formId) =>{
    try{
        await db.collection("forms").doc(formId).delete();        
    }catch(error){
        console.error("Error removing document: ", error);
    };
}