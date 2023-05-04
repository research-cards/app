import * as React from "react";
import rectangle6 from "./assets/rectangle6.svg";
import closeFill0Wght400Grad0Opsz from "./assets/closeFill0Wght400Grad0Opsz.svg";
import eWebGoal8 from "./assets/eWebGoal8.png";
import vector from "./assets/vector.svg";
import rectangle1 from "./assets/rectangle1.svg";
import datasetFill0Wght400Grad0Opsz from "./assets/datasetFill0Wght400Grad0Opsz.svg";
import eWebGoal from "./assets/eWebGoal.png";
import badgeFill0Wght400Grad0Opsz from "./assets/badgeFill0Wght400Grad0Opsz.svg";
import eWebGoal6 from "./assets/eWebGoal6.png";
import eWebGoal2 from "./assets/eWebGoal2.png";
import helpFill0Wght400Grad0Opsz from "./assets/helpFill0Wght400Grad0Opsz.svg";
import toggleOffFill0Wght400Grad0O from "./assets/toggleOffFill0Wght400Grad0O.svg";
import articleFill0Wght400Grad0Opsz from "./assets/articleFill0Wght400Grad0Opsz.svg";
import eWebGoal4 from "./assets/eWebGoal4.png";
import doneFill0Wght400Grad0Opsz from "./assets/doneFill0Wght400Grad0Opsz.svg";
import Group from "./components/Group";
const App = () => {
  const propsData = {
    group21: {
      doneFill0Wght400Grad0Opsz: doneFill0Wght400Grad0Opsz,
      policyOne: "Policy One",
    },
  };
  return (
    <div
      style={{
        backgroundColor: "#fbfbf8",
        lineHeight: "54px",
        fontSize: "1.563rem",
        color: "#1f2e59",
        fontWeight: "700",
        fontFamily: "Inter, Arial",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1f2e59",
          lineHeight: "36px",
          fontSize: "1.875rem",
          color: "#fbfbf8",
          fontWeight: "600",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          alignSelf: "flex-start",
          flexBasis: "7%",
          paddingLeft: "22px",
          paddingTop: "2px",
          marginBottom: "23px",
        }}
      >
        <img
          style={{
            width: "48px",
            height: "48px",
            alignSelf: "flex-start",
            objectFit: "cover",
          }}
          src={badgeFill0Wght400Grad0Opsz}
        />
        <span
          style={{
            letterSpacing: "-2px",
            alignSelf: "center",
            marginLeft: "3px",
            marginBottom: "1px",
          }}
        >
          Research Cards
        </span>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          alignSelf: "center",
          flexBasis: "87%",
          paddingRight: "43px",
          marginLeft: "46px",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
            alignSelf: "flex-end",
            flexBasis: "67%",
            marginRight: "54px",
            marginTop: "32px",
          }}
        >
          <span
            style={{
              letterSpacing: "-3px",
              fontSize: "3.75rem",
              lineHeight: "73px",
              alignSelf: "flex-start",
              marginLeft: "8px",
              marginBottom: "1px",
            }}
          >
            A Title is Here
          </span>
          <div
            style={{
              borderRadius: "1px",
              backgroundColor: "#d9d9d9",
              lineHeight: "24px",
              fontSize: "1.875rem",
              fontWeight: "400",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              alignSelf: "flex-start",
              flexBasis: "8%",
              paddingRight: "8px",
              paddingTop: "7px",
              paddingBottom: "1px",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontStyle: "italic",
                lineHeight: "36px",
                alignSelf: "center",
              }}
            >
              es: Un Titulo esta Aqui
            </span>
            <span
              style={{
                letterSpacing: "-1px",
                fontSize: "1.25rem",
                fontStyle: "italic",
                alignSelf: "flex-end",
              }}
            >
              Translation by DeepL
            </span>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              fontSize: "2.813rem",
              alignSelf: "flex-start",
              marginLeft: "9px",
              marginTop: "2px",
            }}
          >
            Summary
          </span>
          <span
            style={{
              fontWeight: "600",
              lineHeight: "30px",
              alignSelf: "flex-start",
              marginLeft: "8px",
            }}
          >
            A random summary could be put here that explains the project in a
            way that is easy and digestible.
          </span>
          <div
            style={{
              borderRadius: "1px",
              backgroundColor: "#d9d9d9",
              lineHeight: "24px",
              fontWeight: "400",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              alignSelf: "flex-start",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "9px",
              paddingBottom: "5px",
              marginBottom: "17px",
            }}
          >
            <span
              style={{
                letterSpacing: "-1px",
                fontStyle: "italic",
                lineHeight: "30px",
                alignSelf: "center",
                marginLeft: "10px",
                marginTop: "14px",
                marginBottom: "-14px",
              }}
            >
              es: Se podría poner aquí un resumen aleatorio que explique el
              proyecto de forma fácil y digerible.
            </span>
            <span
              style={{
                letterSpacing: "-1px",
                fontSize: "1.25rem",
                fontStyle: "italic",
                zIndex: "1",
                alignSelf: "flex-end",
              }}
            >
              Translation by DeepL
            </span>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              fontSize: "2.813rem",
              alignSelf: "flex-start",
              marginLeft: "12px",
              marginTop: "1px",
            }}
          >
            Takeaways:
          </span>
          <span
            style={{
              fontWeight: "600",
              lineHeight: "30px",
              alignSelf: "flex-start",
              marginLeft: "25px",
            }}
          >
            Conclusion #1 Conclusion #2
          </span>
          <div
            style={{
              borderRadius: "1px",
              backgroundColor: "#d9d9d9",
              fontSize: "1.25rem",
              lineHeight: "30px",
              fontWeight: "400",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              alignSelf: "flex-start",
              flexBasis: "13%",
              paddingLeft: "40px",
              paddingRight: "10px",
              paddingTop: "1px",
              paddingBottom: "12px",
              marginBottom: "34px",
            }}
          >
            <span
              style={{
                letterSpacing: "-1px",
                fontSize: "1.563rem",
                fontStyle: "italic",
                alignSelf: "center",
                marginTop: "7px",
              }}
            >
              es: Conclusión #1 Conclusión #2
            </span>
            <span
              style={{
                letterSpacing: "-1px",
                fontStyle: "italic",
                lineHeight: "24px",
                alignSelf: "flex-end",
              }}
            >
              Translation by DeepL
            </span>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              fontSize: "2.813rem",
              alignSelf: "flex-start",
              marginLeft: "13px",
              marginTop: "3px",
              marginBottom: "5px",
            }}
          >
            Policy Opportunities{" "}
          </span>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "flex-start",
              flexBasis: "6%",
              paddingRight: "16px",
              marginLeft: "10px",
              marginTop: "2px",
            }}
          >
            <Group
              style={{
                height: "100%",
                marginRight: "-54px",
                flexBasis: "98%",
              }}
              {...propsData.group21}
            />
            <img
              style={{
                width: "45px",
                height: "45px",
                alignSelf: "center",
                objectFit: "cover",
              }}
              src={helpFill0Wght400Grad0Opsz}
            />
          </div>
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffb775",
              border: "2px solid #fbfbf8",
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#fbfbf8",
              lineHeight: "24px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "center",
              flexBasis: "6%",
              paddingLeft: "14px",
              paddingRight: "9px",
              marginLeft: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "5px",
                border: "2px solid #fbfbf8",
                width: "30px",
                height: "30px",
                alignSelf: "center",
                objectFit: "cover",
              }}
              src={closeFill0Wght400Grad0Opsz}
            />
            <span
              style={{
                alignSelf: "center",
                marginTop: "2px",
              }}
            >
              Policy Two
            </span>
            <img
              style={{
                width: "45px",
                height: "45px",
                alignSelf: "center",
                marginLeft: "360px",
                objectFit: "cover",
              }}
              src={helpFill0Wght400Grad0Opsz}
            />
          </div>
        </div>
        <div
          style={{
            borderRadius: "4px",
            backgroundColor: "#ffffff",
            border: "5px solid #437598",
            fontSize: "2.813rem",
            lineHeight: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "flex-start",
            flexBasis: "27%",
            paddingLeft: "35px",
            paddingTop: "8px",
            paddingBottom: "33px",
            marginBottom: "19px",
          }}
        >
          <span
            style={{
              letterSpacing: "-2px",
              lineHeight: "54px",
              alignSelf: "flex-start",
              marginLeft: "2px",
              marginTop: "3px",
              marginBottom: "4px",
            }}
          >
            Authors
          </span>
          <div
            style={{
              color: "#437598",
              fontWeight: "400",
              fontSize: "1.25rem",
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignSelf: "center",
              paddingRight: "26px",
              marginTop: "1px",
              marginBottom: "11px",
            }}
          >
            <span
              style={{
                letterSpacing: "-2px",
                fontSize: "1.875rem",
                fontWeight: "500",
                fontStyle: "italic",
                lineHeight: "36px",
                color: "#1f2e59",
                alignSelf: "flex-start",
                marginRight: "-9px",
              }}
            >
              Author One Author Two Author Three
            </span>
            <span
              style={{
                letterSpacing: "-1px",
                zIndex: "1",
                alignSelf: "flex-start",
                marginRight: "-161px",
              }}
            >
              Primary Researcher
            </span>
            <span
              style={{
                letterSpacing: "-1px",
                zIndex: "1",
                alignSelf: "center",
              }}
            >
              Developer
            </span>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              lineHeight: "54px",
              alignSelf: "flex-start",
              marginLeft: "6px",
              marginTop: "1px",
              marginBottom: "8px",
            }}
          >
            Links
          </span>
          <div
            style={{
              color: "#fbfbf8",
              fontSize: "1.25rem",
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignSelf: "flex-end",
              paddingRight: "27px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
                marginRight: "10px",
              }}
            >
              <div
                style={{
                  zIndex: "1",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  flexBasis: "100%",
                  paddingRight: "1px",
                  paddingTop: "6px",
                  marginBottom: "-100px",
                }}
              >
                <img
                  style={{
                    width: "40px",
                    height: "32px",
                    alignSelf: "center",
                    marginTop: "2px",
                    objectFit: "cover",
                  }}
                  src={vector}
                />
                <span
                  style={{
                    alignSelf: "center",
                    marginBottom: "3px",
                  }}
                >
                  code
                </span>
              </div>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={rectangle1}
              />
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
              }}
            >
              <div
                style={{
                  zIndex: "1",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  flexBasis: "100%",
                  paddingRight: "2px",
                  paddingTop: "3px",
                  paddingBottom: "2px",
                  marginBottom: "-100px",
                }}
              >
                <img
                  style={{
                    width: "48px",
                    height: "48px",
                    alignSelf: "center",
                    marginTop: "1px",
                    objectFit: "cover",
                  }}
                  src={articleFill0Wght400Grad0Opsz}
                />
                <span
                  style={{
                    alignSelf: "center",
                    marginBottom: "2px",
                  }}
                >
                  paper
                </span>
              </div>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={rectangle1}
              />
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
                marginLeft: "15px",
              }}
            >
              <div
                style={{
                  zIndex: "1",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  flexBasis: "100%",
                  paddingRight: "7px",
                  marginBottom: "-100px",
                }}
              >
                <img
                  style={{
                    width: "48px",
                    height: "48px",
                    alignSelf: "center",
                    marginBottom: "4px",
                    objectFit: "cover",
                  }}
                  src={datasetFill0Wght400Grad0Opsz}
                />
                <span
                  style={{
                    alignSelf: "center",
                    marginBottom: "1px",
                  }}
                >
                  data
                </span>
              </div>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={rectangle1}
              />
            </div>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              lineHeight: "54px",
              alignSelf: "flex-start",
              marginLeft: "7px",
            }}
          >
            SDGs
          </span>
          <span
            style={{
              letterSpacing: "-1px",
              fontSize: "1.25rem",
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            Sustainable Development Goals
          </span>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignSelf: "center",
              flexBasis: "15%",
              paddingRight: "80px",
              marginBottom: "21px",
            }}
          >
            <img
              style={{
                borderRadius: "5px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "120px",
                height: "120px",
                alignSelf: "flex-end",
                marginRight: "15px",
                objectFit: "cover",
              }}
              src={eWebGoal6}
            />
            <div
              style={{
                height: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
                flexBasis: "14%",
                marginTop: "1px",
                marginBottom: "4px",
              }}
            >
              <img
                style={{
                  borderRadius: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50px",
                  height: "50px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={eWebGoal2}
              />
              <img
                style={{
                  borderRadius: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50px",
                  height: "50px",
                  alignSelf: "flex-end",
                  objectFit: "cover",
                }}
                src={eWebGoal}
              />
            </div>
            <div
              style={{
                height: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
                marginLeft: "17px",
                marginBottom: "4px",
              }}
            >
              <img
                style={{
                  borderRadius: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50px",
                  height: "50px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={eWebGoal8}
              />
              <img
                style={{
                  borderRadius: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50px",
                  height: "50px",
                  alignSelf: "flex-start",
                  objectFit: "cover",
                }}
                src={eWebGoal4}
              />
            </div>
          </div>
          <span
            style={{
              letterSpacing: "-2px",
              lineHeight: "54px",
              alignSelf: "flex-start",
              marginLeft: "6px",
              marginTop: "3px",
            }}
          >
            Keywords
          </span>
          <div
            style={{
              color: "#fbfbf8",
              fontWeight: "500",
              fontSize: "1.25rem",
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignSelf: "center",
              flexBasis: "4%",
              paddingRight: "27px",
              marginBottom: "2px",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                alignSelf: "flex-start",
                marginRight: "15px",
              }}
            >
              <img
                style={{
                  borderRadius: "3px",
                  width: "85px",
                  height: "30px",
                  alignSelf: "flex-start",
                  marginBottom: "-23px",
                  objectFit: "cover",
                }}
                src={rectangle6}
              />
              <span
                style={{
                  letterSpacing: "-1px",
                  zIndex: "1",
                  alignSelf: "flex-start",
                }}
              >
                keyword
              </span>
            </div>
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "#b96c11",
                height: "90%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-start",
                flexBasis: "24%",
                paddingTop: "1px",
                marginBottom: "1px",
              }}
            >
              <span
                style={{
                  letterSpacing: "-1px",
                  alignSelf: "center",
                  marginTop: "1px",
                }}
              >
                keyword
              </span>
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "flex-start",
                flexBasis: "36%",
                marginLeft: "15px",
              }}
            >
              <button
                style={{
                  borderRadius: "3px",
                  backgroundColor: "#a818a2",
                  border: "none",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignSelf: "flex-start",
                  flexBasis: "88%",
                  marginBottom: "-23px",
                }}
              />
              <span
                style={{
                  letterSpacing: "-1px",
                  zIndex: "1",
                  alignSelf: "center",
                }}
              >
                long keyword
              </span>
            </div>
          </div>
          <div
            style={{
              width: "75%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              alignSelf: "center",
              flexBasis: "8%",
              paddingRight: "67px",
              marginLeft: "29px",
              marginBottom: "8px",
            }}
          >
            <img
              style={{
                zIndex: "1",
                width: "70px",
                height: "70px",
                alignSelf: "flex-end",
                marginRight: "9px",
                marginBottom: "-61px",
                objectFit: "cover",
              }}
              src={toggleOffFill0Wght400Grad0O}
            />
            <button
              style={{
                borderRadius: "5px",
                backgroundColor: "#d9d9d9",
                border: "none",
                fontFamily: "Inter, Arial",
                lineHeight: "30px",
                fontWeight: "500",
                fontSize: "1.563rem",
                color: "#1f2e59",
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                alignSelf: "flex-start",
                flexBasis: "73%",
                paddingLeft: "10px",
                marginTop: "-10px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  alignSelf: "center",
                }}
              >
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
