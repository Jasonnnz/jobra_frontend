import {useState} from 'react'
import {Menu} from 'semantic-ui-react'
import logo from '../images/jobra_logo.png'

function NavBar({history, handleLogOut}){
    const [activeItem, setActiveItem] = useState("")

    function handleJobraClick(e){        
        setActiveItem(e.target.innerText.toLowerCase())
        history.push('/main')
    }

    function handleProfileClick(e){        
        setActiveItem(e.target.innerText.toLowerCase())
        history.push('/profile')
    }

    function handleLogOutClick(e){        
        setActiveItem(e.target.innerText.toLowerCase())
        handleLogOut()
    }

    return(
        // <div className="header">
        //     <div className="jobra">
        //         <h1 onClick={()=> history.push('/main')}>Jobra</h1>
        //     </div>
        //     <div className="profile">
        //         <h1 onClick={()=> history.push('/profile')}>Profile</h1>
        //     </div>
        //     <div className="logout">
        //         <h1 onClick={()=> handleLogOut()}>Log Out</h1>
        //     </div>
        // </div>

        <Menu id="ui-header">
            <Menu.Item
            name='jobra'
            active={activeItem === 'jobra'}
            onClick={handleJobraClick}
            >
            Home
            </Menu.Item>
            <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleProfileClick}
            >
            Profile
            </Menu.Item>
            <img src={logo} className="jobra-logo" alt="Jobra Logo"/>
            <span className="slogan">"Keeping your career on track!"</span>
            <Menu.Menu className="logout-btn">
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleLogOutClick}
                >
                Log Out
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
}

export default NavBar;
