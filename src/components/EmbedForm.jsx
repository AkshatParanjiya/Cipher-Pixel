// src/components/EmbedForm.jsx
import { useState } from 'react';

function EmbedForm() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEmbed = () => {
    // Placeholder logic (actual encoding will be handled later)
    if (image && message) {
      setOutput(URL.createObjectURL(image)); // mock output image
      alert('Message embedded successfully (mock)!');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      <textarea
        className="w-full p-3 rounded border mb-4"
        rows="4"
        placeholder="Enter your secret message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleEmbed}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Embed Message
      </button>

      {output && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Mock embedded image:</p>
          <img src={output} alt="Embedded Result" className="max-w-full rounded" />
        </div>
      )}
    </div>
  );
}

export default EmbedForm;
