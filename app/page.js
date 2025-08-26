"use client"
import { useState } from "react";


export default function Home() {

const [form, setform] = useState({name:'',email:'',password:''})

const handledetails = (e) => {
  const { name, value } = e.target;
  setform(prev => ({...prev, [name]: value}));
};

const handleSubmit = (e) => {
  e.preventDefault()

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name":form.name,
  "email": form.email,
  "password": form.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/api/submit", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
    alert('Data Saved Successfully')
    setform({name:'',email:'',password:''})
})
  .catch(error => console.log('error', error));
  
  
};

  return (
    <>
    <div className="flex justify-center items-center bg-pink-300 min-h-screen  m-auto">
      <div className="w-full max-w-md m-auto bg-pink-600 p-6 rounded-2xl mx-2">
        <h1 className="text-center text-3xl font-bold">Form Handler</h1>
        <form onSubmit={handleSubmit}  className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold text-xl">Name :</label>
            <input type="text" value={form.name} onChange={handledetails}  className="outline-none  bg-pink-300 rounded-xl p-3" name="name" placeholder="Enter name"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-xl">Email :</label>
            <input type="email"value={form.email}  onChange={handledetails} className="outline-none  bg-pink-300 rounded-xl p-3"name="email" placeholder="Enter Email"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold text-xl">Password :</label>
            <input type="password" value={form.password} onChange={handledetails} className="outline-none  bg-pink-300 rounded-xl p-3" name="password" placeholder="Enter Password"/>
          </div>
          <input  type="submit" name="" id="" className="p-3 bg-pink-500 rounded-xl text-white hover:scale-105 hover:bg-pink-800 transition-all" />
        </form>
      </div>

    </div>
    </>
    
  )
}
