import React, { useState, useContext } from "react";
import { UserContext } from '../context/user/userContext';
import { UserDescription } from "./UserDescription";

const TableDescription = () => {

    const userContext = useContext(UserContext);
    const { users } = userContext;
    console.log(users)

    return (
        <table className="table-fixed w-full py-3 px-5 flex flex-col">
            <thead>
                <tr className="flex flex-row justify-center w-full ">
                    <th className={`w-44`}>ID</th>
                    <th className={`w-44`}>First</th>
                    <th className={`w-44`}>Last</th>
                    <th className={`w-44`}>Email</th>
                    <th className={`w-44`}>Location</th>
                    <th className={`w-44`}>Hobby</th>
                    <th className={`w-44`}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    (userContext == '')
                        ? ''
                        : (
                            users.map((user, index) => {
                                if (user) {
                                    console.log(user)
                                    return (
                                        <tr key={index} className="flex flex-row justify-center align-center w-full py-3 border-2 border-white border-b-slate-300 hover:bg-slate-200 hover:rounded-md transition ease-in-out duration-300">
                                            <UserDescription
                                                id={user.id}
                                                user={user}
                                            />
                                        </tr>
                                    )
                                } else {
                                    return ('')
                                }
                            })
                        )
                }
            </tbody>
        </table>
    );
};

/*
    if (user[i] !== ['']) {
        return (
            <tr key={i} className="flex flex-row justify-center align-center w-full py-3 border-2 border-white border-b-slate-300 hover:bg-slate-200 hover:rounded-md transition ease-in-out duration-300">
                <UserDescription id={user[i].id} user={user[i]} />
            </tr>)
    }
*/

export { TableDescription };
