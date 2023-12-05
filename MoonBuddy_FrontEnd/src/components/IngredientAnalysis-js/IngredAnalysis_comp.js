import { useState, useEffect } from "react";
import NavigatorMain from "../Main-js/Navigator_main";
import Navitgator1 from "../Main-js/Navitgator1";
import style from "../css/IngredientAnalysis.module.css";
import style2 from "../css/ReviewComment.module.css";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Modal, Box, Button, Typography } from "@mui/material";
import ReviewComment from "./ReviewComment";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import { product_id } from "../Api/api";
import axios from "axios";

// import axios from 'axios';
import { useParams } from "react-router-dom";

//[인증마크]모달 데이터 관리
const ModalData = [
  {
    title: "Orgainc 100",
    description:
      "100% 유기농 순면 커버.3년 이상 화학비료를 사용하지 않은 토양에서 자란 원료로 모든 유기농 기준을 준수했을 때 받을 수 있는 국제 인증",
  },
  {
    title: "FDA",
    description: "FDAFDAFDAFDAFDAFDA... (내용 생략)",
  },
  {
    title: "더마테스트",
    description: "1더마테스트더마테스트... (내용 생략)",
  },
];
//[인증마크]모달 스타일 설정
const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-30%, -30%)",
  width: 500,
  bgcolor: "background.paper",
  border: "3px solid #6E00FD",
  boxShadow: 10,
  p: 6,
};
//[성분]모달 데이터 관리
const Ingri_ModalData = [
  {
    title: "폴리에틸렌폴리프로필렌복합섬유",
    description:
      "폴리에틸렌 폴리프로필렌(PE/PP) 복합섬유는 두 가지 주요 열가소성 섬유, 즉 폴리에틸렌(PE)과 폴리프로필렌(PP)을 혼합하여 만든 섬유입니다.         각각의 섬유는 고온에도 녹지 않고, 내화학적 안정성이 뛰어나며 특정 환경에서의 내구성이 좋다는 특징을 가지고 있습니다.",
  },
  {
    title: "올레핀중합체",
    description: "올레핀중합체의 상세 설명",
  },
  {
    title: "면상펄프",
    description:
      "면상펄프는 종이와 관련된 제품을 만드는 데 사용되는 주 원료 중 하나입니다. 이것은 주로 목재에서 만들어지는 파우더 상태의 목재 섬유입니다.면상펄프는 주로 목재를 가공하여 나온 목재 파우더나 섬유를 물에 풀어 만든 것입니다. 이 과정에서 나무의 섬유들이 분해되어 물에 떠다니게 되며, 이를 형태에 맞게 압축하고 건조하여 종이나 다른 종이 관련 제품을 만드는 데 사용됩니다.",
  },
];

const ModalComponent = ({ open, onClose, title, description }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={`modal-title`}
      aria-describedby={`modal-description`}
    >
      <Box sx={ModalStyle}>
        <Typography id={`modal-title`} variant="h6" component="h1">
          {title}
        </Typography>
        <Typography id={`modal-description`} sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </Modal>
  );
};
const IngrediList = ({ ingredients, handleOpen }) => {
  return ingredients.map((ingredient, index) => (
    <div style={{ borderBottom: "1px solid" }}>
      <div
        key={index}
        className={style.btn_Ingredi}
        onClick={() => handleOpen(index)}
      >
        {ingredient.title}
      </div>
    </div>
  ));
};

const IngredientAnalysis = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const [INopenModal, INsetOpenModal] = useState(false);
  const [INModalIndex, setINModalIndex] = useState(0);

  //인증마크창 모달 관련
  const handleOpen = (index) => {
    setCurrentModalIndex(index);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  //성분창 모달 관련
  const INhandleOpen = (index) => {
    setINModalIndex(index);
    INsetOpenModal(true);
  };
  const INhandleClose = () => {
    INsetOpenModal(false);
  };
  const { detail } = useParams();
  console.log(detail, "params값");
  const [res, setRes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await product_id(detail); //해당id값을 어케 받을지 고민
    setRes(response);
  };
  console.log(res?.data); //옵셔널 체이닝
  const A = res?.data || [];
  const [inputText, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //   const firstData = res?.data[0];
  //   const Data = res?.data;
  //   console.log(firstData);
  const PostBtn = () => {
    axios
      .post(
        "https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/review/post",
        {
          userId: 0,
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
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <div className={style.container}>
        {/* 제품 정보(이미지,브랜드,이름,가격) 파트 */}
        {/* A.map((P, index) => {}); */}
        <div className={style.LeftArea_ProductInfo}>
          <div>
            <img src={A.product_image} alt={A.name} />
          </div>
          <div className={style.LeftBotton}>
            <div>
              <p className={style.brand}>{A.brand}</p>
              <p className={style.name}>
                <h3>{A.name}</h3>
              </p>
              <p className={style.price}>{A.price}원</p>
            </div>
            <AiOutlineShareAlt size={25} />
          </div>
        </div>
        <div className={style.RightArea_IngredientInfo}>
          {/* 문버디스코어 파트 */}
          <div className={style.Section1}>
            <img
              src={"/imgs/MoonScore.png"}
              alt="문버디 스코어"
              height="100px"
            />
            <div className={style.title}>
              문버디 스코어<div className={style.real_moonscore}>{A.score}</div>
            </div>
          </div>
          {/* 성분 파트 */}
          <div className={style.Section2}>
            <div className={style.title}>
              <h4>성분</h4> 성분을 클릭하면 자세한 설명이 나옵니다.
            </div>
            <IngrediList
              ingredients={Ingri_ModalData}
              handleOpen={INhandleOpen}
            />
          </div>
          <ModalComponent
            open={INopenModal}
            onClose={INhandleClose}
            title={Ingri_ModalData[INModalIndex]?.title}
            description={Ingri_ModalData[INModalIndex]?.description}
          />
          {/* 인증마크 파트 */}
          <div className={style.Section3}>
            <div className={style.title}>
              <h4>인증마크</h4>마크를 클릭하면 자세한 설명이 나옵니다.
            </div>
            <div style={{ display: "flex" }}>
              {ModalData.map((data, index) => (
                <div key={index}>
                  <Button onClick={() => handleOpen(index)}>
                    <img
                      src={"/imgs/Marks/Mark" + `${index + 1}` + ".png"}
                      height="100px"
                    />
                  </Button>
                  <Modal
                    open={openModal && currentModalIndex === index}
                    onClose={handleClose}
                    aria-labelledby={`modal-Mark${index + 1}-title`}
                    aria-describedby={`modal-Mark${index + 1}-description`}
                  >
                    <Box sx={ModalStyle}>
                      <Typography
                        id={`modal-Mark${index + 1}-title`}
                        variant="h6"
                        component="h1"
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        id={`modal-Mark${index + 1}-descrip tion`}
                        sx={{ mt: 2 }}
                      >
                        {data.description}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 제품 특징 & 리뷰 파트 */}
      <div className={style.BottomArea_FeatureAndReivew}>
        <Tabs
          defaultActiveKey="home"
          id="Tabs"
          className={style.Tabs}
          justify
          style={{ fontFamily: '"Aoboshi One", serif', marginBottom: "2rem" }}
        >
          <Tab eventKey="home" title="특징">
            <img src={A.product_info_image} />
          </Tab>
          <Tab eventKey="profile" title="리뷰">
            {" "}
            {A && (
              <div className="replyGet">
                {A.reviewList?.map((varId) => (
                  <div key={varId.id}>
                    <div className="nickGet">{varId}</div>
                    <div>{varId}</div>
                  </div>
                ))}
              </div>
            )}
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
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default IngredientAnalysis;
