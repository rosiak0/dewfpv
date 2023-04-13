import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
import PageTitle from "../../components/PageTitle";
import { useRef } from "react";

const Contact = () => {
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
      <TextWrapper>
        <PageTitle>Contact</PageTitle>
        <div className="fixed border p-4">
          <form onSubmit={submitHandler}>
            <div className="flex">
              <div className="w-1/2 mr-10">
                <label className="mb-2 block font-bold" htmlFor="name">
                  name:
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-mainbg shadow focus:outline-none"
                  type="text"
                  required
                  id="name"
                  // ref={nameInputRef}
                ></input>
              </div>
              <div className="w-1/2">
                <label className="mb-2  block font-bold" htmlFor="surname">
                  surname:
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-mainbg shadow focus:outline-none"
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
                className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-mainbg shadow focus:outline-none"
                type="email"
                required
                id="email"
                // ref={emailInputRef}
              ></input>
            </div>
            <div>
              <label className="mb-2 block font-bold" htmlFor="message">
                message:
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none border py-2 px-3 leading-tight text-mainbg shadow focus:outline-none"
                defaultValue="Get back to me when you read this, please."
                required
                id="message"
                // ref={messageInputRef}
              ></textarea>
            </div>
            <button className="w-full border-3 border-black py-2 shadow-sm font-bold">
              Send
            </button>
          </form>
        </div>
      </TextWrapper>
    </PageWrapper>
  );
};
export default Contact;
