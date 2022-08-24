import { useState } from "react";
import { saveReportData } from "../utils/db";
import { Report } from "./Report";

export default function Form() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const submitForm = async e => { 
    e.preventDefault();
    console.log('Form submitted', username);
    try {
      const response = 
        await fetch(`/api/analytics-twitter?username=${username}`);
      setData(await response.json());
    } catch (error) {
      alert('Something went wrong'); 
    }
  };

  const saveReport = async () => { 
    await saveReportData(data);
  }

  return (
    <>
<nav class="bg-gray-900">
  <div class="flex space-x-4">
    <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Twitter Analytics</a>

  <form onSubmit={submitForm}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <input type="search" id="default-search" placeholder="Search Twitter User" className="w-96 bg-gray-800 text-white" required onChange={event => setUsername(event.target.value)}></input>
        <button type="submit"  class="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-800 rounded">Search</button>
    </div>
</form>
</div>
</nav>
    <Report data={data}/>
    </>
  );
}