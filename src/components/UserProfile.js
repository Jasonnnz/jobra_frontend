function UserProfile({currentUser}){
    return (
        <div>
            <div className="current-user-info">
                <h1>{currentUser.name}</h1>
                <h2>{currentUser.email}</h2>
            </div>
            <div className="current-user-charts">
                Charts
            </div>
        </div>
    );
}

export default UserProfile;