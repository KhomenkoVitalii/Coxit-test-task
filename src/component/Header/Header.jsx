import { useState } from "react";
import './Header.scss';
import { useParams } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import CableIcon from '@mui/icons-material/Cable';
import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';
import AppRoutes from '../../router/AppRoutes';
import Tab from './Tab/Tab';
import useUserFullName from "../../../utils/useUserFullName";

export const tab_dictionary = Object.freeze({
    'logo': { 'name': 'EXAMPLE', 'id': 'home', 'urlName': '' },
    'first': { 'name': 'All files', 'id': 'docs_tab', 'urlName': 'docs' },
    'second': { 'name': 'Configuration', 'id': 'conf_tab', 'urlName': 'conf' },
    'third': { 'name': 'Team members', 'id': 'team_tab', 'urlName': 'team' }
});

const Header = () => {
    const { tabName } = useParams();
    const { name } = useUserFullName();
    const [navOpened, setNavOpened] = useState(false);
    const toggleNav = () => setNavOpened(!navOpened);

    return (
        <header className={`header ${navOpened ? 'nav-opened' : ''}`}>
            <div className="header_container">
                <MenuIcon className="header_opener" onClick={toggleNav} />
                <div className="header_tabs">
                    <Tab data={tab_dictionary.logo} currentTabName={null} />
                    <nav className={`header_nav ${navOpened ? 'opened' : ''}`} onClick={toggleNav}>
                        <Tab data={tab_dictionary.first} icon={<AssignmentIcon className="header_tab_img" />} currentTabName={tabName} />
                        <Tab data={tab_dictionary.second} icon={<CableIcon className="header_tab_img" />} currentTabName={tabName} />
                        <Tab data={tab_dictionary.third} icon={<GroupIcon className="header_tab_img" />} currentTabName={tabName} />
                    </nav>
                </div>
                <div className="header_user">
                    <span className="header_username">{name}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
