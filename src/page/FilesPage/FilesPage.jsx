import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import Toolbar from '../../component/toolbar/Toolbar';
import DocsList from "../../component/DocsList/DocsList";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/appContext";
import { searchFile } from '../../service/appData';
import './FilesPage.scss';

const FilesPage = () => {
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const userState = useContext(UserContext);

    useEffect(() => {
        // if url doesn't contain page number
        // add it
        if (!searchParams.has('page')) {
            searchParams.append('page', 1);
            setSearchParams(searchParams)
        }
    }, [searchParams]);

    useMemo(() => {
        const fetchFiles = async () => {
            const result = await searchFile(userState.token, searchParams);
            if (result.status === 'ok') {
                setData(result.data);
            }
        };

        fetchFiles();
    }, [userState.token, searchParams]);

    return (
        <main className="main">
            <div className="main_head">
                <div className="main_general">
                    <span>All files<span className="main_general_count">{data?.totalRecords}</span></span>
                </div>
                <Toolbar />
            </div>
            {data && data.records ? <DocsList data={data} /> : null}
        </main>
    )
}

export default FilesPage;