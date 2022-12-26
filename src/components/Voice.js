import react, { useEffect, useState } from "react";

function Voice() {
  const synthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(
    " هلا بكم ارحبوا ! أنا روبوت وأنا هنا لمساعدتك في فهم كل مايخص التعليم الألي "
  );
  // Set the language to Modern Standard Arabic
  utterance.lang = "ar-AE";
  // Synthesize the text to speech
  synthesis.speak(utterance);

  //   utterance = new SpeechSynthesisUtterance(
  //     "Hello IRISI! I am a bot and I am here to help you understanding Oracle Machine Learning and AutoML "
  //   );
  //   utterance.lang = "en-US";
  //   synthesis.speak(utterance);

  return <div></div>;
}
export default Voice;
