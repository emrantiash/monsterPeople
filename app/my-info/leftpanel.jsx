import React from "react";
import Image from "next/image";
import userImage from "../assets/img/myinfo/user.svg";
import styles from "./layout.style";

export default function Leftpanel() {
  return (
    <div
      className="card-body"
      style={{
        backgroundColor: "#f8f8f8",
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 8,
        // height : 500
      }}
    >
      <div style={{ backgroundColor: "" }}>
        <Image
          src={userImage}
          height={"100%"}
          width={150}
          style={{
            backgroundColor: "",
            position: "relative",
            display: "flex",
            alignItems: "center",
            borderRadius: 150 / 2,
          }}
        />
      </div>
      {/* left columnn text */}
      <div className="" style={styles.sideDivRoot}>
        <div style={styles.sideDiv}>
          <i className="fas fa-home"></i>
          &nbsp;
          <div className="text-xs" style={styles.makeSpace}>
            xx-xxxxxxx
          </div>
        </div>
        <div style={styles.sideDiv}>
          <i className="fas fa-home"></i>
          &nbsp;
          <div className="text-xs" style={styles.makeSpace}>
            xx-xxxxxxx
          </div>
        </div>
        <div style={styles.sideDiv}>
          <i className="fas fa-home"></i>
          &nbsp;
          <div className="text-xs" style={styles.makeSpace}>
            xx-xxxxxxx
          </div>
        </div>
        <hr />
        <div style={styles.makeSpace} className="text-table">
          <div>Hire Date</div>
          <div>23 Sept,2010</div>
          <div>10y - 9m - 16d</div>
        </div>
        <hr />
        <div style={styles.makeSpace} className="text-table">
          <div style={styles.fellGap}># 1001</div>
          <div style={styles.fellGap}>
            <i className="fas fa-birthday-cake"></i> Permanent
          </div>
          <div style={styles.fellGap}>
            <i className="fas fa-users"></i> Finance & Ligal
          </div>
          <div style={styles.fellGap}>
            <i className="fas fa-users"></i> Finance & Ligal
          </div>
          <div style={styles.fellGap}>
            <i className="fas fa-address-card"></i> Mohakhali, Dhaka
          </div>
        </div>
        <hr />
        <div style={styles.makeSpace} className="text-table">
          <div style={styles.fellGap}>Manager</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image src={userImage} height={"100%"} width={40} />
            <div
              style={{
                marginTop: 0,
                marginLeft: 5,
              }}
            >
              <div>Hasim Regmne</div>
              <div>BD</div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{...styles.makeSpace,marginBottom : 80}} className="text-table">
          <div style={styles.fellGap}>Team</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image src={userImage} height={"100%"} width={40} />
            <div
              style={{
                marginTop: 0,
                marginLeft: 5,
              }}
            >
              <div>Mahfuzur Rahman</div>
              <div>BD</div>
            </div>
          </div>
          &nbsp;
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image src={userImage} height={"100%"} width={40} />
            <div
              style={{
                marginTop: 0,
                marginLeft: 5,
              }}
            >
              <div>Hasim Regmne</div>
              <div>BD</div>
            </div>
          </div>
          &nbsp;
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <i className="fas fa-users fa-2x"></i>
            <div
              style={{
                marginTop: 0,
                marginLeft: 5,
              }}
            >
              <div>7 Others</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
