import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnAction } from "./BtnAction";
import { UserContext } from "../context/user/userContext";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

const UserDescription = ({ id, user }) => {

    const { deleteUser } = useContext(UserContext)

    const editRoute = useNavigate();

    return (
        <>
            <td className="w-44 flex justify-center items-center">{id}</td>
            <td className="w-44 flex justify-center items-center">{user.first}</td>
            <td className="w-44 flex justify-center items-center">{user.last}</td>
            <td className="w-44 flex justify-center items-center">{user.email}</td>
            <td className="w-44 flex justify-center items-center">{user.location}</td>
            <td className="w-44 flex justify-center items-center">{user.hobby}</td>
            <td className="flex flex-row justify-center items-center w-44">
                <div className="mr-1">
                    <BtnAction action={""} bgColor={"bg-yellow-400"} icon={faPenToSquare} handle={() => editRoute(`edit/${id}`)}/>
                </div>
                <div className="mr-2">
                    <BtnAction action={""} bgColor={"bg-red-400"} icon={faTrash} handle={() => deleteUser(id)}/>
                </div>
            </td>
        </>
    );
};

export { UserDescription };
