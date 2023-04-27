"use client";

import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";

interface ContactFormValues {
  name: string;
  surname: string;
  email: string;
  message: string;
}

const onSubmit = () => {
  console.log("submitted");
};

const normalInput =
  "focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none";
const errorInput =
  "focus:shadow-outline w-full appearance-none border border-red-500 py-2 px-3 leading-tight text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none";

const Contact = () => {
  const context = useContext(LanguageContext);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<ContactFormValues>({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit: onSubmit,
    });

  return (
    <PageWrapper>
      <PageTitle>
        {context.siteLanguage === "en" ? "Contact" : "Kontakt"}
      </PageTitle>
      <TextWrapper>
        <h1 className="text-xl pb-3">Dew FPV</h1>
        <p className="pb-10">
          {context.siteLanguage === "en"
            ? "We're excited to collaborate with you and make your ideas a reality. Contact us via phone, email, or our online form to discuss your project. We are ready to provide customized solutions that meet your needs and exceed your expectations."
            : "Jesteśmy zainteresowani współpracą z Tobą i realizacją Twoich pomysłów. Skontaktuj się z nami telefonicznie, mailowo lub za pomocą naszego formularza online, aby omówić swoje projekty. Jesteśmy gotowi dostarczyć spersonalizowane rozwiązania, które spełnią Twoje potrzeby i przekroczą Twoje oczekiwania"}
        </p>
        <address className="pb-10">
          <a href="mailto:maciejrosa1@gmail.com" className="not-italic">
            maciejrosa1@gmail.com
          </a>
          <br />
          <br />
          <a href="tel:+48695227141" className="not-italic">
            +48 695 227 141
          </a>
        </address>
        <div className="border p-4">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="flex">
              <div className="w-1/2 mr-10">
                <label className="mb-2 block font-bold" htmlFor="name">
                  {context.siteLanguage === "en" ? "name:" : "imię i nazwisko:"}
                </label>
                <input
                  className={
                    errors.name && touched.name ? errorInput : normalInput
                  }
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
                {errors.name && touched.name && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="mb-2  block font-bold" htmlFor="surname">
                  {context.siteLanguage === "en" ? "surname:" : "nazwisko:"}
                </label>
                <input
                  className={
                    errors.surname && touched.surname ? errorInput : normalInput
                  }
                  id="surname"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your surname"
                />
                {errors.surname && touched.surname && (
                  <p className="text-sm text-red-500">{errors.surname}</p>
                )}
              </div>
            </div>
            <div>
              <label className="mb-2 block font-bold " htmlFor="email">
                email:
              </label>
              <input
                className={
                  errors.email && touched.email ? errorInput : normalInput
                }
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
              />{" "}
              {errors.email && touched.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block font-bold" htmlFor="message">
                {context.siteLanguage === "en" ? "message:" : "wiadomość:"}
              </label>
              <textarea
                className={
                  errors.message && touched.message ? errorInput : normalInput
                }
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=""
              />{" "}
              {errors.message && touched.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full border-3 border-black py-2 shadow-sm  text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 font-bold"
            >
              {context.siteLanguage === "en" ? "Send" : "Wyślij"}
            </button>
          </form>
        </div>
      </TextWrapper>
    </PageWrapper>
  );
};
export default Contact;
