import { storage } from './slices/routeSlice';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';

function Addimage() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
  
    // Handle file selection
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile)); // Create preview URL
      }
    };
  
    // Handle file upload (Simulated)
    const handleUpload = () => {
      if (!file) {
        alert("Please select a file first!");
        return;
      }

      const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              console.error("Upload failed:", error);
            //  setUploading(false);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log("URL: ", url)
              //  setDownloadURL(url);
             //   setUploading(false);
              //  alert("File uploaded successfully!");
              });
            }
          );
      console.log("Uploading file:", file);
     
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upload File</h2>
  
        <div className="bg-white p-6 shadow-lg rounded-lg w-80 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
          />
  
          {preview && (
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm mb-2">Preview:</h3>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-40 object-cover border border-gray-300 rounded-md shadow-md"
              />
            </div>
          )}
  
          <button
            onClick={handleUpload}
            className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Upload
          </button>
        </div>
      </div>
    );
}

export default Addimage