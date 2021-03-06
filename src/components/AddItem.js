import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddItem() {
  const [state, setstate] = useState({
    name: "",
    country: "",
    city: "",
    email: "",
  });

  const [validate, setvalidate] = useState({
    name: false,
    country: false,
    city: false,
    email: false,
  });

  const handleInput = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      setvalidate({
        ...validate,
        [e.target.name]: /^[a-zA-Z]{4,60}$/.test(e.target.value),
      });
    }
    if (e.target.name === "country" || e.target.name === "city") {
      setvalidate({
        ...validate,
        [e.target.name]: /^[a-zA-Z]{2,40}$/.test(e.target.value),
      });
    }
    if (e.target.name === "email") {
      setvalidate({
        ...validate,
        [e.target.name]: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(
          e.target.value
        ),
      });
    }
  };

  //console.log(state, validate);

  return (
    <div
      className="container row m-4"
      style={{
        fontSize: 18,
        color: "#686868",
      }}
    >
      <div id="page_title" className="col-2">
        <Link to={"/"} style={{ textAlign: "center" }}>
          <img
            src="logo.png"
            alt="logo"
            style={{ width: "149px", height: "63px" }}
          />
        </Link>
      </div>
      <div className="col-6">
        <div
          style={{
            color: "#484848",
            fontSize: "24px",
            fontWeight: "700",
            padding: "10px 40px",
          }}
        >
          <Link to={"/list"} style={{ textAlign: "center" }}>
            <span
              style={{ fontSize: "24px", fontWeight: "700", color: "#000" }}
            >
              <i className="fas fa-arrow-left"></i> Return to List Page
            </span>
          </Link>
        </div>
        <form style={{ fontSize: "18px", padding: "20px" }}>
          <div className="mb-3">
            <label for="input1" className={`form-label ${!validate.name && "error"}`}>
              Name Surname
            </label>
            <input
              onChange={handleInput}
              type="text"
              className={`form-control ${!validate.name && "error-input"}`}
              id="input1"
              name="name"
              placeholder="Enter name and surname"
              pattern="[A-Za-z]{4,60}"
              required
            />{
              !validate.name &&
              <div id="emailHelp" className="form-text" style={{ fontSize: "18px", color: "#FF0000" }}>Enter only letters, min 4 ??? max 60 character.</div>
            }
          </div>
          <div className="mb-3">
            <label for="input2" className={`form-label ${!validate.country && "error"}`}>
              Country
            </label>
            <input
              onChange={handleInput}
              type="text"
              className={`form-control ${!validate.country && "error-input"}`}
              id="input2"
              name="country"
              placeholder="Enter a country"
              pattern="[A-Za-z]{2,40}"
              required
            />{
              !validate.country &&
              <div id="emailHelp" className="form-text" style={{ fontSize: "18px", color: "#FF0000" }}>Enter only letters, min 2 ??? max 40 character.</div>
            }
          </div>
          <div className="mb-3">
            <label for="input" className={`form-label ${!validate.city && "error"}`}>
              City
            </label>
            <input
              onChange={handleInput}
              type="text"
              className={`form-control ${!validate.city && "error-input"}`}
              id="input3"
              name="city"
              placeholder="Enter a city"
              pattern="[A-Za-z]{2,40}"
              required
            />{
              !validate.city &&
              <div id="emailHelp" className="form-text" style={{ fontSize: "18px", color: "#FF0000" }}>Enter only letters, min 2 ??? max 40 character.</div>
            }
          </div>
          <div className="mb-3">
            <label for="input4" className={`form-label ${!validate.email && "error"}`}>
              Email
            </label>
            <input
              onChange={handleInput}
              type="email"
              className={`form-control ${!validate.email && "error-input"}`}
              id="input4"
              name="email"
              placeholder="Enter an e-mail (abc@xyz.com)"
              required
            />{
              !validate.email &&
              <div id="emailHelp" className="form-text" style={{ fontSize: "18px", color: "#FF0000" }}>Enter a valid e-mail.</div>
            }
          </div>
          <div className="col-auto" style={{ textAlign: "end" }}>
            <button
              style={{
                backgroundColor: "#204080",
                borderColor: "transparent",
                padding: "10px 40px",
                fontSize: "18px",
                fontWeight: "700",
              }}
              type="submit"
              className="btn btn-primary mb-3"
              disabled={
                !(
                  validate.name &&
                  validate.country &&
                  validate.city &&
                  validate.email
                )
              }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
