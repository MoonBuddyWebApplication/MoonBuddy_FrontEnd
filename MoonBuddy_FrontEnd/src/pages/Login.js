import React from "react";
import styled from "styled-components";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import { Link } from "react-router-dom";
import { login } from "../components/Api/api";
import { useState } from "react";
const IdandPwDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 800px;
  .id {
    justify-content: flex-start;
    font-size: 32px;
    color: #330075;
    margin-top: 90px;
  }
  .pw {
    justify-content: flex-start;
    font-size: 32px;
    color: #330075;
    margin-top: 90px;
  }
`;
const IdRem = styled.label`
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  align-items: center;
  .checkDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .loginDiv {
    margin-left: 10px;
  }
`;
const IdandPwInput = styled.div`
  input {
    border: solid 0.2em;
    background-color: white;
    border-radius: 10px;
    border-color: #b6a3e3;
    width: 580px;
    height: 72px;
    margin-top: 4px;
    outline: none;
  }
`;
const LoginBtn = styled.button`
  background-color: #998ff8;
  border-radius: 10px;
  border: none;
  width: 407px;
  height: 83px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  box-shadow: 2px 2px 2px 2px #c1c0fa;
`;
const Finder = styled.div`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #998ff3;
  }
`;

export default function Login() {
  const [userId, setUserId] = useState("");
  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };
  const [userPw, setUserPw] = useState("");
  const handlePwChange = (e) => {
    setUserPw(e.target.value);
  };
  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <IdandPwDiv style={{ marginTop: "122.66px", marginBottom: "42px" }}>
        <div className="id">아이디</div>
        <IdandPwInput>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={handleIdChange}
          ></input>
        </IdandPwInput>
        {/*아이디창*/}
        <div className="pw">비밀번호</div>
        <IdandPwInput>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={userPw}
            onChange={handlePwChange}
          ></input>
        </IdandPwInput>
        {/*비밀번호창*/}
        <IdRem>
          <div className="checkDiv">
            <input
              type="checkbox"
              id="remember-check"
              style={{ width: "34px", height: "34px" }}
            ></input>
            <div className="loginDiv">자동로그인</div>
          </div>
          <Finder>
            <Link to="/login">아이디 찾기 |</Link>
            <Link to="/login"> 비밀번호 찾기</Link>
          </Finder>
        </IdRem>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "86px",
          }}
        >
          <LoginBtn>로그인</LoginBtn>
        </div>
      </IdandPwDiv>
    </div>
  );
}
