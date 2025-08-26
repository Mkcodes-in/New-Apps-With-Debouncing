import React, { useEffect, useState } from 'react'
import NavItems from '../components/NavItems'
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import '../App.css'
import { FetchNews } from '../api/NewsApi';
export default function Header({ setArticle }) {
    const [theme, setTheme] = useState(false);
    const [menu, setMenu] = useState(false);
    const [text, setText] = useState(NavItems[0]);

    function handleMenu() {
        setMenu(!menu);
    }

    function handleTheme() {
        setTheme(!theme);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setText("");
    }

    useEffect(() => {
        const reqAPI = async () => {
            const data = await FetchNews(text);
            setArticle(data);
        }
        reqAPI();
    }, [text]);

    return (
        <div className={`fixed w-full ${theme ? "bg-gray-900 text-white" : "bg-white"} z-10 shadow-md`}>
            <div className={`myfont max-w-7xl m-auto py-4 transition-all duration-300`}>
                <div className='flex items-center justify-between px-6'>
                    <div className='text-2xl bg-gradient-to-l from-green-400 to-orange-600 bg-clip-text text-transparent font-bold'>NewsIndia</div>
                    <div className='hidden lg:flex items-center gap-4 font-light group'>
                        {NavItems.map(item => (
                            <div className={`cursor-pointer ${text === item ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
                            onClick={() => setText(item)}
                            key={item}>
                                <Link to={`${item.toLowerCase()}`}>{item}</Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-4'>
                        <form
                            onSubmit={(e) => handleSubmit(e)}>
                            <input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className='py-1 px-2 rounded focus:ring-2 ring-orange-400 border-2 border-gray-300 focus:border-transparent outline-none transition-all ease-in duration-300 w-[100px] sm:w-auto'
                                placeholder='Search news...'
                                type="text" />
                        </form>
                        <button
                            className={`hidden sm:block p-2 rounded-full cursor-pointer ${theme ? "text-white bg-indigo-800" : "bg-yellow-400 text-yellow-700"}`}
                            onClick={handleTheme}>
                            {theme ? (<Moon size={18} />) : (<Sun size={18} />)}
                        </button>
                    </div>

                    {/* mobile Navbar */}
                    <button onClick={handleMenu} className='relative lg:hidden w-6 h-6 cursor-pointer'>
                        <span className={`absolute top-0 transition-all ease-in-out duration-300 left-0 bg-black h-0.5 w-6 ${theme ? "bg-white" : ""} ${menu ? "rotate-45 translate-y-2" : ""} rounded`}></span>
                        <span className={`absolute top-2 transition-all ease-in-out duration-300 left-0 bg-black h-0.5 w-5 ${theme ? "bg-white" : ""} ${menu ? "rotate-0 opacity-0" : ""} rounded`}></span>
                        <span className={`absolute top-4 transition-all ease-in-out duration-300 left-0 bg-black h-0.5 w-4 ${theme ? "bg-white" : ""} ${menu ? "-rotate-45 -translate-y-2 w-6" : ""} rounded`}></span>
                    </button>
                </div>
            </div>

            {/* NavLink for moblie */}
            {menu && (
                <div className='flex flex-col py-2 group'>
                    {NavItems.map(item => (
                        <Link
                            key={item}
                            to={`${item.toLowerCase()}`}
                            onClick={() => setMenu(false)}
                            className='px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200'
                        >
                            {item}
                        </Link>
                    ))}
                    <div className='flex items-center justify-center p-2'>
                        <button
                            className={`sm:hidden inline p-2 rounded-full cursor-pointer ${theme ? "text-white bg-indigo-800" : "bg-yellow-400 text-yellow-700"}`}
                            onClick={handleTheme}>
                            {theme ? (<Moon size={18} />) : (<Sun size={18} />)}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
