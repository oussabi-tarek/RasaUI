import react, { useEffect, useState } from "react";

function Voice2() {
  const synthesis = window.speechSynthesis;

  const utterance = new SpeechSynthesisUtterance(
    "Bonjour IRISI les Champions ! Je suis un bot et je suis là pour vous aider à comprendre Oracle Machine Learning et AutoML"
  );
  // Set the language to Modern Standard Arabic
  //   utterance.lang = "en-US";
  // Synthesize the text to speech
  //   synthesis.speak(utterance);
  // Create a new SpeechSynthesisUtterance object
  //   const utterance = new SpeechSynthesisUtterance(
  //     " هلا بكم ارحبوا ! أنا روبوت وأنا هنا لمساعدتك في فهم كل مايخص التعليم الألي "
  //   );
  //   // Set the language to Modern Standard Arabic
  //   utterance.lang = "ar-AE";
  //   // Synthesize the text to speech
  //   synthesis.speak(utterance);

  utterance.lang = "fr-FR";
  synthesis.speak(utterance);

  return <div></div>;
}
export default Voice2;
