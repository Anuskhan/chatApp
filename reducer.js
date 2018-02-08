// import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'Anas Khan',
    currentUser:"",
    users: [],
    messages: {},
    recipientID: '',
    initailState:[],
    // seen:false,
    // time:""

    // portfolios: [{ userName: "Anas khan", profession: "student", apprence: "look like shk" }
    //     , { userName: "Ahmed", profession: "teacher", apprence: "look like salman" }
    // ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USERNAME":
            return ({
                ...state,
                userName: action.payload,

            })
        case "CHKFUN":
            return ({
                ...state,
                initailState: action.payload,

            })
            case "CURRENTUSER":
            return ({
                ...state,
                currentUser: action.payload
            })   
        case "ALLUSERS":
            return ({
                ...state,
                users: action.payload   
            }) 
        case" LOGIN":
            return ({
                ...state,
                messages: action.payload,
              
            }) 
        case "TYPEPORTFOLOIO":
            return ({
                ...state,
                portfolios: action.payload,

            })
        case "SIGNUP":
        return({
            ...state,

        })
        case "CHANGERECPUID":
        return ({
            ...state,
            recipientID: action.payload
        })
    case "MESSAGES":
        return ({
            ...state,
            messages:action.payload
        })
        default:
            return state;
    }

}