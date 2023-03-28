import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { BtnAction } from "./BtnAction";
import { TableDescription } from "./TableDescription";

const Container = () => {

    const createNavigate = useNavigate();

    const handleCreate = () => {
        createNavigate('/create')
    };

    return (
        <>
            <header className="flex justify-between mx-12">
                <h1 className="text-3xl font-bold uppercase">CRUD <FontAwesomeIcon icon={faReact} /> React App</h1>
                <div className="mx-10">
                    <BtnAction
                        handle={handleCreate}
                        action={"Create"}
                        bgColor={"bg-green-400"}
                        icon={faUserPlus}
                    />
                </div>
            </header>
            <main className="my-3">
                <TableDescription />

            </main>
        </>
    )
}

export { Container }