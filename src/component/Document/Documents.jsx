import React, { useContext, useEffect } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import useUserFullName, { getFullName } from '../../../utils/useUserFullName';
import './Document.scss';
const Document = ({ data }) => {
    let userName = '';
    if (data.owner === 'me') {
        userName = useUserFullName().name;
    } else {
        // Ensure userName is a string
        userName = getFullName("Jim", "Kerry");
    }

    return (
        <div className="document">
            <div className='document_name_wrapper'>
                <UploadFileIcon className='document_icon' />
                <p className='document_name'>{data.name}</p>
            </div>
            <p className='document_author'>{userName}</p>
            <span className={`document_status ${data.status == 'processed' ? 'success' : ''}`}>{data.status}</span>
            <span className='document_date'>{data.date}</span>
            <span className='document_size'>{data.size}</span>
            <span className='document_comments'>{data.comments}</span>
        </div>
    )
}

export default Document;