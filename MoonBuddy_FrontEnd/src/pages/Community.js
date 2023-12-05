import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import ChatComponent from "../components/Com-js/ChatComponent";
import { boardGet } from "../components/Api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigator1 from "../components/Main-js/Navitgator1";
export default function Community() {
  const [res, setRes] = useState();
  const { id } = useParams(); // 2. useParams 사용
  const LittleNav = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    margin: auto;
    width: 1320px;
    display: flex;
    justify-content: space-between;
    color: #b6a3e3;
    .firstDiv {
      display: flex;
    }
  `;
  const OrderBtn = styled.button`
    /*styled component 쓸때 변수명 첫 글자 무조건 대문자 제발!*/
    border: none;
    cursor: pointer;
    background-color: white;
    color: #b6a3e3;
  `;
  const LinkDiv = styled.div`
    a {
      text-decoration: none;
      color: black;
    }
  `;
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await boardGet();
    setRes(response);
    console.log(res);
  };
  console.log(res);
  // const arrList = res?.data.map((idx) => <div key={idx.id}>{idx.title}</div>);

  // const arra = res?.data.data.map((titleDiv) => {
  //   <div>{titleDiv.title}</div>;
  // });
  const arrayLen = res?.data.length;
  return (
    <div>
      <Navigator1 />
      <NavigatorMain />
      <LittleNav>
        <div className="firstDiv">
          <OrderBtn>최신순</OrderBtn>
          <div> | </div>
          <OrderBtn>인기순</OrderBtn>
        </div>
        <div>{arrayLen}개의 게시물 </div>
      </LittleNav>
      <LinkDiv>
        {res?.data.map((post) => (
          <Link key={post.boardId} to={`/com/${post.boardId}`}>
            <ChatComponent key={post.boardId} props={post} />
          </Link>
        ))}
      </LinkDiv>
    </div>
  );
}
