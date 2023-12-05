import { useEffect } from "react";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import { useState } from "react";
import AnalyzeGrid from "../components/Com-js/AnalyzeGrid";
import { Link } from "react-router-dom";
import { productGet } from "../components/Api/api";

const Container = styled.div`
  width: 1344px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;

  .description {
    img {
      position: relative;
      width: 100%;
      height: 300px;
      border-radius: 10px;
    }
    .img_text {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 30px;
      span {
        color: #330075;
      }
      p {
        font-size: 15px;
      }
    }
    .sortBar {
      font-size: 10px;
      margin-top: 14px;
      height: 100px;
      span{
        cursor: pointer;
      }
    }

    .displayBar {
      display: flex;
      flex-wrap: wrap;
    }

    .imgBox {
      width: 336px;

  .imgBox {
    width: 336px;

    img {
      width: 100%;
    }

    div {
      width: 100%;
      margin-top: 4px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function Analyze() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await productGet();
    setRes(response);
    console.log(res);
  };
  console.log(res?.data); //옵셔널 체이닝
  const A = res?.data || [];
  // 제품 데이터 배열 정의
  const arrLen = A.length;
  const [sortBy, setSortBy] = useState("popular"); // 'popular'이 기본 정렬

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  const productUp = [...A].sort(
    (a, b) => parseInt(a.product_price) - parseInt(b.product_price)
  );
  const productDown = [...A].sort(
    (a, b) => parseInt(b.product_price) - parseInt(a.product_price)
  );
  const productRelease = [...A].sort(
    (a, b) => parseInt(a.release_date) - parseInt(b.release_date)
  );

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="description">
          <img src={"imgs/description.png"} />
          <p className="img_text">
            <span>문버디 스코어</span>로
            <br />
            본인에게 가장 잘 맞는 생리대를 찾아보세요.
            <br />
            <br />
            <p>회원님의 취향을 기반으로 스코어를 매겼어요!</p>
          </p>
        </div>
        {/* <img src={"imgs/description.png"} className="description" /> */}
        <div className="sortBar">
          <span onClick={() => handleSort("popular")}>인기순 |</span>
          <span onClick={() => handleSort("release")}> 출시순 |</span>
          <span onClick={() => handleSort("up")}> 오름차순 |</span>
          <span onClick={() => handleSort("down")}> 내림차순</span>
          <div style={{ marginTop: "14px", fontSize: "20px" }}>
            {A.length}개의 게시물
          </div>
        </div>
        <div className="displayBar">
          {sortBy === "popular" &&
            productUp.map((product, index) => (
              <div className="imgBox" key={index}>
                <Link to={`/analyze/${index + 1}`} key={index}>
                  <img src={product.product_image} alt={product.name} />
                </Link>

                <div style={{ fontSize: "15px" }}>{product.brand}</div>
                <div style={{ fontSize: "24px", marginTop: "4px" }}>
                  {product.name}
                </div>
                <div style={{ fontSize: "32px", marginTop: "4px" }}>
                  {product.price}
                </div>
              </div>
            ))}
          {sortBy === "down" &&
            productDown.map((product, index) => (
              <div className="imgBox" key={index}>
                <Link to={`/analyze/${index + 1}`} key={index}>
                  <img src={product.product_image} alt={product.name} />
                </Link>

                <div style={{ fontSize: "15px" }}>{product.brand}</div>
                <div style={{ fontSize: "24px", marginTop: "4px" }}>
                  {product.name}
                </div>
                <div style={{ fontSize: "32px", marginTop: "4px" }}>
                  {product.price}
                </div>
              </div>
            ))}
          {sortBy === "up" &&
            productUp.map((product, index) => (
              <div className="imgBox" key={index}>
                <Link to={`/analyze/${index + 1}`} key={index}>
                  <img src={product.product_image} alt={product.name} />
                </Link>

                <div style={{ fontSize: "15px" }}>{product.brand}</div>
                <div style={{ fontSize: "24px", marginTop: "4px" }}>
                  {product.name}
                </div>
                <div style={{ fontSize: "32px", marginTop: "4px" }}>
                  {product.price}
                </div>
              </div>
            ))}
          {sortBy === "release" &&
            productRelease.map((product, index) => (
              <div className="imgBox" key={index}>
                <Link to={`/analyze/${index + 1}`} key={index}>
                  <img src={product.product_image} alt={product.name} />
                </Link>

                <div style={{ fontSize: "15px" }}>{product.brand}</div>
                <div style={{ fontSize: "24px", marginTop: "4px" }}>
                  {product.name}
                </div>
                <div style={{ fontSize: "32px", marginTop: "4px" }}>
                  {product.price}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
