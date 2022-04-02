import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Word = ({ word }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const visibleHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const deleteWordHandler = () => {
    if (window.confirm("단어를 삭제 하시겠습니까?")) {
      const existWord = JSON.parse(localStorage.getItem("json"));
      const updatedWord = existWord.filter((elem) => elem.id !== word.id);

      localStorage.setItem("json", JSON.stringify(updatedWord));

      navigate(`/day/${word.day}`);
    } else {
      return;
    }
  };

  const doneHandler = () => {
    const existWord = JSON.parse(localStorage.getItem("json"));

    const doneWord = existWord.map((elem) => {
      if (elem.id === word.id) {
        elem.isDone = !elem.isDone;
      }
      return elem;
    });

    localStorage.setItem("json", JSON.stringify(doneWord));
    navigate(`/day/${word.day}`);
  };

  const upper = word.eng.charAt(0).toUpperCase() + word.eng.slice(1);

  return (
    <tr className={word.isDone ? "off" : ""}>
      <td>
        <input onChange={doneHandler} type="checkbox" checked={word.isDone} />
      </td>
      <td>{upper}</td>
      <td className={isVisible ? "" : "word"} onClick={visibleHandler}>
        {isVisible ? word.kor : "눌러서 뜻 보기"}
      </td>
      <td>
        <button onClick={deleteWordHandler}>삭제</button>
      </td>
    </tr>
  );
};

export default Word;
