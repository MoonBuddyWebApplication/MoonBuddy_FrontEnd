import { styled } from "styled-components";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import { SignUpApi } from "../components/Api/api";
import { useEffect } from "react";
import axios from "axios";
const StyledButton = styled.div`
  background-color: #c7a2f8;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 35px 0px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
  margin-bottom: 40px;
`;
const StyledJoin = styled.div`
  width: 976px;
  margin: 0 auto;
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  .logo {
    display: flex;
    justify-content: center;
    margin-top: 44px;
  }
  .logo img {
    width: 152px;
    height: 146px;
  }
  .input-box {
    display: flex;
    justify-content: center;
  }
  .input-box input {
    margin-top: 42px;
    /* height: 60px; */
    width: 100%;
    font-size: 24px;
    outline: none;
    border: 1px solid black;
    padding: 27px 22px;
    border-radius: 15px;
    box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
    border-color: none;
  }
  .etc {
    display: flex;
    align-items: center;
    margin-top: 19px;
    font-size: 20px;
    margin-bottom: 29px;
  }
  .etc input {
    margin-right: 1rem;
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: rgb(0, 0, 0, 0.5);
    font-weight: 500;
    margin-top: 20px;
  }
  .etc2 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .join {
    font-size: 40px;
    display: flex;
    justify-content: center;
    margin-top: 26px;
  }
  .joinBar {
    display: flex;
  }
  hr {
    width: 976px;
    border-width: 0.5px;
    border-color: black;
    text-align: center;
    margin-bottom: 68px;
  }
  .join {
    margin-bottom: 75px;
  }
  .name {
    width: 160px;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    display: flex;
    font-size: 24px;
    margin-bottom: 24px;
  }
  .content input {
    width: 700px;
    border: none;
    border-color: pink;
    outline: none;
  }
  .typeFont {
    font-size: 16px;
    padding: 12px;
  }
  .bowl {
    width: 150px;
    height: 150px;
    border: 4px solid #998ff3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin-left: 10px;
    input {
      outline: none;
    }
  }
  .weightBowl {
    display: flex;
    padding: 10px;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .inputClass {
    display: flex;
    width: 100px;
    height: 20px;
    border: 2px solid #998ff3;
    border-color: #998ff3;
    margin-top: 10px;
  }
  .explain {
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding: 10px;
  }
`;

export default function Signup() {
  //   const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const [absorb, setAbsorb] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [safety, setSafety] = useState(0);
  const [price, setPrice] = useState(0);

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };
  const handleNickChange = (e) => {
    setNickName(e.target.value);
  };
  const handleAbsorbChange = (e) => {
    setAbsorb(e.target.value);
  };
  const handleHumidityChange = (e) => {
    setHumidity(e.target.value);
  };
  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };
  const handleSafetyChange = (e) => {
    setSafety(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const SignUpBtn = () => {
    axios
      .post(
        "https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/user/create",
        {
          userId: userId,
          pw: pw,
          nickName: nickName,
          absorb: absorb,
          humidity: humidity,
          satisfaction: satisfaction,
          safety: safety,
          price: price,
        }
      )
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
    document.location.href = "/";
  }; // api.get 자체가 동기코드

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />

      <StyledJoin>
        <div>
          <div className={"join"}>회원가입</div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>닉네임</div>
              <div className={"content"}>
                <input
                  type="text"
                  placeholder="문버디에서 사용할 닉네임을 입력하세요"
                  value={nickName}
                  onChange={handleNickChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>아이디</div>
              <div className={"content"}>
                <input
                  type="text"
                  placeholder="6~12자의 영문, 숫자만 사용 가능합니다"
                  value={userId}
                  onChange={handleIdChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>비밀번호</div>
              <div className={"content"}>
                <input
                  type="password"
                  placeholder="8~20자의 숫자, 특수문자, 영문자만 사용 가능합니다"
                  value={pw}
                  onChange={handlePwChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className="explain">100점 만점으로 입력해주세요 </div>
          <div className={"joinCompo"}>
            <div className={"weightBowl"}>
              <div className="bowl">
                <div className="weightTitle">흡수성능</div>
                <input
                  className="inputClass"
                  type="number"
                  value={absorb}
                  onChange={handleAbsorbChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">내부습도</div>
                <input
                  className="inputClass"
                  type="number"
                  value={humidity}
                  onChange={handleHumidityChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">소비자만족도</div>
                <input
                  className="inputClass"
                  type="number"
                  value={satisfaction}
                  onChange={handleSatisfactionChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">안정성</div>
                <input
                  className="inputClass"
                  type="number"
                  value={safety}
                  onChange={handleSafetyChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">가격</div>
                <input
                  className="inputClass"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <StyledButton onClick={SignUpBtn}>회원가입</StyledButton>
      </StyledJoin>
    </div>
  );
}
