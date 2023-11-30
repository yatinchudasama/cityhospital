import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";

export const signupAPI = (data) => {
    console.log(data);
    try {
        return new Promise(function (resolve, reject) {
            createUserWithEmailAndPassword(auth, data.email, data.con_phone)
                .then((userCredential) => {

                    const user = userCredential.user;

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ massege: "Email alreday verification" })
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            reject({message: errorMessage})
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                        reject({message : "Email already use"})
                    } else if (errorCode.localeCompare("auth/weak-password") === 0) {
                        reject({message : "paddddwdwdwdwd"})
                    }
                });
        })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return errorCode
    }
}