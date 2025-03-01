'use client'
import axios from "axios";
import { useState } from "react";

export default function Home() {

    const [user, setUser] = useState({
        sisterName: "",
        date: "",
        shift: ""
    });

    const handleClick = async () => {
        try {
            const respose = await axios.post("/api/user/new", user);
            console.log(respose.data);
        } catch (error) {
            console.log(error);
        }
    }

  const getDaysArray = function(start, end) {
    const arr = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt).getDate() + " " + months[new Date(dt).getMonth()] + " " + new Date(dt).getFullYear());
    }
    return arr;
};
const dateArray = getDaysArray(new Date(2025, 0, 1), new Date(2025, 11, 31));

const names = ["Sister 1", "Sister 2", "Sister 3", "Sister 4", "Sister 5", "Sister 6", "Sister 7", "Sister 8", "Sister 9", "Sister 10"];

const shifts = ["Morning", "Evening", "OT", "LR", "ER"];

const demandsArr = [
    {
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Susmia bhattarchaya",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },{
        name: "Sister 1",
        demands: [
          {
            date: "1 Jan 2025",
            shift: "OT"
          },
          {
            date: "2 Jan 2025",
            shift: "M"
          },
          {
            date: "4 Jan 2025",
            shift: "E"
          },
          {
            date: "5 Jan 2025",
            shift: "OT"
          }
        ]
      },
  {
    name: "Sister 1",
    demands: [
      {
        date: "1 Jan 2025",
        shift: "OT"
      },
      {
        date: "2 Jan 2025",
        shift: "M"
      },
      {
        date: "4 Jan 2025",
        shift: "E"
      },
      {
        date: "5 Jan 2025",
        shift: "OT"
      }
    ]
  },
  {
    name: "Sister 2",
    demands: [
      {
        date: "3 Jan 2025",
        shift: "OT"
      },
      {
        date: "4 Jan 2025",
        shift: "LR"
      },
      {
        date: "6 Jan 2025",
        shift: "ER"
      },
      {
        date: "8 Jan 2025",
        shift: "OT"
      }
    ]
  }
];

  return (
    <> 
    <h1 className="fixed flex mt-3 w-full justify-center
     text-center text-orange-500 font-bold sm:lg md:xl lg:text-2xl">USGH NURSING SISTER DEMAND BOOK</h1>

    
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10 fixed justify-center w-full z-30">
  {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
  <select onChange={(e) => setUser({...user, name:e.target.value})} name='sisterName' id="sisterName" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    {names.map((name, index) => (
        <option key={index} value={name}>{name}</option>
    ))}    
  </select>
  <select onChange={(e) => setUser({...user, email:e.target.value})} name='date' id="date" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    {dateArray.map((date, index) => (
        <option key={index} value={date}>{date}</option>
    ))}    
  </select>
  <select onChange={(e) => setUser({...user, password:e.target.value})} name='shift' id="shift" className="m-1 md:m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    {shifts.map((shift, index) => (
        <option key={index} value={shift}>{shift}</option>
    ))}    
  </select>
  <button onClick={handleClick} className="m-1 md:m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Place Demand</button>
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
          {demandsArr.map((demandData, index) => (
             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
             <th scope="row" className="px-2 py-2 sticky left-0 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {demandData.name}
             </th>
             {dateArray.map((date, index) => (
                <td key={index} className="px-2 py-2 border-r">
                {demandData.demands.find(demand => demand.date === date) ? demandData.demands.find(demand => demand.date === date).shift : ""}
            </td>
             ))}        

             
            
         </tr>
          ))}         

           
           
        </tbody>
    </table>
</div>
    </>
  );
}
