import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    width: 1320px;
    margin: auto;
    .firstSector {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      padding: 10px;
    }
    .sectorWord {
      padding: 10px;
      font-size: 20px;
    }
    .title {
      font-size: 48px;
    }
    .middleSector {
      display: flex;
    }
    .sectorImg {
      display: flex;
      flex-direction: column;
      padding: 15px;
      img {
        width: 420px;
        height: 454px;
        border-radius: 15px;
      }
    }
  `;

  const date = "2023.11.02";

  const { id } = useParams();
  console.log(id);

  // 예시 기사 데이터
  const newsData = [
    {
      id: 1,
      title: "세계 월경의 날: 월경에 대한 5가지 오해",
      content:
        "5월 28일은 세계 월경의 날로 여성의 월경이 평균 5일간 지속하고 28일을 주기로 돌아온다는 의미가 담긴 날이다. 2014년에 독일에서 처음 제정된 월경의 날은 그동안 월경에 대해 말조차 꺼내기 힘들었던 분위기를 깨고 존중하는 공감대를 형성해보자는 취지로 만들어졌다. 월경에 대한 인식이 많이 개선됐지만, 여전히 한국 사회에서 월경을 월경이라라고 부르기가 쉽지만은 않다.",
      content2:
        "'그날이야' '난 오늘 마법에 걸렸어' 모두 생리기간을 나타내는 말이다. 1990년대 중반 한국에서는 생리대 제작 업체들이 '한 달에 한 번 여자는 마술에 걸린다' '그날이 와도 안심하세요' 등의 광고 카피를 들고 나왔다.이 광고가 대중들에게 큰 인기를 끌면서 생리를 '마법' '그날'이라고 부르는 이들이 많아졌고, 오늘날까지도 '생리'라는 용어 대신 으레 '고상한' 표현으로 사용되고 있다.",
      content3:
        "'월경'은 두꺼워졌던 자궁점막이 떨어져 나가면서 출혈과 함께 질을 통해 배출되는 것으로 가임기의 여성이라면 자연스럽게 경험하는 생리적인 현상이다. 가임기 여성이 경험하는 것임에도 불구하고 '생리'는 부끄럽고 창피한 일인 것처럼 다뤘다.월경을 월경이라 부르지 못하는 모습은 비단 한국만의 문제가 아니다. 독일에서는 생리를 '딸기주간'이라고 부르고 미국에서는 '언트플로(Aunt Flow)'라는 말을 쓰기도 한다. 프랑스에서는 과거 영국과의 전쟁을 빗대서 `영국 군대가 상륙했다`는 표현을 쓴다.",
      images: ["imgs/news1 (1).png"],
    },
    {
      id: 2,
      title: "‘욱씬욱씬 생리통’ 가만히 둬도 괜찮을까?",
      content: `F5월 28일은 세계 월경의 날로 여성의 월경이 평균 5일간 지속하고 28일을 주기로 돌아온다는 의미가 담긴 날이다. 2014년에 독일에서 처음 제정된 월경의 날은 그동안 월경에 대해 말조차 꺼내기 힘들었던 분위기를 깨고 존중하는 공감대를 형성해보자는 취지로 만들어졌다. 월경에 대한 인식이 많이 개선됐지만, 여전히 한국 사회에서 월경을 월경이라라고 부르기가 쉽지만은 않다.`,
      content2:
        "'그날이야' '난 오늘 마법에 걸렸어' 모두 생리기간을 나타내는 말이다. 1990년대 중반 한국에서는 생리대 제작 업체들이 '한 달에 한 번 여자는 마술에 걸린다' '그날이 와도 안심하세요' 등의 광고 카피를 들고 나왔다.이 광고가 대중들에게 큰 인기를 끌면서 생리를 '마법' '그날'이라고 부르는 이들이 많아졌고, 오늘날까지도 '생리'라는 용어 대신 으레 '고상한' 표현으로 사용되고 있다.",
      images: ["imgs/news1 (2).png"],
    },
    {
      id: 3,
      title: "피임약 : 피임약의 이상한 진실",
      content: `F5월 28일은 세계 월경의 날로 여성의 월경이 평균 5일간 지속하고 28일을 주기로 돌아온다는 의미가 담긴 날이다. 2014년에 독일에서 처음 제정된 월경의 날은 그동안 월경에 대해 말조차 꺼내기 힘들었던 분위기를 깨고 존중하는 공감대를 형성해보자는 취지로 만들어졌다. 월경에 대한 인식이 많이 개선됐지만, 여전히 한국 사회에서 월경을 월경이라라고 부르기가 쉽지만은 않다.`,
      content2:
        "'그날이야' '난 오늘 마법에 걸렸어' 모두 생리기간을 나타내는 말이다. 1990년대 중반 한국에서는 생리대 제작 업체들이 '한 달에 한 번 여자는 마술에 걸린다' '그날이 와도 안심하세요' 등의 광고 카피를 들고 나왔다.이 광고가 대중들에게 큰 인기를 끌면서 생리를 '마법' '그날'이라고 부르는 이들이 많아졌고, 오늘날까지도 '생리'라는 용어 대신 으레 '고상한' 표현으로 사용되고 있다.",
      images: ["imgs/news1 (3).png"],
    },
    // 다른 기사 데이터 추가
  ];

  // id에 해당하는 기사 찾기
  const selectedNews = newsData.find((news) => news.id === parseInt(id));

  if (!selectedNews) {
    // id가 유효하지 않을 경우 처리
    return <div>유효하지 않은 기사입니다.</div>;
  }

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="firstSector">
          <div className="title">{selectedNews.title}</div>
          <div className="date">{date}</div>
        </div>
        <hr />
        <div className="middleSector">
          <div className="sectorImg">
            {selectedNews.images.map((image, index) => (
              <img key={index} src={image} alt={`img-${index}`} />
            ))}
          </div>
          <div className="sectorWord">{selectedNews.content}</div>
          <div className="sectorWord">{selectedNews.content2}</div>
          <div className="sectorWord">{selectedNews.content2}</div>
          <div className="sectorWord">{selectedNews.content2}</div>
        </div>
      </Container>
    </div>
  );
}
