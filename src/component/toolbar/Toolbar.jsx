import SearchBar from "../searchBar/SearchBar";
import './Toolbar.scss';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <SearchBar />
            <button className="toolbar_add_btn">
                <UploadFileIcon />
                <span className="toolbar_add_btn_label">Upload files</span>
            </button>
        </div>
    )
}

export default Toolbar;