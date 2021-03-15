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
        <Menu borderless id="ui-header">
            <img src={logo} className="jobra-logo" alt="Jobra Logo" style={{height: "38px", width: "38px"}}/>
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
            <Menu.Menu className="logout-btn" position="right">
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
