import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import * as API from "../api";

const devEnv = process.env.NODE_ENV !== "production";
const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const Home = () => {
  const [files, setFiles] = useState([]);

  const handleDelete = async (id) => {
    await API.deleteFileById(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.getFiles();
        let temp = [];
        Object.entries(res.data.files).forEach(([key, val]) => {
          temp.push({
            src: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}image/${
              val.filename
            }`,
            isImage: val.isImage,
            id: val._id,
          });
        });
        setFiles(temp);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [files]);
  return (
    <div className="container">
      {files.length > 0 ? (
        files.map((file, index) => (
          <div className="card card-body mb-3" key={index}>
            {file.isImage ? (
              <img src={file.src} alt="something" />
            ) : (
              <div>Not an image</div>
            )}
            <input
              type="submit"
              className="btn btn-danger mt-2 btn-block"
              value="Delete"
              onClick={() => handleDelete(file.id)}
            ></input>
          </div>
        ))
      ) : (
        <div>No files to show!</div>
      )}
    </div>
  );
};

export default Home;
