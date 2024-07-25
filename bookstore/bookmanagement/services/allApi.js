import { commonApi } from "./commonUrl"
import { serverUrl } from "./serverUrl"


//add book
export const AddBookApi = async(requestBody)=>{
   return await commonApi('POST',`${serverUrl}/addbook`,requestBody)
}

//login
export const loginApi = async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//get book
export const getbookApi = async()=>{
   return await commonApi('GET',`${serverUrl}/getbook`,"")
}