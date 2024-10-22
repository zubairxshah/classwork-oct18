"use client"

import React from "react";
import { useEffect, useState } from "react";

function CheckEffect() {
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs(prevLogs => [message, ...prevLogs].slice(0, 8));
    };

    useEffect(() => {
        console.log("Component Mounted");
        addLog("Component Mounted")
    },[]);
    useEffect(() => {
        console.log("Component Incremented");
        addLog("Component Incremented")
    }, [increment]);
    useEffect(() => {
        console.log("Component Decremented");
        addLog("Component Decremented")
    }, [decrement]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">CheckEffect</h1>
                    
                    <div className="flex justify-around mb-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Increment: {increment}</h2>
                            <button 
                                onClick={() => setIncrement(increment + 1)}
                                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Increment
                            </button>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Decrement: {decrement}</h2>
                            <button 
                                onClick={() => setDecrement(decrement - 1)}
                                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Decrement
                            </button>
                        </div>
                    </div>

                    <hr className="my-8 border-t border-gray-300" />

                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-600">useEffect Logger:</h3>
                        <p className="mb-4 text-gray-600 italic">The logger displays the same effects as triggered on console.</p>
                        <ul className="space-y-2 bg-white p-4 rounded-md shadow">
                            {logs.map((log, index) => (
                                <li key={index} className="text-sm text-gray-700 border-b border-gray-200 last:border-b-0 py-2">
                                    {log}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckEffect;
