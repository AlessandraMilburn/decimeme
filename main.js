//Grabbing the submitted information
const words = new URLSearchParams(window.location.search);

// Assigning submitted question to a variable
const question = words.get('question');

// Generating the random number for random selection
let randomNumber = Math.floor(Math.random() * 11);

// Generating the matched result from the random number to the answer
switch (randomNumber) {
  //NO ANSWER GIFS
  case 0:
    answer = '<iframe src="https://giphy.com/embed/YWFmlljmSpo6k" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 1:
    answer = '<iframe src="https://giphy.com/embed/d10dMmzqCYqQ0" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 2:
    answer = '<iframe src="https://giphy.com/embed/5xtDarC0XyqmUhD5eDK" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 3:
    answer = '<iframe src="https://giphy.com/embed/3o85xxUdeHWUY0G0IE" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 4:
    answer = '<iframe src="https://giphy.com/embed/spfi6nabVuq5y" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 5:
    answer = '<iframe src="https://giphy.com/embed/1iTIu7WtSfPqMDbW" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  // TRY AGAIN ANSWER GIFS
  case 6:
    // let's try this again
    answer = '<iframe src="https://giphy.com/embed/H88IyldqT6hHCt3E4F" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  // YES ANSWER GIFS
  case 7:
    // the short answer is yes
    answer = '<iframe src="https://giphy.com/embed/1lam28VdrtpWE" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 8:
    // yes relatively
    answer = '<iframe src="https://giphy.com/embed/12Bmr39jDI6BLq" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 9:
    // yes
    answer = '<iframe src="https://giphy.com/embed/yFs12GkGa4Cpq" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 10:
    //signs point to yes
    answer = '<iframe src="https://giphy.com/embed/3o6Yg0PuNRutL82zHW" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  case 11:
    //stanley head nod
    answer = '<iframe src="https://giphy.com/embed/xTk9ZUcTFDLNSu9tks" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
  default:
    //yes head nod Will Ferrel
    answer = '<iframe src="https://giphy.com/embed/H6Qqxi3RsbyuCry8Ma" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    break;
};

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with answer
title.innerHTML = `${question}?`;

//Grabbing the render box
const answerEl = document.getElementById('answer');
// Populating the rendered link
answerEl.innerHTML = answer;

