import { useState } from "react";

import axios from "axios";

const authNumber = Math.ceil(Math.random() * 100);

function App() {
  const [email, setemail] = useState();
  const [password, setepassword] = useState();
  const [authEmail, setauthEmail] = useState(false);
  const [checkNumber, setcheckNumber] = useState();

  const registEmail = e => {
    setemail(e.target.value);
  };
  const registPassword = e => {
    setepassword(e.target.value);
  };

  const auth = () => {
    if (authEmail == false) {
      axios
        .post("http://localhost:8080/auth/regist_Mail", {
          email,
          password,
          authNumber,
        })
        .then(data => {
          console.log(data.data.success);
          setauthEmail(data.data.success);
        })
        .catch(console.error);
    } else {
      if (checkNumber == authNumber) {
        axios
          .post("http://localhost:8080/auth/regist_Store", {
            email,
            password,
          })
          .then(data => {
            console.log(data.data);
            setauthEmail(data.data.success);
          })
          .catch(console.error);
      } else {
        alert("인증번호를 확인해 주세요");
      }
    }
  };

  const checkAuthNumber = e => {
    setcheckNumber(e.target.value);
  };

  const hide = () => {
    if (authEmail == false) return "hidden";
    else return null;
  };

  return (
    <div>
      <input placeholder="email" onChange={registEmail} />
      <br />
      <input placeholder="password" onChange={registPassword} />
      <br />
      <input
        type={hide()}
        placeholder="authNumber"
        onChange={checkAuthNumber}
      />
      <button onClick={auth}>submit</button>
    </div>
  );
}

export default App;



