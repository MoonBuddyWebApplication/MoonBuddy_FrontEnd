import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import { boardGet } from "../components/Api/api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  .replyInput {
    border: solid black;
    height: 200px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;
    input {
      width: 90%;
      height: 50%;
      border: none;
      outline: none;
      font-size: 24px;
    }
  }
  .nick {
    display: flex;
    justify-content: flex-start;
  }
  .registerBtn {
    display: flex;
    justify-content: flex-end;
    button {
      background-color: #998ff3;
      border: none;
      border-radius: 15px;
      padding: 7px;
      width: 100px;
      font-size: 20px;
    }
  }
  .replyGet {
    border: solid black;
    height: fit-content;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;
  }
  .nickGet {
    font-size: 18px;
  }
`;
const TitleCom = styled.div`
  margin-top: 71px;
  div {
    padding: 3px;
  }
  .category {
    font-size: 24px;
    color: #998ff3;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
  }
  .nickDiv {
    display: flex;
    justify-content: space-between;
    div {
      font-size: 20px;
    }
  }
`;
const Sector = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 쌓이도록 설정 */
  padding: 20px;
  font-size: 24px;
  .sector {
    height: 380px;
    padding: 20px;
  }

  hr {
    color: black;
    margin: 10px 0; /* 원하는 간격으로 조절 */
  }
`;

//style 부분
export default function CommunityMini({ props }) {
  const [res, setRes] = useState();
  const [inputText, setText] = useState("");
  const { id } = useParams();
  console.log(id);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await boardGet();
    setRes(response);
    console.log(res);
  };
  console.log(res);
  //axios 부분

  const firstData = res?.data[0];
  const Data = res?.data;
  console.log(firstData);
  const PostBtn = () => {
    axios
      .post(
        "https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/reply/post",
        {
          userId: id,
          boardId: 1,
          comment: inputText,
        }
      )
      .then((res) => {
        console.log("성공");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }; // api.get 자체가 동기코드
  return (
    <Container>
      <NavigatorMain />
      <TitleCom>
        <div className="category">[자유]</div>
        <div className="title">{firstData?.title}</div>

        <div className="nickDiv">
          <div>{firstData?.writer}</div>
          <div>
            {new Date(firstData?.replyList[0].createdDate).toLocaleString()}
          </div>
        </div>
      </TitleCom>
      <Sector>
        <hr />
        <div className="sector">{firstData?.content}</div>
        <hr />
      </Sector>

      {Data && (
        <div className="replyGet">
          {Data.map((varId) => (
            <div key={varId.id}>
              <div className="nickGet">{varId?.replyList[0].nickname}</div>
              <div>{varId?.replyList[0].comment}</div>
            </div>
          ))}
        </div>
      )}
      <hr />
      <div className="replyInput">
        <div className="nick">유저 닉네임</div>
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          value={inputText}
          onChange={handleTextChange}
        ></input>
        <div className="registerBtn">
          <button onClick={PostBtn}>등록</button>
        </div>
      </div>
    </Container>
  );
}
