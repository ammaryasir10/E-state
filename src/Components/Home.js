import React, { Component } from "react";
// import Typewriter from 'typewriter-effect'
import Typewriter from "react-typewriter-effect";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styles from "../extra.module.css";
import image from "../images/3d.png";

export default class Home extends Component {
  render() {
    return (
      <div
        className={styles.main_section}
        style={{
          minHeight: `720px`,
          position: `relative`,
        }}
      >
        <div className="home-text">
          E-Malik
          <br />
          <div className="typewriter">
            {/* Trustable, Transparent and Digitized Platform
            <br />
            Open for all! Register Now. */}
            <Typewriter
              cursorColor="#fff"
              multiText={[
                "Trustable, Transparent and Digitized Platform",
                "Open for all! Register Now.",
              ]}
            />
          </div>
          <hr
            style={{
              border: "8px solid #fff",
              width: "150px",
              marginLeft: "0px",
            }}
          />
        </div>
        <div className="home-button">
          <button
            className={styles.Button}
            style={{ marginRight: "15px", backgroundColor: `#01214b` }}
            onClick={() => this.props.history.push("/signup")}
          >
            Register
          </button>{" "}
          <button
            className={styles.Button}
            onClick={() => this.props.history.push("/login")}
            style={{ backgroundColor: `#01214b` }}
          >
            Login
          </button>
        </div>
        <img className={styles.image} src={image} />
      </div>
    );
  }
}
