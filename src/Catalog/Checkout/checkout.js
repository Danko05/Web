import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearAllItems } from "../../redux/actions";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().matches(/^[A-Za-z]+$/, 'Дозволено тільки букви').required("* обов'язкове поле"),
    lastName: Yup.string().matches(/^[A-Za-z]+$/, 'Дозволено тільки букви').required("* обов'язкове поле"),
    email: Yup.string()
        .email("Має бути @")
        .required("* обов'язкове поле")
        .matches(/@gmail\.com$/, 'Має бути @gmail.com'),
    phone: Yup.string()
        .matches(/^\d+$/, "Дозволено тільки цифри")
        .matches(/^\d{10}$/, 'Має бути рівно 10 цифр')
        .required("* обов'язкове поле"),
    address: Yup.string().required("* обов'язкове поле"),
});

const Checkout = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        // Реалізуйте логіку відправлення форми та перенаправлення на сторінку успіху тут
        console.log("Форма відправлена:", values);
        // Викликати екшен для очищення кошика
        dispatch(clearAllItems());
        // Перенаправлення на сторінку успіху
        navigate("/success");
    };

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className="Checkout">
                        <h1>Checkout</h1>
                        <div className="Named">
                            <div className="First_name_container">
                                <h2>First Name</h2>
                                <Field type="text" name="firstName" className="checkout_input" />
                                <ErrorMessage name="firstName" component="div" className="error-message" />
                            </div>
                            <div className="Last_name_container">
                                <h2>Last Name</h2>
                                <Field type="text" name="lastName" className="checkout_input" />
                                <ErrorMessage name="lastName" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="Email_photo">
                            <div className="Email_container">
                                <h2>Email</h2>
                                <Field type="text" name="email" className="checkout_input" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="Phone_container">
                                <h2>Phone</h2>
                                <Field type="text" name="phone" className="checkout_input" />
                                <ErrorMessage name="phone" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="Address_container">
                            <h2>Address</h2>
                            <Field type="text" name="address" className="input_addres" />
                            <ErrorMessage name="address" component="div" className="error-message" />
                        </div>
                        <div className="checkout_button">
                            <Link to="/catalog" className="Checkout_Go_back">
                                Go_back
                            </Link>
                            <button type="submit" className="Checkout_Continue">
                                Continue
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Checkout;
