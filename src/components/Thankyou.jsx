import React from "react";

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600"> Thank You!</h1>
      <p className="text-lg text-gray-600">
        You’ve successfully subscribed to our BuVerse.
      </p>
    </div>
  );
}

export default ThankYou;