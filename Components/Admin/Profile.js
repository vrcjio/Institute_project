"use client"
const Profile = () => {

    if(sessionStorage.getItem("adminToken")){
        return(
            <>
                <h1>Admin Login Successfully</h1>
            </>
        )
    }else{
        return(
            <>
                <h1>Sorry Try Again.. :(</h1>
            </>
        )
    }
}

export default Profile