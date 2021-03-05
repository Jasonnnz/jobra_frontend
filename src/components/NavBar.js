function NavBar({history, handleLogOut}){
    return(
        <div className="header">
            <div className="jobra">
                <h1 onClick={()=> history.push('/main')}>Jobra</h1>
            </div>
            <div className="profile">
                <h1 onClick={()=> history.push('/profile')}>Profile</h1>
            </div>
            <div className="logout">
                <h1 onClick={()=> handleLogOut()}>Log Out</h1>
            </div>
        </div>
    );
}

export default NavBar;
