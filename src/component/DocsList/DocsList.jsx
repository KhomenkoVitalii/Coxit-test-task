import Document from "../Document/Documents";
import './DocsList.scss';

const DocsList = ({ data }) => {
    return (
        <div className="documents">
            <div className="documents_header"></div>
            {data && data.records && data.records.map((item, key) => (
                <Document key={key} data={item} />
            ))}
        </div>
    );
};

export default DocsList;