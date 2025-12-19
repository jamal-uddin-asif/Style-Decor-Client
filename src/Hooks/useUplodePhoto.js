import axios from "axios"

export const useUplodePhoto =async (PhotoFile) =>{

       const formData = new FormData()
        formData.append('image', PhotoFile)

        try{
            const res = await  axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API_KEY}`, formData)
            // console.log(res)
            return res.data.data.url
        }
        catch(error){
            console.log(error)
        }
}