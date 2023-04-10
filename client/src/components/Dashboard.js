import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState([]);

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
        {content.map((item, index) => (
          <div key={index} style={{marginBottom: 20}}>
            <div>Customer ID: {item.CId}</div>
            <div>Loan ID: {item.LoanID}</div>
            <div>Date of Disbursment: {item.DoDsbsnt}</div>
            <div>Outstanding Amount: {item.OutsAmount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardUser;