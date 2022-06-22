import React, { useState } from "react";
import * as API from "../api";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await API.uploadFile(formData);
    setFile("");
    setIsFilePicked(false);
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h1 className="my-4">Upload your files here</h1>
            <form action="/upload" method="post" encType="multipart/form-data">
              <div className="mb-3">
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="form-control"
                  onChange={changeHandler}
                />
                {isFilePicked ? (
                  <div>
                    <p>Filename: {file.name}</p>
                    <p>Filetype: {file.type}</p>
                    <p>Size in bytes: {file.size}</p>
                    <p>
                      lastModifiedDate:{" "}
                      {file.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
