import axios from "axios";

const AxiosInst= axios.create({
    baseURL:'https://api.themoviedb.org/3'
    ,
    // headers:{
    //     api_key:'bb4ed966bd00971dd82c0869585d045a'

    // }
    // ,
    params:{
     api_key:'bb4ed966bd00971dd82c0869585d045a'
    }
})

// AxiosInst.interceptors.request.use((config)=>{

//     console.log('cp,dfgdf',config)
//     if(config.url=="/movie/popular"){
//         config.headers.auth="wwwwwwwwwwwwwwwwwww"
//     }
//     return config
// })

// AxiosInst.interceptors.response.use((config)=>{

//     console.log('resgdf',config)
//     if(config.url=="/movie/popular"){
//         config.headers.auth="wwwwwwwwwwwwwwwwwww"
//     }
//     return config
// })
export default AxiosInst