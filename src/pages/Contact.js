import { useFormik } from "formik";
import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { createdContact } from "../features/contact/contactSlice";
const SignupSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("'Invalid email address'")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  comment: yup.string().required("Message is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(createdContact(values));
      formik.resetForm();
      setTimeout(() => {
        toast.success(" Successfullly!");
      }, 3000);
    },
  });
  return (
    <>
      <Meta title="Contact - Digitic" />
      <BrandCrumb title="Contact" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29189.42216232012!2d89.98364113062225!3d23.86557347639493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f603f1698647%3A0x894c2f1900643eb6!2sManikganj!5e0!3m2!1sen!2sbd!4v1687427197696!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper">
              <div className="row ">
                <div className="col-6 px-4">
                  <h3 className="contact-title">Contact</h3>
                  <form className="mt-4" onSubmit={formik.handleSubmit}>
                    <div className="form-floating mb-3">
                      <CustomInput
                        type="text"
                        classname="bg-light"
                        placeholder="Name"
                        id="name"
                        name="name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <p className="text-danger">{formik.errors.name}</p>
                    ) : null}
                    <div className="form-floating mb-3">
                      <CustomInput
                        type="email"
                        classname="bg-light"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                      <label htmlFor="floatingInput">Email</label>
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-danger">{formik.errors.email}</p>
                    ) : null}
                    <div className="form-floating mb-3">
                      <CustomInput
                        type="tel"
                        classname="bg-light"
                        id="mobile"
                        placeholder="Number"
                        name="mobile"
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                        value={formik.values.mobile}
                      />
                      <label htmlFor="floatingInput">Phone number</label>
                    </div>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <p className="text-danger">{formik.errors.mobile}</p>
                    ) : null}
                    <div className="form-floating mb-3">
                      <textarea
                        rows="20"
                        className="form-control bg-light"
                        id="comment"
                        placeholder="Comment"
                        style={{ height: "100px" }}
                        name="comment"
                        onChange={formik.handleChange("comment")}
                        onBlur={formik.handleBlur("comment")}
                        value={formik.values.comment}
                      />
                      <label htmlFor="floatingInput">Comment</label>
                    </div>
                    {formik.touched.comment && formik.errors.comment ? (
                      <p className="text-danger">{formik.errors.comment}</p>
                    ) : null}
                    <button type="submit" className="button border-0">
                      Send
                    </button>
                  </form>
                </div>
                <div className="col-6 px-4">
                  <h3 className="contact-title">Get in touch with us</h3>
                  <ul className="ps-0 mt-4">
                    <li className="mb-4 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        33 New Montgomery St. Ste 750 San Francisco, CA, USA
                        94105
                      </address>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+123456789">+123456789</a>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </li>
                    <li className="mb-4 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
