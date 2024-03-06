import { Link } from "react-router-dom";

const Tab = ({ data, icon, currentTabName }) => {
    return (
        <Link to={data.urlName} id={data.id} className={`header_tab ${data.id} ${data.urlName === currentTabName ? 'active' : ''}`}>
            {icon}
            <span className="header_tab_label">{data.name}</span>
        </Link>
    );
};

export default Tab;
