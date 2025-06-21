import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../../../Server/data/pdfData.json";
import TestData from "./TestData";

const DownloadBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    Data.map((book) => {
      if(book._id === id ) {
        <a href={book.pdfURL} download={book.name}>Download</a>
      }
        })
}, []);

  return (
    <div>
      <TestData />
    </div>
  )
};

export default DownloadBook;
