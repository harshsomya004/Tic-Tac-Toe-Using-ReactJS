import React from "react";
import { css } from "@emotion/css";

class Square extends React.Component {
  render() {
    return (
      <button
        className={css`
          background: #fff;
          border: 1px solid 999;
          float: left;
          font-size: 40px;
          font-weight: bold;
          line-height: 50px;
          height: 50px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 50px;
          font-display: center;
          align-items: center;
        `}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Square;
