$(document).ready(function () {
  $(".reset").click(function () {
    location.reload(true);
  });
  $(".start").click(trivia);

  function trivia() {
    var scoreAry = [];
    var questions = [
      {
        q: "What is the name of the Paranoid Android in Douglas Adams’ ‘Hitchhiker’s Guide to the Galaxy’?",
        s: ["Andy", "Bob", "Susan", "Marvin"],
        a: "Marvin",
        correct: 0,
      },
      {
        q: "In Monopoly, the green set consists of Pacific Avenue, North Carolina Avenue and which other?",
        s: [
          "Oxford Street",
          "Pennsylvania Avenue",
          "Park Place",
          "New York Avenue",
        ],
        a: "Pennsylvania Avenue",
        correct: 0,
      },
      {
        q: "Who created Snoopy?",
        s: [
          "George Herriman",
          "Charles M. Schulz",
          "Jim Davis",
          " Garry Trudeau",
        ],
        a: "Charles M. Schulz",
        correct: 0,
      },
      {
        q: "What was the name of the tallest Warner brother in Animaniacs?",
        s: ["Dot", "Yakko", "Wacko", "Pinky"],
        a: "Yakko",
        correct: 0,
      },
      {
        q: "After how many years would you celebrate your crystal anniversary?",
        s: ["5", "10", "15", "20"],
        a: "15",
        correct: 0,
      },
      {
        q: "Which sign of the zodiac would you be if your birthday was on October 18?",
        s: ["Virgo", "Cancer", "Libra", "Pices"],
        a: "Libra",
        correct: 0,
      },
      {
        q: "Which birthstone is associated with the month of May?",
        s: ["Diamond", "Peridot", "Sapphire", "Emerald"],
        a: "Emerald",
        correct: 0,
      },
      {
        q: "What is the capital city of Afghanistan?",
        s: ["Istanbul", "Constantinople", "Kabul", "Ghazni"],
        a: "Kabul",
        correct: 0,
      },
      {
        q: "In which country is Mount Everest?",
        s: ["The Himalayas", "Nepal", "Tibet", "India"],
        a: "Nepal",
        correct: 0,
      },
      {
        q: "What is the abbreviation for Potassium in the Periodic Table of Elements?",
        s: ["Po", "Pa", "K", "Ps"],
        a: "K",
        correct: 0,
      },
    ];

    var counter = questions.length;

    //This grabs the question and answer data from the questions array and appends it to the #questions div:
    function createQuestion(questions) {
      for (var i = 0; i < questions.length; i++) {
        $(".start").hide();
        $("#questions").append(
          '<form id="' +
            i +
            '" class="center-text max-w-md mx-auto "><p class=" mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Question ' +
            (i + 1) +
            " of " +
            questions.length +
            '</p><h3 class="question ">' +
            questions[i].q +
            "</h3>" +
            radioButtons(questions[i].s, i) +
            '<button type="submit" class="mt-10 next text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"">NEXT &#8594;</button>    <button name="reset" id="reset" class="reset focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-10">Reset</button></p></form>'
        );
      }
      //This hides all except the first question:
      for (var k = questions.length - 1; k > 0; k--) {
        $("#" + k).hide();
      }
    }

    ///progress bar

    $(document).ready(function () {
      var totalQuestions = $("form").length;
      var progressBar = $("#progress-bar");

      $("form").submit(function (event) {
        event.preventDefault();
        var currentIndex = parseInt($(this).attr("id"));
        var progress = ((currentIndex + 1) / totalQuestions) * 100;
        progressBar.val(progress);

        $("#" + currentIndex).hide();
        $("#" + (currentIndex + 1)).show();
      });
    });

    //This grabs the answer choices from the questions array and returns them to createQuestion():
    function radioButtons(ary, qNum) {
      var answers = [];
      for (i = 0; i < ary.length; i++) {
        answers.push(
          '<label class="w-full py-4 ms-2 text-sm font-medium text-white dark:text-white"><div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"><input class="  m-4 w-4 h-4 text-white bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="' +
            qNum +
            '" value="' +
            ary[i] +
            '">' +
            ary[i] +
            "</div></label>"
        );
      }
      return answers.join(" ");
    }

    //This sums the correct values in the questions array:
    function sumScore(questions) {
      return scoreAry.reduce(function (
        previousValue,
        currentValue,
        index,
        array
      ) {
        return previousValue + currentValue;
      });
    }

    //This checks the user's answer and updates the score:
    function checkAnswer(answer, qNum, questions) {
      if (answer == questions[qNum].a) {
        questions[qNum].correct = 1;
        scoreAry.push(questions[qNum].correct);
      } else {
        scoreAry.push(questions[qNum].correct);
      }
    }

    createQuestion(questions);

    $(".next").click(function (event) {
      event.preventDefault(); //This stops the form from submitting
      var qNum = $(this).closest("form").attr("id"); //This gives us the question number
      var userInput = $("input[name=" + qNum + "]:radio:checked").val(); //This grabs the user's selected answer
      if (counter > 1) {
        checkAnswer(userInput, qNum, questions);
        $("#" + qNum).hide();
        $("#" + qNum)
          .next()
          .show();
        counter--;
      } else if (counter == 1) {
        checkAnswer(userInput, qNum, questions);
        $("#questions").find("form").remove();
        $("#questions").append(
          '<p class="result focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"></p>'
        );
        $(".result").text(
          "You answered " +
            sumScore(questions) +
            " questions correctly out of 10."
        );
        for (j = 0; j < scoreAry.length; j++) {
          if (scoreAry[j] === 0) {
            console.log(questions[j].q, questions[j].a);
            var resultClass = "result-" + j;
            $("#questions").append(
              '<p class="   ' +
                resultClass +
                '">You missed: ' +
                questions[j].q +
                " " +
                questions[j].a +
                "</p>"
            );
          }
        }
      } else {
        return false;
      }
    });
  }
});
