import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faCirclePlus, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../context/user/userContext';
import { InputGeneral } from "./InputGeneral";
import { BtnAction } from "./BtnAction";

export const InputUser = () => {

    const { users, addUser, updateUser } = useContext(UserContext);
    const back = useNavigate();
    const params = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        const userFound = users.find(user => user.id === params.id);
        console.log(userFound)
        
        if (params.id) {
            setUser(userFound);
            console.log(user)
        }

    }, [params.id, users])

    const handleBack = () => {
        back('/');
    };

    const handleUserInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.id) { 
            updateUser(user); 
            console.log(user.id);
            console.log(user);
        } else {
            addUser(user);
        }

        handleBack()
    };

    return (
        <form onSubmit={handleSubmit} className="w-2/3 border-slate-300 border-2 rounded-lg p-3 m-auto">
            <InputGeneral value={user.first} handleChange={handleUserInput} type={'text'} description={'first name'} name={'first'} />
            <InputGeneral value={user.last} handleChange={handleUserInput} type={'text'} description={'last name'} name={'last'} />
            <InputGeneral value={user.email} handleChange={handleUserInput} type={'mail'} description={'email'} name={'email'} />
            <InputGeneral value={user.location} handleChange={handleUserInput} type={'text'} description={'location'} name={'location'} />
            <InputGeneral value={user.hobby} handleChange={handleUserInput} type={'text'} description={'hobby'} name={'hobby'} />
            <div className="pt-3 flex flex-row justify-center">
                <div className="mx-2">
                    <BtnAction action={user.id ? 'Editing User' : 'Create User'} bgColor={'bg-blue-400'} icon={faCirclePlus} />
                </div>
                <div className="mx-2">
                    <BtnAction bgColor={'bg-red-400'} icon={faChevronLeft} action={'Back'} handle={handleBack}/>
                </div>
            </div>
        </form>
    )
};

//export { InputUser };
