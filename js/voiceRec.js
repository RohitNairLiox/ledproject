  function voiceRec() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();
      document.getElementById('transcript').innerHTML = "";
      document.getElementById('transcriptRes').innerHTML = "Listening.....";
      recognition.onresult = function(e) {
        var resultText = e.results[0][0].transcript;
        document.getElementById('transcript').innerHTML = "You said: " + resultText;
        recognition.stop();
        var transcriptResult = document.getElementById('transcriptRes');
        resultText = resultText.toLowerCase();
        if(resultText == "on the light" || resultText == "on light" || resultText == "on the led" || resultText == "on led" || resultText == "on"){
        	ledON();
        	transcriptResult.innerHTML = "";
        }
        else if(resultText == "off the light" || resultText == "off light" || resultText == "off the led" || resultText == "off led" || resultText == "of" || resultText == "off"){
        	ledOFF();
        	transcriptResult.innerHTML = "";
        }
        else{
        	transcriptResult.innerHTML = "Could you please try saying: <em>on/off the light, on/off the led, on/off light, on/off led, on/off, on/of</em>";
          $("#alertSection").removeClass("in");
        }
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }
