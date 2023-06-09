import TextWrapper from "../../components/layout/TextWrapper";
import Head from "next/head";
import Socials from "../../components/Socials";
// import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendContactForm } from "../../lib/api";

const contactSchema = (lang: string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(() => {
        return lang === "en"
          ? "Please enter a valid email"
          : "Wprowadź prawidłowy email";
      })
      .required(() => {
        return lang === "en" ? "Required" : "Wymagane";
      }),
    name: yup.string().required(() => {
      return lang === "en" ? "Required" : "Wymagane";
    }),
    message: yup.string().required(() => {
      return lang === "en" ? "Required" : "Wymagane";
    }),
  });

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const onSubmit = async (values: any, actions: any) => {
  try {
    await sendContactForm(values);
  } catch (error) {
    console.log("error");

    return error;
  }

  console.log("click");
  // const
  actions.resetForm();
};

const normalInput =
  "focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none";
const errorInput =
  "focus:shadow-outline w-full appearance-none border border-red-500 py-2 px-3 leading-tight text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 shadow focus:outline-none";

const Contact = () => {
  const context = useContext(LanguageContext);
  const schema = contactSchema(context.siteLanguage);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content={
            context.siteLanguage === "en"
              ? "Hire us or ask questions to find out if you want to cooperate with us"
              : "Zatrudnij nas albo wyślij zapytanie o wycenę swojego projektu"
          }
        />
      </Head>

      <TextWrapper>
        <div className="">
          <h1 className="text-xl pb-3">Dew FPV</h1>
          <p className="pb-10">
            {context.siteLanguage === "en"
              ? "We're excited to collaborate with you and make your ideas a reality. Contact us via phone, email, or our online form to discuss your project. We are ready to provide customized solutions that meet your needs and exceed your expectations."
              : "Jesteśmy zainteresowani współpracą z Tobą i realizacją Twoich pomysłów. Skontaktuj się z nami telefonicznie, mailowo lub za pomocą naszego formularza online, aby omówić swoje projekty. Jesteśmy gotowi dostarczyć spersonalizowane rozwiązania, które spełnią Twoje potrzeby i przekroczą Twoje oczekiwania"}
          </p>
          <address className="mb-8">
            <a
              href="mailto:maciejrosa1@gmail.com"
              className="not-italic mb-5 transition-all duration-200 hover:font-bold"
            >
              maciejrosa1@gmail.com
            </a>
            <br />
            <br />
            <a
              href="tel:+48695227141"
              className="not-italic transition-all duration-200 hover:font-bold "
            >
              +48 695 227 141
            </a>
            <br />
            <div className="mt-6">
              <Socials />
            </div>
          </address>
        </div>
        <div className="border border-1 border-gray-900 dark:border-gray-50 p-4 w-full md:w-3/5 lg:w-2/3 xl:w-3/5 md:m-auto">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="">
              <label className="mb-2 block " htmlFor="name">
                {context.siteLanguage === "en" ? "name:" : "imię i nazwisko:"}
              </label>
              <input
                className={
                  errors.name && touched.name ? errorInput : normalInput
                }
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={
                  context.siteLanguage === "en"
                    ? "Enter your name"
                    : "Wprowadź swoje imię i nazwisko"
                }
                type="text"
                id="name"
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <label className="mb-2 block  " htmlFor="email">
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
              placeholder={
                context.siteLanguage === "en"
                  ? "Enter your email"
                  : "Wprowadź swój email"
              }
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
            <label className="mb-2 block" htmlFor="message">
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
              placeholder={
                context.siteLanguage === "en"
                  ? "Enter your message here"
                  : "Tu wprowadź swoją wiadomość"
              }
            />
            {errors.message && touched.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-3 border border-gray-900 dark:border-gray-50 py-2 shadow-sm  text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 disabled:opacity-30 dark:active:bg-opacity-0 dark:active:text-gray-50 dark:active:border dark:active:border-gray-50 active:bg-opacity-0 active:text-gray-900 active:border active:border-gray-900 duration-200"
              // className="w-full border-3 border border-gray-900 dark:border-gray-50 py-2 shadow-sm  text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50  disabled:opacity-30 dark:active:bg-gray-900 dark:active:text-gray-50 dark:active:border dark:active:border-gray-50 active:bg-gray-50 active:text-gray-900 active:border active:border-gray-900 duration-200"
            >
              {!isSubmitting
                ? context.siteLanguage === "en"
                  ? "Send"
                  : "Wyślij"
                : context.siteLanguage === "en"
                ? "Sending"
                : "Wysyłam"}
            </button>
          </form>
        </div>
      </TextWrapper>
    </>
  );
};
export default Contact;
