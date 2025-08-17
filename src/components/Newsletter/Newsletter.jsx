import React, {useState} from 'react'
import { Send } from "lucide-react";
import {db} from '../../conf/conf'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "subscribers"), {
        email: email,
        timestamp: new Date(),
      });
      // alert("Thanks for subscribing!");
      setEmail("");
      navigate("/thankyou")
    } catch (error) {
      console.error("Error adding email:", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        placeholder="E-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 rounded-l-md w-full text-white border-1 border-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-md flex items-center justify-center disabled:opacity-50"
      >
        <Send className="w-4 h-4 text-white" />
      </button>
    </form>
  );
}

export default Newsletter