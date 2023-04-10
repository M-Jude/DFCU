import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import Table from './DataTable'

const BoardUser = () => {
  const [content, setContent] = useState([]);
  const [noContent, setNoContent] = useState("NO LOAN FOUND");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {

        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>LOAN STATUS</h3>
      </header>
      <div>
        <Table/>
      </div>
    </div>
  );
};

export default BoardUser;