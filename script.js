$(document).ready(function () {
  var currentSequenceIndex = localStorage.getItem("sequenceIndex");
  if (currentSequenceIndex === null) {
      currentSequenceIndex = 0;
  } else {
      currentSequenceIndex = parseInt(currentSequenceIndex);
  }

  $(".reset").click(function () {
      location.reload(true);
  });

  $(".start").click(trivia);

  const sequences = ['95 98 12', '98 95 27', '80 12 98', '22 27 80'];

  function trivia() {

    var questions = [
      {
        "q": "What popular operating system, launched in 1991, also has its own mascot, Tux the penguin?",
        "s": ["Duolingo", "GitHub", "Linux", "Skull Candy"],
        "a": "Linux",
        "correct": 0
      },
      {

        "q": "Featuring vocals from Justin Timberlake, 'Ayo Technology' is a 2007 song that hit the Top Ten in both the UK and the US from what rapper whose name is also a sum of money?",
        "s": ["Ty Dolla Sign", "50 Cent", "A$AP Rocky", "Ke$ha"],
        "a": "50 Cent",
        "correct": 0
      },
      {
        "q": "What delicious computer term refers to information that is sent from the browser to the web server?",
        "s": ["Bean", "Cookie", "Cupcake", "Tomato"],
        "a": "Cookie",
        "correct": 0
      },
      {
        "q": "Which video game console released in 2006 pioneered the use of motion controls in its gameplay?",
        "s": ["PS4", "XBOX", "Nintendo Wii", "FIFA"],
        "a": "Nintendo Wii",
        "correct": 0
      },
      {
        "q": "What term is used for the most basic level or core of an operating system?",
        "s": ["CPU", "Kernel", "Seed", "Nucleus"],
        "a": "Kernel",
        "correct": 0
      },
      {
        "q": "Which AI system can create realistic images and art from a description in natural language?",
        "s": ["ChatGPT", "Bard", "Jasper", "DALL-E"],
        "a": "DALL-E",
        "correct": 0
      },
      {
        "q": "Who is the CEO of OpenAI?",
        "s": ["Elon Musk", "Mira Murati", "Sam Altman", "Greg Brockman"],
        "a": "Sam Altman",
        "correct": 0
      },
      {
        "q": "Which AI system gained widespread recognition by defeating the world chess champion in 1997?",
        "s": ["Deep Blue", "Watson", "AlphaGo", "Siri"],
        "a": "Deep Blue",
        "correct": 0
      },
      {
        "q": "Which company developed the widely used deep learning framework called TensorFlow?",
        "s": ["Apple", "Amazon", "Google", "Microsoft"],
        "a": "Google",
        "correct": 0
      },
      {
        "q": "What software development hosting company has an Octocat for the logo?",
        "s": ["GitLab", "Bitbucket", "SourceForge", "GitHub"],
        "a": "Github",
        "correct": 0
      },
      {
        "q": "As of 2019, search engine of what company was the source of the largest-known data breach in history?",
        "s": ["Google", "Bing", "Yahoo", "DuckDuckGo"],
        "a": "Yahoo",
        "correct": 0
      },
      {
        "q": "What college did Bill Gates graduate from?",
        "s": ["Harvard University", "Stanford University", "MIT", "None"],
        "a": "None",
        "correct": 0
      },
      {
        "q": "In what year did Apple introduce the standard lightning cable?",
        "s": ["2012", "2009", "2010", "2013"],
        "a": "2012",
        "correct": 0
      },
      {
        "q": "What palindromic technology uses radio waves to determine location information on objects?",
        "s": ["Lidar", "Sonar", "Radar", "GPS"],
        "a": "Radar",
        "correct": 0
      },
      {
        "q": "Which internet prank and meme in which an unexpected appearance of the music video for the song 'Never Gonna Give You Up' is 'planted' into an unrelated link?",
        "s": ["Planking", "Trolling", "Rickrolling", "Clickbaiting"],
        "a": "Rick rolling",
        "correct": 0
      },
      {
        "q": "'Think Different' was the tagline of which tech brand from 1997 to 2002?",
        "s": ["Microsoft", "Apple", "IBM", "Google"],
        "a": "Apple",
        "correct": 0
      },
      {
        "q": "After Effects is visual effects software made by which company?",
        "s": ["Autodesk", "Adobe", "Pixar", "Sony"],
        "a": "Adobe",
        "correct": 0
      },
      {
        "q": "What word is often abbreviated as Fn on a keyboard?",
        "s": ["Function", "Fingerprint", "Functioning", "Fancy"],
        "a": "Function",
        "correct": 0
      },
      {
        "q": "What does the initialism 'VPN' stand for?",
        "s": ["Virtual Personal Network", "Visual Private Network", "Virtual Public Network", "Virtual Private Network"],
        "a": "Virtual Private Network",
        "correct": 0
      },
      {
        "q": "Which primary memory is volatile in nature?",
        "s": ["ROM", "RAM", "Cache", "Hard Drive"],
        "a": "RAM",
        "correct": 0
      },
      {
        "q": "What company employs the largest number of language translators?",
        "s": ["Google", "Facebook", "Microsoft", "Amazon"],
        "a": "Google",
        "correct": 0
      },
      {
        "q": "Which tech giant was founded by Bill Gates and Paul Allen?",
        "s": ["Microsoft", "Apple", "Google", "Amazon"],
        "a": "Microsoft",
        "correct": 0
      },
      {
        "q": "Which of these companies was not started by Elon Musk?",
        "s": ["Tesla", "SolarCity", "Neuralink", "SpaceX"],
        "a": "SolarCity",
        "correct": 0
      },
      {
        "q": "What was the first widely-used web browser?",
        "s": ["Mosaic", "NetScape", "Nexus", "Internet Explorer"],
        "a": "Mosaic",
        "correct": 0
      },
      {
        "q": "What is the primary language used for building Android applications?",
        "s": ["Java", "Python", "Swift", "C++"],
        "a": "Java",
        "correct": 0
      },
      {
        "q": "Which company is known for its line of electric cars including models like Model S, Model 3, and Model X?",
        "s": ["Toyota", "Ford", "Tesla", "Chevrolet"],
        "a": "Tesla",
        "correct": 0
      },
      {
        "q": "Which programming language is commonly used for web development and is often associated with frameworks like Django and Flask?",
        "s": ["Java", "Ruby", "Python", "JavaScript"],
        "a": "Python",
        "correct": 0
      },
      {
        "q": "Dolly the sheep's birth in 1996 and subsequent life helped prove the viability of what scientific and technological process?",
        "s": ["Genetic Engineering", "Nanotechnology", "Cloning", "Biotechnology"],
        "a": "Cloning",
        "correct": 0
      },
      {
        "q": "\"Cars\" was the final Pixar film to be released on VHS and also the first to be released on what post-DVD high-resolution technology?",
        "s": ["HD DVD", "Blu-ray", "4K Ultra HD", "Streaming"],
        "a": "Blu-ray",
        "correct": 0
      },
      {
        "q": "THINK was the company motto for more than 40 years, for the company often referred to as 'Big Blue.' What is this company?",
        "s": ["Intel", "Microsoft", "IBM", "Apple"],
        "a": "IBM",
        "correct": 0
      },
      {
        "q": "The word 'cyborg' is a portmanteau of what two-word term describing a bionic human, according to Merriam-Webster?",
        "s": ["Cybernetic organism", "Artificial intelligence", "Cybersecurity Organiser", "Cybernetics Organiser"],
        "a": "Cybernetic organism",
        "correct": 0
      },
      {
        "q": "What medical device includes the Latin word for 'cloud' and has the ability to evaporate liquid medication into mist to enable users to inhale it into their lungs?",
        "s": ["Respirator", "Ventilator", "Nebulizer", "Inhaler"],
        "a": "Nebulizer",
        "correct": 0
      },
      {
        "q": "Which of these words is not included in the full form of PDF?",
        "s": ["Portable", "Document", "File", "Format"],
        "a": "File",
        "correct": 0
      },
      {
        "q": "\"Smart\" contact lenses developed at the University of California-Davis are being promoted as an innovative way to predict and detect what second-leading cause of blindness?",
        "s": ["Diabetes", "Macular degeneration", "Glaucoma", "Cataracts"],
        "a": "Glaucoma",
        "correct": 0
      },
      {
        "q": "First released with the 2020 MacBook Air, what is the alphanumeric name of the first Apple-designed processor used in its computers, which acts as a CPU and a GPU and is replacing many Intel Core chips?",
        "s": ["A9", "A1", "M1", "M2"],
        "a": "M1",
        "correct": 0
      },
      {
        "q": "Your computer is switching to a different _____ when you receive an HTTP code 101. What word fills in the blank?",
        "s": ["Server", "Process", "Protocol", "Domain"],
        "a": "Protocol",
        "correct": 0
      },
      {
        "q": "What British woman is considered to have written the first ever piece of computer software, developing an algorithm for Charles Babbage’s theoretical Analytical Engine in the 1840s? ",
        "s": ["Mary Shelley", "Ada Lovelace", "Jane Austen", "Emily Dickinson"],
        "a": "Ada Lovelace",
        "correct": 0
      },
      {
        "q": "As of March 2018, what is the world's best-selling PC game?",
        "s": ["World of Warcraft", "The Sims", "Minecraft", "Fortnite"],
        "a": "Minecraft",
        "correct": 0
      },
      {
        "q": "An error which causes the computer to shut down has which name?",
        "s": ["Critical", "Fatal", "Malicious", "Catastrophic"],
        "a": "Fatal",
        "correct": 0
      },
      {
        "q": "A computer program that translates a high-level language into machine language is called a what?",
        "s": ["Compiler", "Interpreter", "Assembler", "Debugger"],
        "a": "Compiler",
        "correct": 0
      },
      {
        "q": "A large computer where files are stored centrally has which name?",
        "s": ["Mainframe", "Supercomputer", "Server", "Workstation"],
        "a": "Server",
        "correct": 0
      },
      {
        "q": "Which hardware device connects a computer to a broadband network?",
        "s": ["Router", "Modem", "Switch", "Hub"],
        "a": "Modem",
        "correct": 0
      },
      {
        "q": "What is the process of verifying and recording transactions on the Bitcoin network called?",
        "s": ["Trading", "Hacking", "Mining", "Scamming"],
        "a": "Mining",
        "correct": 0
      },
      {
        "q": "What is the name for a type of malware that disguises itself as legitimate software to trick users into downloading and installing it?",
        "s": ["Spyware", "Adware", "Ransomware", "Trojan"],
        "a": "Trojan",
        "correct": 0
      },
      {
        "q": "How many bits are there in 10 bytes?",
        "s": ["64 bits", "80 bits", "128 bits", "160 bits"],
        "a": "80 bits",
        "correct": 0
      },
      {
        "q": "What is the name of the social media platform founded by Evan Spiegel, Bobby Murphy, and Reggie Brown?",
        "s": ["Facebook", "Instagram", "Twitter", "Snapchat"],
        "a": "Snapchat",
        "correct": 0
      },
      {
        "q": "What is the term for the public ledger where all Bitcoin transactions are recorded?",
        "s": ["Database", "Spreadsheet", "Registry", "Blockchain"],
        "a": "Blockchain",
        "correct": 0
      },
      {
        "q": "Apple took which company to court over using a GUI similar to their Lisa product?",
        "s": ["Google", "Microsoft", "Amazon", "Facebook"],
        "a": "Microsoft",
        "correct": 0
      },
      {
        "q": "What does the abbreviation 'ISP' stand for in the context of the internet?",
        "s": ["Internet Service Protocol", "Internet Service Provider", "Internet System Protocol", "Internet System Provider"],
        "a": "Internet Service Provider",
        "correct": 0
      },
      {
        "q": "What term is used to describe the process of transferring data wirelessly between two or more devices using Bluetooth technology?",
        "s": ["Syncing", "Linking", "Pairing", "Streaming"],
        "a": "Pairing",
        "correct": 0
      },
      {
        "q": "What is the name of the first commercially successful portable MP3 player, released by Apple in 2001?",
        "s": ["iPod Classic", "iPod Touch", "iPod Nano", "iPod Shuffle"],
        "a": "iPod Classic",
        "correct": 0
      }
    ];

    currentSequenceIndex = (currentSequenceIndex + 1) % sequences.length;

    localStorage.setItem("sequenceIndex", currentSequenceIndex);

    var counter = questions.length;
    var scoreAry = [];
    var score1 = 0;
    var score2 = true;

    function createQuestion(questions) {
      questions = shuffleArray(questions);
      
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
            '<button type="submit" class="mt-10 next text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">NEXT &#8594;</button>    <button name="reset" id="reset" class="reset focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-10">Reset</button></p></form>'
        );
      }
      for (var k = questions.length - 1; k > 0; k--) {
        $("#" + k).hide();
      }
    }

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    function radioButtons(ary, qNum) {
      var answers = [];
      for (var i = 0; i < ary.length; i++) {
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

    function sumScore(questions) {
      return scoreAry.reduce(function (prev, curr) {
        return prev + curr;
      }, 0);
    }

    function checkAnswer(answer, qNum, questions) {
      if (answer == questions[qNum].a) {
        questions[qNum].correct = 1;
        scoreAry.push(questions[qNum].correct);
        $("body")
          .css("background-color", "green")
          .delay(500)
          .queue(function () {
            $(this).css("background-color", "").dequeue();
          });
        score1++;
        if (score1 == 3 && score2) {
          $(".result").text("The sequence constant is: " + sequences[0]);
          score2 = false;
        }
      } else {
        scoreAry.push(questions[qNum].correct);
        $("body")
          .css("background-color", "red")
          .delay(500)
          .queue(function () {
            $(this).css("background-color", "").dequeue();
          });
        score1 = 0;
      }
    }

    createQuestion(questions);

    $(".next").click(function (event) {
      event.preventDefault();
      var qNum = $(this).closest("form").attr("id");
      var userInput = $("input[name=" + qNum + "]:radio:checked").val();
      if (counter > 1) {
        checkAnswer(userInput, qNum, questions);
        $("#" + qNum).hide();
        $("#" + qNum).next().show();
        counter--;
      } else if (counter == 1) {
        checkAnswer(userInput, qNum, questions);
        $("#questions")
          .find("form")
          .remove();
        $("#questions").append(
          '<p class="result focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"></p>'
        );
        $(".result").text(
          "You answered " +
            sumScore(questions) +
            " questions correctly out of " +
            questions.length +
            "."
        );
        for (var j = 0; j < scoreAry.length; j++) {
          if (scoreAry[j] === 0) {
            var resultClass = "result-" + j;
            $("#questions").append(
              '<p class="' +
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

      if (score1 == 3) {
        $("#questions").find("form").remove();
        $("#questions").append(
          '<p class="result focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"></p>'
        );
        $(".result").text(
          "You attempted " +
            sumScore(questions) +
            " questions correctly out of " +
            questions.length +
            "."
        );
        $(".result").append(
          "<p>The sequence constant is: " + sequences[currentSequenceIndex] + "</p>"
        );        
        return false;
      }
    });
  }
});