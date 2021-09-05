import firebase from "firebase/compat/app";

export const handleSignout = async () =>{
    await firebase.auth().signOut();
}

export const userLogin = async (event , email , password) =>{
    event.preventDefault();
    try{
        return await firebase.auth().signInWithEmailAndPassword( email , password);
    }catch(e){
        console.log(e)
        return "error"
    }
};

export const userForgetPassword = async (email) =>{
    try {
        return await firebase.auth().sendPasswordResetEmail(email);
    }catch (e) {
        return e;
    }
}