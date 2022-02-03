function login(res){
    const {data} = res
    console.log(res)
    const userId = data.data._id
    const userName = data.data.userName

    localStorage.setItem("FuserID",userId)
    localStorage.setItem("FuserName",userName)
}

export default login