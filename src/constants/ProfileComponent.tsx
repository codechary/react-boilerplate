import {useState} from "react";
import {TextComponent} from "../library/Texts/TextComponent.tsx";

export const ProfileComponent = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div onClick={toggleMenu} className="top-0 right-0 fixed z-10 w-12 h-12 bg-white border shadow-md rounded-full cursor-pointer flex items-center justify-center m-4">
            P
            {isOpen && (
                <div className="absolute top-14 text-12px right-0 w-48 bg-white border shadow-md rounded-md p-2">
                    <p className="text-sm text-gray-700 flex justify-between items-center  px-2 py-1">
                        <TextComponent
                            size="small"
                            title="Profile Settings"
                            color="#000"
                        />
                        <div className="w-6 h-6 rounded-full bg-red-100 border border-red-200 flex items-center justify-center" onClick={toggleMenu}>
                            <TextComponent
                                size="small"
                                title="-"
                                color="rgb(255 148 148)"
                            />
                        </div>
                    </p>
                    <ul className="mt-2">
                        <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                            <TextComponent
                                size="small"
                                title="Settings"
                                color="#000"
                            />
                        </li>
                        <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                            <TextComponent
                                size="small"
                                title="Logout"
                                color="#000"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
