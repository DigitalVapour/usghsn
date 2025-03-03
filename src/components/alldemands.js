'use client';

import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function AllDemands() {

    const [sisters, setSisters] = useState([])
    const [selectedSister, setSelectedSister] = useState([{}])
    const [responseData, setResponseData] = useState()
   
    const foundUsers = async () => {
        try {
            const respose = await axios.get("/api/user/new");
            setSisters(respose.data)
        } catch (error) {
            console.log(error);
        }
     }
     const handleChange = async (e) => {
        if(e.target.value == ""){
            return
        }
       const response = await axios.get(`/api/user/demand?name=${e.target.value}`);
       setSelectedSister(response.data)       
     }

     const hadleApprove = async (data) => {
        const response = await axios.put("/api/user/demand", {demandId: data})
        toast.success(response.data.message)
        const newDem = response.data.newData
        setSelectedSister(selectedSister.map(obj => (obj._id === newDem._id ? newDem : obj)))
     }

     const handleDelete = async (data) => {
        console.log(data)
        const response = await axios.delete(`/api/user/demand?id=${data}`)
        toast(response.data.message)
        const deletedId = response.data.deletedData._id
        setSelectedSister(selectedSister.filter(el => el._id !== deletedId ))
     }

    useEffect(() => {
        foundUsers();     
    }, []); 

    return(
        <>    

<div className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="">Choose a staff nurse</option>
    {sisters.map(sister => (
        <option key={sister._id} value={sister.name}>{sister.name}</option>
    ))}
  </select>
</div>


{selectedSister[0].name && 
    <div className="relative mt-4 overflow-x-auto">
    <table className="w-full md:mx-2 text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Demand
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {selectedSister.map(demand => (
                <tr key={demand._id || 1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {demand.date}
                </th>
                <td className="px-6 py-4">
                    {demand.demand}
                </td>
                <td className="px-6 py-4">
                    {demand.approved ? <span className="text-green-500 dark:text-green-400">Approved</span> : <span className="text-gray-600 dark:text-gray-400">Pending</span>} 
                </td>
                <td className="px-6 py-4">
                    <button onClick={hadleApprove.bind(null, demand._id)} className="mx-2 p-1 bg-green-700 text-white hover:bg-green-600 text-xs rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>


                    </button>
                    <button onClick={handleDelete.bind(null, demand._id)} className="p-1 mx-2 bg-red-700 text-white hover:bg-red-600 text-xs rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                    </svg>


                    </button>
                </td>
            </tr>
            ))}           
            
        </tbody>
    </table>
</div>
}

<Toaster position="top-right" />

        </>
    )
}