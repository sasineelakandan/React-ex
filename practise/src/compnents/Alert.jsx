import React, { useState } from 'react';
import Login from '../compnents/Login'
function AlertPopup() {
  const [isVisible, setIsVisible] = useState(false);

  ;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Button to Show Alert */}
      <button
        onClick={showAlert}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Show Alert
      </button>

      {/* Alert Popup */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative shadow-lg">
            <button
              onClick={()=>{!isVisible}}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Alert</h2>
            <p className="text-gray-600">This is an alert message!</p>
          </div>
        </div>
        
      )}
    <Login setIsVisible={setIsVisible} />
    </div>
  );
}

export default AlertPopup;
