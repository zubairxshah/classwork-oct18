"use client"
import { useState } from "react";
import React from "react";

function ChangeName() {
    const [name, setName] = useState("Saleem");
    const [age, setAge] = useState(20);
    const [isStudent, setIsStudent] = useState(false);

    const changeName = () => {
        setName("Aslam");
    }
    const changeAge = () => {
        setAge(40);
    }
    const changeIsStudent = () => {
        setIsStudent(!isStudent);
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User Info</h1>
                <div className="space-y-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Name: <span className="text-blue-600"/>{name}</h2>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Age: <span className="text-green-600"/>{age}</h2>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Is Student: <span className="text-purple-600"/>{isStudent ? "Yes" : "No"}</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <button 
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                        onClick={changeName}
                    >
                        Change Name
                    </button>
                    <button 
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" 
                        onClick={changeAge}
                    >
                        Change Age
                    </button>
                    <button 
                        className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" 
                        onClick={changeIsStudent}
                    >
                        Student Yes/No?
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangeName;
