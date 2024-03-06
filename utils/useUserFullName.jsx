import { useContext } from "react";
import { UserContext } from "../src/context/appContext";

const useUserFullName = () => {
    const userState = useContext(UserContext);

    return { name: getFullName(userState.firstName, userState.lastName) };
}

export const getFullName = (fName, lName) => {
    return `${lName} ${fName[0]}.`;
}

export default useUserFullName;
