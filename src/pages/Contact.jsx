import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send("service_kjzzypc", "template_9w6laz5", values, "ELleXZTuaZN7-d7qg")
      .then(
        (response) => {
          console.log("Email sent!", response);
          setSubmitting(false);
          resetForm();
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          setSubmitting(false);
        }
      );
  };

  return (
    <div>
    <div className="max-w-md mx-auto  mt-5 px-4 sm:px-0">
      <h2 className="text-2xl text-indigo-800 font-semibold mb-4">
        Contact Us
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 mt-8"
              >
                Name*
              </label>
              <Field
                type="text"
                id="user_name"
                name="user_name"
                className="mt-1 pl-5 block w-full rounded-md border-gray-300 shadow-lg h-12  focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="user_name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block  mt-5 text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <Field
                type="email"
                id="user_email"
                name="user_email"
                className="mt-1 block w-full  pl-5 rounded-md border-gray-300  shadow-lg h-12 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
              />
              <ErrorMessage
                name="user_email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mt-5"
              >
                Message*
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full  pl-5 pt-5 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500  text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="text-indigo-800  font-medium text-base hover:bg-orange-400 border-2 border-red-100 hover:text-white px-3 py-2 rounded-md hover:font-bold w-full sm:w-auto"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
   
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
