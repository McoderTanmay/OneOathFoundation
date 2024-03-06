import { useRef, useState } from "react";
import styles from "./form.module.css";

function InputForm() {
  // to send data to excelsheet
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  //Submit handeling
  const submitHandeler = async (event)=>{
    event.preventDefault();
    const data = {
      Name:inputName,
      Email:inputEmail,
      Phone:inputPhone,
      Message:inputMessage
    }
    console.log()
    const response = await fetch('https://sheet.best/api/sheets/a8fed8a1-1579-4366-8129-70467de99b2c',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    });
    if(!response.ok){
      return Error
    }
    console.log(response);
    setInputEmail('');
    setInputMessage('');
    setInputName('');
    setInputPhone('');
  }

  //For On focus Animation
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const targetRef = (event) => {
    if (event.target === nameInputRef.current) {
      setNameFocused(true);
      return nameInputRef;
    }
    if (event.target === emailInputRef.current) {
      setEmailFocused(true);
      return emailInputRef;
    }
    if (event.target === phoneInputRef.current) {
      setPhoneFocused(true);
      return phoneInputRef;
    }
    if (event.target === messageInputRef.current) {
      setMessageFocused(true);
      return messageInputRef;
    }
  };
  const focusHandeler = (event) => {
    const targetInputRef = targetRef(event);
    if (targetInputRef.current) {
      console.log(targetInputRef.current);
      targetInputRef.current.classList.add(styles.focused);
    }
  };

  const blurHandeler = (event) => {
    const targetInputRef = targetRef(event);
    if (targetInputRef.current) {
      targetInputRef.current.classList.remove(styles.focused);
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandeler}>
        <div
          className={`name mb-3 d-flex flex-column ${styles.container_name}`}
        >
          <input
            ref={nameInputRef}
            type="text"
            onChange={(e)=>setInputName(e.target.value)}
            value={inputName}
            className={styles.Name}
            onFocus={focusHandeler}
            onBlur={blurHandeler}
          />
          <label htmlFor="name" className={`position-absolute ${styles.label} ${
              nameFocused ? styles.focused_label : ""
            }`}>
            Name
          </label>
        </div>
        <div className={`mb-3 d-flex flex-column ${styles.container_name}`}>
          <input
            ref={emailInputRef}
            type="email"
            onChange={(e)=>setInputEmail(e.target.value)}
            value={inputEmail}
            className={styles.Email}
            onFocus={focusHandeler}
            onBlur={blurHandeler}
          />
          <label
            htmlFor="email"
            className={`position-absolute ${styles.label} ${
              emailFocused ? styles.focused_label : ""
            }`}
          >
            Email
          </label>
        </div>
        <div
          className={`mb-3 mb-3 d-flex flex-column ${styles.container_name}`}
        >
          <input
            ref={phoneInputRef}
            type="number"
            className={styles.Phone}
            onChange={(e)=>setInputPhone(e.target.value)}
            value={inputPhone}
            onFocus={focusHandeler}
            onBlur={blurHandeler}
          />
          <label
            htmlFor="phone"
            className={`position-absolute ${styles.label} ${
              phoneFocused ? styles.focused_label : ""
            }`}
          >
            Phone Number
          </label>
        </div>
        <div className="message mb-2 d-flex flex-column">
          <textarea
            ref={messageInputRef}
            name="message"
            rows="5"
            className={styles.message}
            onChange={(e)=>setInputMessage(e.target.value)}
            value={inputMessage}
            onFocus={focusHandeler}
            onBlur={blurHandeler}
          ></textarea>
          <label htmlFor="message" className={`position-absolute ${
              messageFocused ? styles.focused_label : ""
            }`}>
            Messege
          </label>
        </div>
        <button type="submit" className={`btn bg-primary ${styles.submit_btn}`}>
          Send Messege
        </button>
      </form>
    </div>
  );
}

export default InputForm;
