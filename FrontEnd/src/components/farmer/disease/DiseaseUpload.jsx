import { useState } from "react";

export default function DiseaseUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="disease-upload-card">

      <div className="disease-section-header">
        <div>
          <h2>Scan your crop</h2>
          <p>
            Upload a clear image of the affected crop leaf.
          </p>
        </div>
      </div>

      <label className="disease-upload-area">

        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected crop"
            className="disease-image-preview"
          />
        ) : (
          <>
            <div className="disease-upload-icon">
              📷
            </div>

            <h3>Upload crop image</h3>

            <p>
              Click to browse or drag and drop an image here
            </p>

            <span>
              JPG, JPEG or PNG
            </span>
          </>
        )}

        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageChange}
          hidden
        />

      </label>

      <button
        type="button"
        className="disease-scan-btn"
        disabled={!selectedImage}
      >
        🔍 Scan Crop
      </button>

    </div>
  );
}