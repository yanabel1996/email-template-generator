import { useState } from "react";
import "./App.css";
import FormSignature from "./components/FormSignature/FormSignature";
import TemplateSignature from "./components/TemplateSignature/TemplateSignature";

import { Cloudinary } from "@cloudinary/url-gen";

function App() {
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  const [uploadPreset] = useState(
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  return (
    <div className="app">
      <FormSignature uwConfig={uwConfig} setPublicId={setPublicId} />
      <TemplateSignature />
    </div>
  );
}

export default App;
