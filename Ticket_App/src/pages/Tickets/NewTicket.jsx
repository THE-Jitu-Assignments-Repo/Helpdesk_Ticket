import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Back from "../../components/backButton/Back";
import Spinner from "../../components/spinner/Spinner";
import { createTicket } from "../../features/Tickets/ticketActions";
import { reset } from "../../features/Tickets/ticketSlice";
import "./ticket.css";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.ticket
  );
  const [product, setProduct] = useState("Hp Laptop");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setErr(message);
    }
    if (isSuccess) {
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, reset, message]);
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await dispatch(createTicket({product,description}))
    dispatch(reset());
    navigate("/tickets");
  };
  if(isLoading){
    return <Spinner />
  }
  return (
    <>
      <section className="heading-tag">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form--ticket">
        <section className="form-group">
          <div className="form-form-ticket">
          {err ? (
            <span
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: '10px'
              }}
            >
              <FaWindowClose /> {err}
            </span>
          ) : (
            ""
          )}
            <label htmlFor="name">Customer Name</label>
            <input type="text" name="name" value={user?.name} disabled />
            <label htmlFor="email">Customer email</label>
            <input type="email" name="email" value={user?.email} disabled />
          </div>
          <form onSubmit={handleSubmit} className="form-form-ticket">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              value={product}
              onChange={(e) => {setProduct(e.target.value), setErr('')}}
            >
              <option value="Hp Laptop">Hp Laptop</option>
              <option value="Dell Laptop">Dell Laptop</option>
              <option value="Flash Drive">Flash Drive</option>
              <option value="Mac Book">Mac Book</option>
              <option value="Mouse">Mouse</option>
              <option value="Epison printer">Epison printer</option>
            </select>
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => {setDescription(e.target.value), setErr('')}}
            ></textarea>
            <button className="btn btn-block-T">Submit</button>
          </form>
        </section>
        <div className="back">
          <Back url={"/"} />
        </div>
      </section>
    </>
  );
}

export default NewTicket;
