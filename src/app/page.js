'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

    const [users, setUsers] = useState([]);
    const [demands, setDemands] = useState([]);
    const [resData, setResData] = useState({});
    const [loading, setLoading] = useState(false);
    const [newDemand, setNewDemand] = useState({
        name: "",
        date: "",
        demand: ""
    });

    const handleClick = async () => {
      setLoading(true);
        try {
            const respose = await axios.post("/api/demand", newDemand);
            setResData(respose.data);
            toast.success(respose.data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        setLoading(false);
    }

    const foundUsers = async () => {
      try {
          const respose = await axios.get("/api/user/new");
          setUsers(respose.data)
      } catch (error) {
          console.log(error);
      }
   }

   const findDemands = async () => {
    try {
        const respose = await axios.get("/api/demand");
        setDemands(respose.data)
    } catch (error) {
        console.log(error);
    }
 }

    useEffect(() => {
        foundUsers();     
    }, []);

    useEffect(() => {
        findDemands();     
    }
    , [resData]);

    console.log(resData);

  const getDaysArray = function(start, end) {
    const arr = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt).getDate() + " " + months[new Date(dt).getMonth()] + " " + new Date(dt).getFullYear());
    }
    return arr;
};
const dateArray = getDaysArray(new Date(2025, 0, 1), new Date(2025, 11, 31));

const shifts = ["Morning", "Evening", "OT", "LR", "ER"];



  return (
    <> 
    <h1 className="fixed flex mt-3 w-full justify-center
     text-center text-orange-500 font-bold sm:lg md:xl lg:text-2xl">USGH NURSING SISTER DEMAND BOOK</h1>

    
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10 fixed justify-center w-full z-30">  
  <select onChange={(e) => setNewDemand({...newDemand, name:e.target.value})} name='sisterName' id="sisterName" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    {users.map((user, index) => (
        <option key={index} value={user.name}>{user.name}</option>
    ))}    
  </select>
  <select onChange={(e) => setNewDemand({...newDemand, date:e.target.value})} name='date' id="date" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    {dateArray.map((date, index) => (
        <option key={index} value={date}>{date}</option>
    ))}    
  </select>
  <select onChange={(e) => setNewDemand({...newDemand, demand:e.target.value})} name='shift' id="shift" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    {shifts.map((shift, index) => (
        <option key={index} value={shift}>{shift}</option>
    ))}    
  </select>
{loading ? <button disabled type="button" className="m-1 md:m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button> : <button onClick={handleClick} className="m-1 md:m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Place Demand</button>}
  
</div>

    <div className="absolute w-screen md:w-screen md:-mx-2 h-5/6 md:h-4/5 mt-40 md:mt-32 sm:rounded-lg overflow-auto">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 dark:text-gray-400">    
            <tr>
              <th scope="col" className="px-2 py-3 sticky left-0 top-0 z-10 min-w-20 bg-gray-50 dark:bg-gray-800">Name / Date</th>
              {dateArray.map((date, index) => (
                <th key={index} scope="col" className="px-1 py-3 sticky top-0 min-w-14 bg-gray-50 dark:bg-gray-800">
                {date.substring(0, 6)}
            </th>
              ))}              
               
            </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
             <th scope="row" className="px-2 py-2 sticky left-0 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {user.name}
             </th>
             {dateArray.map((date, index) => (
                <td key={index} className="px-2 py-2 border-r dark:border-gray-700">
                {demands.filter((demand) => demand.name === user.name).find(dem => dem.date === date) ? demands.filter((demand) => demand.name === user.name).find(dem => dem.date === date).approved ? <span className="text-green-500 dark:text-green-400">{demands.filter((demand) => demand.name === user.name).find(dem => dem.date === date).demand}</span> : <span className="text-gray-600 dark:text-gray-400">{demands.filter((demand) => demand.name === user.name).find(dem => dem.date === date).demand}</span> : ""}
            </td>
             ))}   
                        
         </tr>
          ))}         
           
        </tbody>
    </table>
</div>
<Toaster position="top-right" />
      
    </>
  );
}
