import React, { useState } from "react";
import { Upload, ImagePlus, Trash2, Save } from "lucide-react";
import axios from "axios";

export default function ChangeBackgroundImage() {
  const presets = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  ];

  const [bgImage, setBgImage] = useState(presets[0]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const uploadBackground = async () => {
    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("background", selectedFile);

    try {
      const res = await axios.post(
        "http://localhost:3000/admin/changeBackground",
        formData,
      );

      alert("Background Updated Successfully");
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
      alert("Upload Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Preview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className="h-80 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Live Preview</h2>
            <p className="text-gray-500 text-sm">
              This is how your background will appear.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Upload */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="bg-white rounded-xl shadow p-6 border-2 border-dashed border-gray-300 text-center"
          >
            <ImagePlus size={40} className="mx-auto text-gray-400 mb-3" />

            <h3 className="font-semibold mb-2">Upload Background Image</h3>

            <p className="text-gray-500 text-sm mb-4">
              Drag & drop image or upload
            </p>

            <label className="cursor-pointer bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition inline-flex items-center gap-2">
              <Upload size={16} />
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Presets */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">Choose Preset Background</h3>

            <div className="grid grid-cols-4 gap-3">
              {presets.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setBgImage(img)}
                  className="h-20 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setBgImage(presets[0])}
              className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              <Trash2 size={16} />
              Reset
            </button>

            <button
              onClick={uploadBackground}
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <Save size={16} />
              Save to Server
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
