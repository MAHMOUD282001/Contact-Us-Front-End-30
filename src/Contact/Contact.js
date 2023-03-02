import React from "react";
import "./Contact.css";
import img from "../imgs/1.svg";
import { Form, FormGroup } from 'reactstrap';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required("Name is a Required Field"),
    email: yup.string().required("Email is a Required Field").email(),
    description: yup.string().required("Description is a Required Field"),
    
  })
  .required();

function Contact() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmit = (data) => {
        toast.success("Your Message Sent Successfully")
    }
  
  return (
    <div className="contact">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <img src={img} alt={"Contact Us Img"} />
          </div>

          <div className="col-lg-6">
            <h2>Contact Us</h2>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className="form__group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                />
              </FormGroup>
              
              <p className="mt-2 text-danger">{errors.name?.message}</p>

              <FormGroup className="form__group">
                <span>Email</span>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Your Email"
                />
              </FormGroup>
              
              <p className="mt-2 text-danger">{errors.email?.message}</p>
              
              <FormGroup className="form__group">
                <span>Description</span>
                <textarea
                   {...register("description")}
                  placeholder="Description"
                />
              </FormGroup>
              
              <p className="mt-2 text-danger">{errors.description?.message}</p>
              
              <button className="btn btn-primary">Send Message</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
