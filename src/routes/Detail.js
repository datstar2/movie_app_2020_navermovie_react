import React from "react";

const Detail = (props) => {
  if (props.location.state === undefined) {
    props.history.push("/");
  } else {
    console.log(props.location.state.code);
    const base_url =
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=" +
      props.location.state.code;
    window.location.replace(base_url);
  }

  return;
};

export default Detail;
