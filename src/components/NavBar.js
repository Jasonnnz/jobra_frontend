function NavBar({history}){
    return(
        <div className="header">
            <div className="jobra">
                <h1>Jobra</h1>
            </div>
            <div className="profile">
                <h1 onClick={()=> history.push('/profile')}>Profile</h1>
            </div>
        </div>
    );
}

export default NavBar;
