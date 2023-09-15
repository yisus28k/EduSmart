import React from 'react';
import SidebarContent from "./sidebarcontent";

function Sidebar() {

    return (
        <>
            <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r border-gray-700 bg-gray-900 px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
                <SidebarContent />
            </aside >
        </>
    );
}

export default Sidebar;
