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
const ModalComponent = ({ data, open, onClose }) => {
    return (
        <>
            {data.map((D, index) => (
                <Modal
                    key={index}
                    open={open === index}
                    onClose={onClose}
                    aria-labelledby={D.title}
                    aria-describedby={D.description}
                >
                    <Box sx={ModalStyle}>
                        <Typography id={D.title} variant="h6" component="h1">
                            {D.title}
                        </Typography>
                        <Typography id={D.description} sx={{ mt: 2 }}>
                            {D.description}
                        </Typography>
                    </Box>
                </Modal>
            ))}
        </>
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
        INsetOpenModal(index);
    };
    const INhandleClose = () => {
        INsetOpenModal(false);
    };
    const { detail } = useParams();
    console.log(detail);
    const [res, setRes] = useState([]);

    useEffect(() => {
        getData();
    }, []);

  const [INopenModal, INsetOpenModal] = useState(false);
  const [INModalIndex, setINModalIndex] = useState(0);


    const getData = async () => {
        const response = await product_id(detail);
        setRes(response);
        console.log(res);
    };
    console.log(res?.data); //옵셔널 체이닝
    const A = res?.data || [];
    //리뷰 댓글
    // const { boardId } = useParams();
    // const [content, setContent] = useState();
    // const [comments, setComments] = useState();
    // const [parentId, setParentId] = useState("");

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

    // const createComment = async (content) => {
    //     console.log("parentId", {
    //         comment: content,
    //         boardId: boardId,
    //         parentId: parentId,
    //     });
    //     await axios
    //         .post(`https://port-0-moonbuddy-spring-euegqv2lloic2m5c.sel5.cloudtype.app/reply/post`, {
    //             comment: content,
    //             boardId: boardId,
    //             parentId: parentId,
    //         })
    //         .then((res) => {
    //             console.log("res", res.data);
    //             setComments(res.data);
    //         })
    //         .catch((error) => {
    //             console.log("Error : ", error);
    //             alert(error.response.data.message);
    //         });
    // };
    // if (!comments) {
    //     return (
    //         <div
    //             style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 alignItems: "center",
    //             }}
    //         >
    //             <div className={style2.loadingScreen}>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </div>
    //         </div>
    //     );
    // }
    // 리뷰댓글 끝

    return (
        <div>
            <Navitgator1 />
            <NavigatorMain />
            <div className={style.container}>
                {/* 제품 정보(이미지,브랜드,이름,가격) 파트 */}
                {/* A.map((P, index) => {}); */}
                <div className={style.LeftArea_ProductInfo}>
                    <div>
                        <img src={A.product_image} alt={A.name} height='500px' />
                    </div>
                    <div className={style.LeftBotton}>
                        <div>
                            <p className={style.brand}>{A.brand}</p>
                            <p className={style.name}><h3>{A.name}</h3></p>
                            <p className={style.price}>{A.product_price}원</p>
                        </div>
                        <AiOutlineShareAlt size={25} />
                    </div>
                </div >
                <div className={style.RightArea_IngredientInfo}>
                    {/* 문버디스코어 파트 */}
                    <div className={style.Section1}>
                        <img src={"/imgs/MoonScore.png"} alt="문버디 스코어" height="100px" />
                        <div className={style.title}>문버디 스코어<div className={style.real_moonscore}>{A.score}</div></div>
                    </div>
                    {/* 성분 파트 */}
                    <div className={style.Section2}>
                        <div className={style.title}><h4>성분</h4> 성분을 클릭하면 자세한 설명이 나옵니다.</div>
                        <div className={style.ListContainer}>
                            {A.ingredientList && <IngrediList ingredients={A.ingredientList} handleOpen={INhandleOpen} />}
                        </div>
                    </div>
                    {A.ingredientList && <ModalComponent
                        data={A.ingredientList}
                        open={INopenModal}
                        onClose={INhandleClose}
                        title={A.ingredientList.title}
                        description={A.ingredientList.description}
                    />}
                    {/* 인증마크 파트 */}
                    <div className={style.Section3}>
                        <div className={style.title}><h4>인증마크</h4>마크를 클릭하면 자세한 설명이 나옵니다.</div>
                        <div style={{ display: 'flex' }}>
                            {A.markList && A.markList.map((data, index) => (
                                <div key={index}>
                                    <Button onClick={() => handleOpen(index)}>
                                        <img src={data.image} height="100px" />
                                    </Button>
                                    <Modal open={openModal && currentModalIndex === index} onClose={handleClose} aria-labelledby={data.name} aria-describedby={data.explanation}>
                                        <Box sx={ModalStyle}>
                                            <Typography id={data.name} variant="h6" component="h1">
                                                {data.name}
                                            </Typography>
                                            <Typography id={data.explanation} sx={{ mt: 2 }}>
                                                {data.explanation}
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            ))}
                        </div>
                    </div>
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
