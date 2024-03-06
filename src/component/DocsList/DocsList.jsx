import Document from "../Document/Documents";
import './DocsList.scss';

const DocsList = ({ data }) => {
    return (
        <div className="documents">
            <div className="document columns">
                <span className="document_column_name">Name</span>
                <span className="document_column"></span>
                <span className="document_column_status">Status</span>
                <span className="document_column_date">Date</span>
                <span className="document_column_size">Size</span>
                <span className="document_column_comment">Comment</span>
            </div>
            {data && data.records && data.records.map((item, key) => (
                <Document key={key} data={item} />
            ))}
        </div>
    );
};

export default DocsList;