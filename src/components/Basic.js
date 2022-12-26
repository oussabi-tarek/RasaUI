import "./chatBot.css";
import react, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { BiBot, BiUser } from "react-icons/bi";

function Basic() {
  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setbotTyping] = useState(false);

  useEffect(() => {
    console.log("called");
    const objDiv = document.getElementById("messageArea");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [chat]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "shreyas";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };

    if (inputMessage !== "") {
      setChat((chat) => [...chat, request_temp]);
      setbotTyping(true);
      setInputMessage("");
      rasaAPI(name, inputMessage);
    } else {
      window.alert("Please enter valid message");
    }
  };

  const rasaAPI = async function handleClick(name, msg) {
    //chatData.push({sender : "user", sender_id : name, msg : msg});
    if (msg === "السلام عليكم" || msg == "مرحبا") {
      console.log("arabic");
      let recipient_msg;
      if (msg == "مرحبا") {
        recipient_msg = " مرحبا بك  كيف يمكنني مساعدتك";
      } else {
        recipient_msg = " وعليكم السلام ورحمة الله وبركاته كيف يمكنني مساعدتك";
      }
      let recipient_id = "tarek";
      playarabe(recipient_msg);
      const response_temp = {
        sender: "bot",
        recipient_id: recipient_id,
        msg: recipient_msg,
      };
      setbotTyping(false);

      setChat((chat) => [...chat, response_temp]);
    } else if (msg === "Bonjour" || msg == "Bonsoir" || msg == "Salut") {
      let recipient_msg = "Bonjour Comment je peux t'aider";

      let recipient_id = "tarek";
      playfrance(recipient_msg);
      const response_temp = {
        sender: "bot",
        recipient_id: recipient_id,
        msg: recipient_msg,
      };
      setbotTyping(false);
      setChat((chat) => [...chat, response_temp]);
    } else if (msg.includes("التعلم الألي")) {
      let recipient_msg;
      recipient_msg =
        "يمكّنك التعلم الآلي من Oracle من حل مشاكل الأعمال الرئيسية للمؤسسة ويسرع من تطوير ونشر علوم البيانات والحلول المستندة إلى التعلم الآلي. استفد من التعلم الآلي القابل للتطوير والآلي والآمن لمواجهة تحديات استكشاف البيانات وإعدادها بالإضافة إلى بناء النماذج وتقييمها ونشرها. سواء كانت اهتماماتك تتضمن واجهات برمجة التطبيقات لـ SQL أو Python أو R أو REST ، أو كنت تفضل واجهات مستخدم لا تحتوي على تعليمات برمجية ، فإن Oracle توفر الدعم لتطوير الحلول ونشرها.";

      let recipient_id = "tarek";
      playarabe(recipient_msg);
      const response_temp = {
        sender: "bot",
        recipient_id: recipient_id,
        msg: recipient_msg,
      };
      setbotTyping(false);

      setChat((chat) => [...chat, response_temp]);
    } else if (msg.includes("Machine learning")) {
      let recipient_msg =
        "Oracle Machine Learning vous permet de résoudre les principaux problèmes commerciaux de l'entreprise et accélère le développement et le déploiement de solutions basées sur la science des données et l'apprentissage automatique. Bénéficiez d'un apprentissage automatique évolutif, automatisé et sécurisé pour relever les défis de l'exploration et de la préparation des données, ainsi que de la création, de l'évaluation et du déploiement de modèles. Que vos intérêts incluent les API pour SQL, Python, R ou REST, ou que vous préfériez les interfaces utilisateur sans code, Oracle fournit une assistance pour le développement et le déploiement de solutions.";

      let recipient_id = "tarek";
      playfrance(recipient_msg);
      const response_temp = {
        sender: "bot",
        recipient_id: recipient_id,
        msg: recipient_msg,
      };
      setbotTyping(false);
      setChat((chat) => [...chat, response_temp]);
    } else {
      // const detectLanguage = require("detect-language");
      // const language = detectLanguage.detect("Hello, world!"); // "en"
      // console.log("language: " + language);
      await fetch("http://localhost:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          charset: "UTF-8",
        },
        credentials: "same-origin",
        body: JSON.stringify({ sender: name, message: msg }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response) {
            if (response.length > 1) {
              for (let i = 0; i < response.length; i++) {
                let temp = response[i];
                let recipient_id = temp["recipient_id"];
                let recipient_msg;
                if (temp["text"] === undefined) {
                  recipient_msg = temp["image"];
                } else {
                  recipient_msg = temp["text"];
                }
                let response_temp = {
                  sender: "bot",
                  recipient_id: recipient_id,
                  msg: recipient_msg,
                };
                setbotTyping(false);

                setChat((chat) => [...chat, response_temp]);
              }
            } else {
              const temp = response[0];
              const recipient_id = temp["recipient_id"];
              const recipient_msg = temp["text"];
              play(recipient_msg);
              const response_temp = {
                sender: "bot",
                recipient_id: recipient_id,
                msg: recipient_msg,
              };
              setbotTyping(false);

              setChat((chat) => [...chat, response_temp]);
              // scrollBottom();
            }
          }
        });
    }
  };

  console.log(chat);

  const stylecard = {
    maxWidth: "35rem",
    border: "1px solid black",
    paddingLeft: "0px",
    paddingRight: "0px",
    borderRadius: "30px",
    boxShadow: "0 16px 20px 0 #4327e2s",
  };
  const styleHeader = {
    height: "4.5rem",
    borderBottom: "1px solid black",
    borderRadius: "30px 30px 0px 0px",
    backgroundColor: "#4327e2",
  };
  const styleFooter = {
    //maxWidth : '32rem',
    borderTop: "1px solid black",
    borderRadius: "0px 0px 30px 30px",
    backgroundColor: "#4327e2",
  };
  const styleBody = {
    paddingTop: "10px",
    height: "28rem",
    overflowY: "a",
    overflowX: "hidden",
  };
  const stylevoice = {
    width: "300px",
    height: "400px",
  };

  const VoiceRecorder = (event) => {
    event.preventDefault();

    if (!("SpeechRecognition" in window)) {
      // SpeechRecognition is not supported, so use a polyfill
      window.SpeechRecognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;
    }
    const recognition = new window.SpeechRecognition();
    const transcriptElement = document.getElementById("transcript");

    transcriptElement.textContent = "";
    // Start the recognition
    recognition.start();
    recognition.addEventListener("result", (event) => {
      // Get the transcribed text
      const transcript = event.results[0][0].transcript;
      // Add the transcribed text to the page
      console.log("voice: " + transcript);

      async function hi() {
        await fetch("http://localhost:5005/webhooks/rest/webhook", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            charset: "UTF-8",
          },
          credentials: "same-origin",
          body: JSON.stringify({ sender: "user", message: transcript }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response) {
              response = JSON.stringify(response);
              console.log(response);
              response = JSON.parse(response);
              if (response.length > 1) {
                console.log("djd");
                for (let i = 0; i < response.length; i++) {
                  let temp = response[i];
                  // let recipient_id = temp["recipient_id"];
                  let recipient_msg;

                  recipient_msg = temp["text"];
                  play(recipient_msg);
                  const response_temp = {
                    sender: "bot",
                    recipient_id: "tarek",
                    msg: recipient_msg,
                  };
                  setbotTyping(false);

                  setChat((chat) => [...chat, response_temp]);
                }
              } else {
                const temp = response[0];
                console.log(temp);

                const recipient_msg = temp["text"];
                play(recipient_msg);
                const response_temp = {
                  sender: "bot",
                  recipient_id: "tarek",
                  msg: recipient_msg,
                };
                setbotTyping(false);

                setChat((chat) => [...chat, response_temp]);
                // scrollBottom();
              }
            }
          });
      }

      if (transcript.includes("Assalam") || transcript.includes("Marhaba")) {
        console.log("arabic");
        let recipient_msg;
        if (transcript.includes("Marhaba")) {
          recipient_msg = " مرحبا بك  كيف يمكنني مساعدتك";
        } else {
          recipient_msg =
            " وعليكم السلام ورحمة الله وبركاته كيف يمكنني مساعدتك";
        }
        let recipient_id = "tarek";
        playarabe(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);

        setChat((chat) => [...chat, response_temp]);
      } else if (
        transcript.includes("Bonjour") ||
        transcript.includes("Bonsoir") ||
        transcript.includes("Salut")
      ) {
        let recipient_msg = "Bonjour Comment je peux t'aider";

        let recipient_id = "tarek";
        playfrance(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);
        setChat((chat) => [...chat, response_temp]);
      } else if (transcript.includes("A Tylenol Ali")) {
        let recipient_msg;
        recipient_msg =
          "يمكّنك التعلم الآلي من Oracle من حل مشاكل الأعمال الرئيسية للمؤسسة ويسرع من تطوير ونشر علوم البيانات والحلول المستندة إلى التعلم الآلي. استفد من التعلم الآلي القابل للتطوير والآلي والآمن لمواجهة تحديات استكشاف البيانات وإعدادها بالإضافة إلى بناء النماذج وتقييمها ونشرها. سواء كانت اهتماماتك تتضمن واجهات برمجة التطبيقات لـ SQL أو Python أو R أو REST ، أو كنت تفضل واجهات مستخدم لا تحتوي على تعليمات برمجية ، فإن Oracle توفر الدعم لتطوير الحلول ونشرها.";

        let recipient_id = "tarek";
        playarabe(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);

        setChat((chat) => [...chat, response_temp]);
      } else if (transcript.includes("machine learning")) {
        if (transcript.includes("Oracle")) {
          hi();
        } else {
          let recipient_msg =
            "Oracle Machine Learning vous permet de résoudre les principaux problèmes commerciaux de l'entreprise et accélère le développement et le déploiement de solutions basées sur la science des données et l'apprentissage automatique. Bénéficiez d'un apprentissage automatique évolutif, automatisé et sécurisé pour relever les défis de l'exploration et de la préparation des données, ainsi que de la création, de l'évaluation et du déploiement de modèles. Que vos intérêts incluent les API pour SQL, Python, R ou REST, ou que vous préfériez les interfaces utilisateur sans code, Oracle fournit une assistance pour le développement et le déploiement de solutions.";

          let recipient_id = "tarek";
          playfrance(recipient_msg);
          const response_temp = {
            sender: "bot",
            recipient_id: recipient_id,
            msg: recipient_msg,
          };
          setbotTyping(false);
          setChat((chat) => [...chat, response_temp]);
        }
      } else if (transcript.includes("Thank")) {
        let recipient_msg = "Welcome at any time";

        let recipient_id = "tarek";
        play(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);
        setChat((chat) => [...chat, response_temp]);
      } else if (transcript.includes("Merc")) {
        let recipient_msg = "De rien à tout moment";

        let recipient_id = "tarek";
        playfrance(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);
        setChat((chat) => [...chat, response_temp]);
      } else if (transcript.includes("Shukran")) {
        let recipient_msg = "  على الرحب والسعة تحياتي للأستادة ";

        let recipient_id = "tarek";
        playarabe(recipient_msg);
        const response_temp = {
          sender: "bot",
          recipient_id: recipient_id,
          msg: recipient_msg,
        };
        setbotTyping(false);
        setChat((chat) => [...chat, response_temp]);
      } else {
        hi();
      }
    });
  };

  function playfrance(recipient_msg) {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(recipient_msg);
    utterance.lang = "fr-FR";
    synthesis.speak(utterance);
  }

  function playarabe(recipient_msg) {
    const synthesis = window.speechSynthesis;

    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(recipient_msg);

    // Set the language to Modern Standard Arabic
    utterance.lang = "ar-AE";

    // Synthesize the text to speech
    synthesis.speak(utterance);
  }
  function play(recipient_msg) {
    const synthesis = window.speechSynthesis;

    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(recipient_msg);

    // Set the language to Modern Standard Arabic
    utterance.lang = "en-US";

    // Synthesize the text to speech
    synthesis.speak(utterance);
    // const recognition = new window.webkitSpeechRecognition();
    // recognition.lang = "ar-AE";
    // recognition.onresult = function (event) {
    //   const transcript = event.results[0][0].transcript;
    //   console.log(transcript);
    // };
    // // recognition.start();
    // const synthesis = window.speechSynthesis;
    // const utterance = new SpeechSynthesisUtterance(recipient_msg);
    // synthesis.speak(utterance);
  }

  const basic = {
    position: "absolute",
    width: "600px",

    right: "200px",
  };
  return (
    <div style={basic}>
      <h1 id="transcript"></h1>
      {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="card" style={stylecard}>
            <div className="cardHeader text-white" style={styleHeader}>
              <h1 style={{ marginBottom: "0px" }}>OML Assistant</h1>
              {botTyping ? <h6>Bot Typing....</h6> : null}
            </div>
            <div className="cardBody" id="messageArea" style={styleBody}>
              <div className="row msgarea">
                {chat.map((user, key) => (
                  <div key={key}>
                    {user.sender === "bot" ? (
                      <div className="msgalignstart">
                        <BiBot className="botIcon" />
                        <h5 className="botmsg">
                          {user.msg.includes("https://") ? (
                            <img
                              style={{ width: "120px", height: "120px" }}
                              src={user.msg}
                            ></img>
                          ) : (
                            user.msg
                          )}
                        </h5>
                      </div>
                    ) : (
                      <div className="msgalignend">
                        <h5 className="usermsg">{user.msg}</h5>
                        <BiUser className="userIcon" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="cardFooter text-white" style={styleFooter}>
              <div className="row">
                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                  <div className="col-8" style={{ paddingRight: "0px" }}>
                    <input
                      onChange={(e) => setInputMessage(e.target.value)}
                      value={inputMessage}
                      type="text"
                      className="msginp"
                    ></input>
                  </div>
                  <div className="col-4 cola">
                    <button type="submit" className="circleBtn">
                      <IoMdSend className="sendBtn" />
                    </button>
                    <button
                      className="circleBtn"
                      id="voice"
                      onClick={VoiceRecorder}
                    >
                      <MdOutlineSettingsVoice className="sendBtn" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
