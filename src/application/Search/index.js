import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import SearchBox from "../../baseUI/search-box/index";

function Search(props) {
  const navigate = useNavigate();
  // 控制动画
  const [show, setShow] = useState(false);

  // 组件内部
  const [query, setQuery] = useState("");
  // 由于是传给子组件的方法，尽量用 useCallback 包裹，以使得在依赖未改变，始终给子组件传递的是相同的引用
  const searchBack = useCallback(() => {
    setShow(false);
  }, []);

  const handleQuery = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => navigate(-1)}
    >
      <Container>
        <div className="search_box_wrapper">
          <SearchBox
            back={searchBack}
            newQuery={query}
            handleQuery={handleQuery}
          ></SearchBox>
        </div>
      </Container>
    </CSSTransition>
  );
}

export default Search;
