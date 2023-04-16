import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';

const QuestPage = () => {
    const quests = [
        {
            organizer: 'John Smith',
            location: 'Central Park',
            date: 'April 20, 2023',
            time: '12:00 PM',
        },
        {
            organizer: 'Jane Doe',
            location: 'Empire State Building',
            date: 'May 1, 2023',
            time: '2:00 PM',
        },
        {
            organizer: 'Bob Johnson',
            location: 'Times Square',
            date: 'June 10, 2023',
            time: '7:00 PM',
        },
    ];

    return (
        <div className="bg-purple-800 text-black min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-white text-[50px] font-bold mb-10">Quests</h2>
            <ul className="w-1/2">
                {quests.map((quest, index) => (
                    <li className="bg-white p-4 rounded-lg ease-in-out duration-300 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <FaUserCircle className="text-3xl text-purple-800" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <p className="text-lg font-semibold">{quest.organizer}</p>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <MdLocationOn className="mr-2" />
                                    <p>{quest.location}</p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <AiOutlineCalendar className="mr-2" />
                                    <p>{quest.date}</p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <AiOutlineClockCircle className="mr-2" />
                                    <p>{quest.time}</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-purple-800 text-white px-4 py-2 rounded-lg">
                            Join Quest
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default QuestPage;
