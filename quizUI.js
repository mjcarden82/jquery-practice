
var Questions = [
  new question("What color is the sky?", "blue", "green", "blue"),
  new question("What color are my eyes?", "blue", "green", "blue"),
  new question("What color is the ocean?", "blue", "green", "blue")
];


function question(text, choice1, choice2, answer) {
  this.text = text;
  this.choices = choice1;
  this.choices = choice2;
  this.answer = answer;
}



Questions.prototype.isAnswerCorrect = function () {
  if(this.choice === this.answer) {
    score++;
  }




Questions.prototype.toHTML = function() {
    var htmlString = '<h2>';
    htmlString += 'this.text';
    htmlString += '<p class="choice1">';
    htmlString += 'this.choice1 </p>';
    htmlString += '<p class="choice2">';
    htmlString += 'this.choice2 </p>';
    return htmlString;
};




function Quiz(questions) {
  this.score = 0;
  this.Questions = Questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.choice = function(answer) {
  if(this.choice = this.answer) {
    this.score++;
  }
  this.currentQuestionIndex++;
};
