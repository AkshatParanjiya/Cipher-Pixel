// src/components/ExtractForm.jsx
import { useState } from 'react';

function ExtractForm() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleExtract = () => {
    if (image) {
      // Mock output
      setMessage('This is a mock decoded message.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      <button
        onClick={handleExtract}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
      >
        Extract Message
      </button>
      {message && (
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700 font-medium">Decoded Message:</p>
          <p className="text-blue-700 mt-2">{message}</p>
        </div>
      )}
    </div>
  );
}

export default ExtractForm;
