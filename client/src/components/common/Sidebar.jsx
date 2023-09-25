import React from 'react'

export const Sidebar = () => {
    return (
        <>
            <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <div class="mx-4 px-5 py-4">
                        <a href="#" title="home">
                            <span className='text-3xl font-bold text-dark dark:text-white'>
                                EduSmart
                            </span>
                        </a>
                    </div>
                </div>
            </aside >
        </>
    )
}
