"use client";

import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
import PageTitle from "../../components/PageTitle";
import { useRef, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const Contact = () => {
  const context = useContext(LanguageContext);

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submitHandler = (event: any) => {
    event.preventDefault();

    // const enteredName = nameInputRef.current.value;
    // const enteredSurname = surnameInputRef.current.value;
    // const enteredEmail = emailInputRef.current.value;
    // const enteredMessage = messageInputRef.current.value;

    // const messageData = {
    //   name: enteredName,
    //   surname: enteredSurname,
    //   email: enteredEmail,
    //   message: enteredMessage,
    // };

    // console.log(messageData);
  };

  return (
    <PageWrapper>
      <PageTitle>
        {context.siteLanguage === "en" ? "Contact" : "Kontakt"}
      </PageTitle>
      <TextWrapper>
        <h1 className="text-xl pb-3">Dew Drones</h1>
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
          <form onSubmit={submitHandler}>
            <div className="flex">
              <div className="w-1/2 mr-10">
                <label className="mb-2 block font-bold" htmlFor="name">
                  {context.siteLanguage === "en" ? "name:" : "imię:"}
                  {/* name: */}
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none"
                  type="text"
                  required
                  id="name"
                  // ref={nameInputRef}
                ></input>
              </div>
              <div className="w-1/2">
                <label className="mb-2  block font-bold" htmlFor="surname">
                  {context.siteLanguage === "en" ? "surname:" : "nazwisko:"}
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight  text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none"
                  type="text"
                  required
                  id="surname"
                  // ref={surnameInputRef}
                ></input>
              </div>
            </div>
            <div>
              <label className="mb-2 block font-bold " htmlFor="email">
                email:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight  text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none"
                type="email"
                required
                id="email"
                // ref={emailInputRef}
              ></input>
            </div>
            <div>
              <label className="mb-2 block font-bold" htmlFor="message">
                {context.siteLanguage === "en" ? "message:" : "wiadomość:"}
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight  text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none"
                defaultValue=""
                required
                id="message"
                // ref={messageInputRef}
              ></textarea>
            </div>
            <button className="w-full border-3 border-black py-2 shadow-sm  text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 font-bold">
              {context.siteLanguage === "en" ? "Send" : "Wyślij"}
            </button>
          </form>
        </div>
      </TextWrapper>
    </PageWrapper>
  );
};
export default Contact;
