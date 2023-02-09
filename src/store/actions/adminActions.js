import actionTypes from './actionTypes';
import {getAllCodeService, createNewUserService, getAllUsers,deleteUserService,editUserService,getTopDoctorHomeService
    ,getAllDoctors,saveDetailDoctorService, getAllSpecialty, getAllClinic} from "../../services/userService";
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart =  () => {
    return async(dispatch, getState) =>{
        try{
            dispatch({type:actionTypes.FETCH_GENDER_START})

            let res = await getAllCodeService("GENDER")
            if(res && res.errCode ===0){
               dispatch(fetchGenderSuccess(res.data))
            } else{
                dispatch(fetchGenderFailed()) 
            }
        } catch(e){
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart err',e)
        }

    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data:positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data:roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionStart =  () => {
    return async(dispatch, getState) =>{
        try{
            let res = await getAllCodeService("POSITION")
            if(res && res.errCode ===0){
               dispatch(fetchPositionSuccess(res.data))
            } else{
                dispatch(fetchPositionFailed()) 
            }
        } catch(e){
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed err',e)
        }

    }
}

export const fetchRoleStart =  () => {
    return async(dispatch, getState) =>{
        try{
            let res = await getAllCodeService("ROLE")
            if(res && res.errCode ===0){
               dispatch(fetchRoleSuccess(res.data))
            } else{
                dispatch(fetchRoleFailed()) 
            }
        } catch(e){
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed err',e)
        }

    }
}

export const createNewUser = (data) =>{
    return async(dispatch, getState) =>{
        try{
            let res = await createNewUserService(data) ;
            if(res && res.errCode ===0){
                toast.success("Create a new user success!")
               dispatch(saveUserSuccess())
               dispatch(fetchAllUserStart())
            } else{
                dispatch(saveUserFailed()) 
            }
        } catch(e){
            dispatch(saveUserFailed());
            console.log('saveUserFailed',e)
        }

    }
}

export const saveUserSuccess = () =>({
    type:actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () =>({
    type:actionTypes.CREATE_USER_FAILED
})


export const fetchAllUserStart =  () => {
    return async(dispatch, getState) =>{
        try{
            let res = await getAllUsers("ALL")

            if(res && res.errCode ===0){               
               dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else{
                toast.error("Fetch all the user err!")
                dispatch(fetchALlUsersFailed()) 
            }
        } catch(e){
            toast.error("Fetch all the user err!")
            dispatch(fetchALlUsersFailed());
            console.log('fetchALlUsersFailed err',e)
        }

    }
}

export const fetchAllUsersSuccess =(data) =>({
    type:actionTypes.FETCH_ALL_USERS_SUCCESS,
    users:data,
})

export const fetchALlUsersFailed =() =>({
    type:actionTypes.FETCH_ALL_USERS_FAILED,
   
})


export const deleteAUser = (userId) =>{
    return async(dispatch, getState) =>{
        try{
            let res = await deleteUserService(userId) ;
            if(res && res.errCode ===0){
                toast.success("Delete the user success!")
               dispatch(deleteUserSuccess())
               dispatch(fetchAllUserStart())
            } else{
                toast.error("Delete the user err!")
                dispatch(deleteUserFailed()) 
            }
        } catch(e){        
            toast.error("Delete the user err!")
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed err',e)
        }

    }
}

export const deleteUserSuccess=() =>({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed=() =>({
    type:actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) =>{
    return async(dispatch, getState) =>{
        try{
            let res = await editUserService(data) ;
            if(res && res.errCode ===0){
                toast.success("Update the user success!")
               dispatch(editUserSuccess())
               dispatch(fetchAllUserStart())
            } else{
                toast.error("Update the user err!")
                dispatch(editUserFailed()) 
            }
        } catch(e){        
            toast.error("Update the user err!")
            dispatch(editUserFailed());
            console.log('EditUserFailed err',e)
        }

    }
}

export const editUserSuccess =() =>({
    type:actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed =() =>({
    type:actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () =>{
    return async(dispatch, getState) =>{
        try{
           let res = await getTopDoctorHomeService('')
           if(res && res.errCode ===0){
            dispatch({
                type:actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                dataDoctors: res.data
            })
           } else{
            dispatch({
                type:actionTypes.FETCH_TOP_DOCTOR_FAILED,
            })
           }
        } catch(e){   
            console.log('FETCH_TOP_DOCTOR_FAILED', e)     
            dispatch({
                type:actionTypes.FETCH_TOP_DOCTOR_FAILED,
            })
        }

    }
}

export const fetchAllDoctors = () =>{
    return async(dispatch, getState) =>{
        try{
           let res = await getAllDoctors()
           if(res && res.errCode ===0){
            dispatch({
                type:actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                dataDr: res.data
            })
           } else{
            dispatch({
                type:actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
           }
        } catch(e){   
            console.log('FETCH_ALL_DOCTORS_FAILED', e)     
            dispatch({
                type:actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
        }

    }
}


export const saveDetailDoctor = (data) =>{
    return async(dispatch, getState) =>{
        try{
           let res = await saveDetailDoctorService(data)
           if(res && res.errCode ===0){
            toast.success("Save info detail doctor success")
            dispatch({
                type:actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
            })
           } else{
            console.log("err" ,res)
            toast.error("Save info detail doctor error")
            dispatch({
                type:actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
           }
        } catch(e){   
            toast.error("Save info detail doctor error")
            console.log('SAVE_DETAIL_DOCTOR_FAILED', e)     
            dispatch({
                type:actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }

    }
}


export const fetchAllScheduleTime = () =>{
    return async(dispatch, getState) =>{
        try{
           let res = await getAllCodeService("TIME")
           if(res && res.errCode ===0){
            dispatch({
                type:actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                dataTime: res.data
            })
           } else{
            dispatch({
                type:actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            })
           }
        } catch(e){   
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED', e)     
            dispatch({
                type:actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            })
        }

    }
}

export const getRequiredDoctorInfo =  () => {
    return async(dispatch, getState) =>{
        try{
            dispatch({type:actionTypes.FETCH_REQUIRED_DOCTOR_INFO_START})

            let resPrice = await getAllCodeService("PRICE")
            let resPayment = await getAllCodeService("PAYMENT")
            let resProvince = await getAllCodeService("PROVINCE")
            let resSpecialty = await getAllSpecialty()
            let resClinic = await getAllClinic()

            console.log(resPayment)
            if(resPrice && resPrice.errCode ===0
                && resPayment && resPayment.errCode ===0
                && resProvince && resProvince.errCode ===0
                && resSpecialty && resSpecialty.info.errCode===0
                && resClinic && resClinic.errCode===0
                ){
                    let data ={
                        resPrice:resPrice.data,
                        resPayment:resPayment.data,
                        resProvince:resProvince.data,
                        resSpecialty:resSpecialty.info.data,
                        resClinic:resClinic.data
                    }
               dispatch(fetchRequiredDoctorInfoSuccess(data))
            } else{
                dispatch(fetchRequiredDoctorInfoFailed()) 
            }
        } catch(e){
            dispatch(fetchRequiredDoctorInfoFailed());
            console.log('fetchRequiredDoctorInfoFailed err',e)
        }

    }
}

export const fetchRequiredDoctorInfoSuccess = (allRequireData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFO_SUCCESS,
    data:allRequireData
})

export const fetchRequiredDoctorInfoFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFO_FAILED
})


//start doing end


// let res1=await getTopDoctorHomeService(3);