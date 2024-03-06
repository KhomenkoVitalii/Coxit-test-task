import Header from "./component/Header/Header";
import HomePage from "./page/home/HomePage";
import './assets/styles/index.scss';
import { Outlet } from "react-router-dom";

const App = () => {
    return <>
        <Header />
        <Outlet />
        <footer></footer>
    </>
}

export default App;