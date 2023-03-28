import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAction = ({ action, bgColor, icon, handle }) => {

    return (
        <button
            className={`px-5 py-1 rounded-md text-white font-bold ${bgColor}`}
            onClick={handle}>
            <FontAwesomeIcon className="mr-1" icon={icon} />
            {action}
        </button>
    );
};

export { BtnAction };
