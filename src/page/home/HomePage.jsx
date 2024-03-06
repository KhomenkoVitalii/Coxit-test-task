import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tab_dictionary } from "../../component/Header/Header";
import FilesPage from '../FilesPage/FilesPage';
import ErrorPage from '../Error/ErrorPage';

const HomePage = () => {
    const { tabName } = useParams()
    const navigate = useNavigate()

    if (tabName == tab_dictionary.first.urlName) {
        return <FilesPage />;
    } else if (tabName == tab_dictionary.second.urlName) {
        return <ErrorPage name={'Not implemented!'} message={'This page is not ready for now!'} />;
    } else if (tabName == tab_dictionary.third.urlName) {
        return <ErrorPage name={'Not implemented!'} message={'This page is not ready for now!'} />;
    } else {
        return <ErrorPage name={'Not implemented!'} message={'This page is not ready for now!'} />;
    }
}


export default HomePage;