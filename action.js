// import ActionTypes from '../constant/constant';
// const ActionTypes = {
//     USERNAME:'USERNAME'
// }
// ActionTypes.USERNAME

import history from '../../history';

import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA849HIWQSwh_HeomrCzL_t3td5zaZt_HM",
    authDomain: "chat-app-ff92d.firebaseapp.com",
    databaseURL: "https://chat-app-ff92d.firebaseio.com",
    projectId: "chat-app-ff92d",
    storageBucket: "",
    messagingSenderId: "327321098931"
  };
  firebase.initializeApp(config);



// export function changeUserName(){
//     return dispatch => dispatch({type: 'USERNAME', payload: 'Hanzala'})   
// }

export function createPortfolio(newport){
    return dispatch =>{ console.log(newport,"new")
    dispatch({type:"TYPEPORTFOLOIO",payload:newport})
} 
}


export function signupfun(user){
    return dispatch =>{
        console.log(user,"user")
       firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
       .then((createduser)=>{
           console.log(createduser,"createduser")
           delete user.password;
           user.uid=createduser.uid;
           firebase.database().ref("user/"+createduser.uid+"/").set(user)
           .then(()=>{
               firebase.database().ref("user/").once("value")
               .then((userData)=>{
                   let allUsers=userData.val();
                   let currentUserUid=firebase.auth().currentUser.uid;
                   dispatch({type:"ALLUSER" ,payload:allUsers})
                   dispatch({type:"CURRENTUSER" ,payload:currentUserUid})
                   firebase.database().ref("message/").once("value")
                   .then((messageData)=>{
                       let message=messageData.val();
                       console.log(message);
                       dispatch({type:"MESSAGE",payload:message})
                       history.push("/chat");
                       
                   })
               })
           })
       })
    }
}
export function loginfun(user){
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('user/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        console.log(allUsers,"allUsers");
                        let currentUserUid = firebase.auth().currentUser.uid;
                        console.log(currentUserUid,"currentUser");
                        let allUsersArr = [];
                        for(var key in allUsers){
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr,"allUsersArr");
                        dispatch({ type: "ALLUSERS", payload: allUsersArr })
                        dispatch({ type:"CURRENTUSER", payload: currentUserUid })
                        firebase.database().ref('message/').once('value')
                                //   let  obj={}
                                //   obj=snapshot.val();
                            
                                      .then((messagesData) => {
                                        let messages = messagesData.val();
                                        console.log(messages,"messages");
                           

                                dispatch({ type: "MESSAGES", payload: messages })
                                history.push('/chat');
                            })




                    })
            })
    }
}

export function sendMessage(message) {
    return dispatch => {
        firebase.database().ref('message/').push(message)
            .then(()=>{
                console.log('message sent')
            })

    }
}
export function changeRecipientUID(recpUID) {
    return dispatch => {
        dispatch({type: "CHANGERECPUID", payload:recpUID})
    }
}

export function chkfun(user) {
    return dispatch => {
            firebase.database().ref("/").child("chk/").push(user)
            .then((uid)=>{
                user.id=uid.key;
                console.log(uid.key,"uid")
            })
            .catch((error)=>{
                console.log(error,"error1")
            })
        
          firebase.database().ref("/").child("chk/").on("child_added", (snapshot) => {
            let data=[];  
            let obj = snapshot.val();
            obj.key = snapshot.key;
                  data.push(obj)
                
                //    let datsa=data.val();
                //      let array=[];
                //      array.push(datsa);   
                   dispatch({type: "CHKFUN", payload:obj})
                //    console.log(obj,"success")
            })
            // .catch((error)=>{console.log(error,"error2")}) 
    }
}
