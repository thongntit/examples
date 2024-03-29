import React, { useEffect, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import "./App.css";

const ffmpeg = createFFmpeg({
  log: true,
});

function App() {

  const [srcVideo, setsrcVideo] = useState();
  const [distVideo, setdistVideo] = useState("");
  const [message, setMessage] = useState("Loading ffmpeg-core.js");
  
  const doTranscode = async () => {
    setMessage("Start insert a watermark");
    ffmpeg.FS('writeFile', 'watermark.webp', await fetchFile('/watermark.webp'));
    ffmpeg.FS('writeFile', 'source.mp4', await fetchFile(srcVideo));
    await ffmpeg.run("-i", "source.mp4","-i", "watermark.webp", "-filter_complex", "overlay=10:10", "dist.mp4");
    setMessage("Complete transcoding");
    
    const data = ffmpeg.FS("readFile", "dist.mp4");
    setdistVideo(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
  };

  useEffect(() => {
    const load = async () => {
      await ffmpeg.load();
      setMessage("Click Start to transcode");
    }
    load()
  }, [])

  return (
    <div className="App">
      {!srcVideo && <p>Select source file</p>}
      <input type="file" onChange={(e) => setsrcVideo(e.target.files?.item(0))} />
      <br />
      {srcVideo && (
        <video controls src={URL.createObjectURL(srcVideo)}></video>
      )}
      <br />
      <button onClick={doTranscode}>Start</button>
      <p>{message}</p>

      {distVideo && <video src={distVideo} controls></video>}
      <br />
    </div>
  );
}

export default App;
