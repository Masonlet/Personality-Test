// Personality Categories
const Extraversion = 1;
const Agreeableness = 2;
const Conscientiousness = 3;
const Stability = 4;
const Intellect = 5;

// Question Answers
const Very_Inaccurate = 1;
const Moderately_Inaccurate = 2;
const Neither_Accurate_Nor_Inaccurate = 3;
const Moderately_Accurate = 4;
const Very_Accurate = 5;

// Questions
const questions = new Map([
    ["Am the life of the party", Extraversion],
    ["Feel little concern for others.", -Agreeableness],
    ["Am always prepared.", Conscientiousness],
    ["Get stressed out easily.", -Stability],
    ["Have a rich vocabulary.", Intellect],
    ["Don't talk a lot", -Extraversion],
    ["Am interested in people", Agreeableness],
    ["Leave my belongings around", -Conscientiousness],
    ["Am relaxed most of the time", Stability],
    ["Have difficulty understanding abstract ideas", -Intellect],
    ["Feel comfortable around people", Extraversion],
    ["Insult people.", -Agreeableness],
    ["Pay attention to details.", Conscientiousness],
    ["Worry about things.", -Stability],
    ["Have a vivid imagination.", 5],
    ["Keep in the background.", -Extraversion],
    ["Sympathize with others' feelings.", Agreeableness],
    ["Make a mess of things.", -Conscientiousness],
    ["Seldom feel blue.", Stability],
    ["Am not interested in abstract ideas", -Intellect],
    ["Start conversations", Extraversion],
    ["Am not interested in other people's problems.", -Agreeableness],
    ["Get chores done right away.", Conscientiousness],
    ["Am easily disturbed", -Stability],
    ["Have excellent ideas", Intellect],
    ["Have little to say.", -Extraversion],
    ["Have a soft heart.", Agreeableness],
    ["Often forget to put things back in their proper place", -Conscientiousness],
    ["Get upset easily.", -Stability],
    ["Do not have a good imagination.", -Intellect],
    ["Talk to a lot of different people at parties.", Extraversion],
    ["Am not really interested in others", -Agreeableness],
    ["Like order.", Conscientiousness],
    ["Change my mood a lot.", -Stability],
    ["Am quick to understand things.", 5],
    ["Don't like to draw attention to myself.", -Extraversion],
    ["Take time out for others.", Agreeableness],
    ["Shirk my duties.", -Conscientiousness],
    ["Have frequent mood swings.", -Stability],
    ["Use difficult words.", Intellect],
    ["Don't mind being the center of attention.", Extraversion],
    ["Feel others' emotions.", Agreeableness],
    ["Follow a schedule.", Conscientiousness],
    ["Get irritated easily.", -Stability],
    ["Spend time reflecting on things.", Intellect],
    ["Am quiet around strangers.", -Extraversion],
    ["Make people feel at ease.", Agreeableness],
    ["Am exacting in my work.", Conscientiousness],
    ["Often feel blue.", -Stability],
    ["Am full of ideas.", Intellect]
]);

// Users Scores
scores = [0, 0, 0, 0, 0];

// Score Function
function editScore(category, value) {
    if (value < 0) {
        scores[category] -= Math.abs(value);
    }
    else {
        scores[category] += value;
    }
}

// Start Function
function start(){
    document.getElementById("beginButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "visible";
    sessionStorage.setItem("index", 0);
}

function update() {
   
}

function nextQuestion() {
    let index = sessionStorage.getItem("index");
    
    if(index >= 0){
        document.getElementById("prevButton").style.visibility = "visible";
    }

    index++;
    sessionStorage.setItem("index", index);
    update();

    if(index === questions.size - 2) { 
        document.getElementById("nextButton").style.visibility = "hidden";
        return;
    }
}

function prevQuestion() {
    let index = sessionStorage.getItem("index");

    index--;
    sessionStorage.setItem("index", index);
    update();

    if(index <= 0) {
        document.getElementById("prevButton").style.visibility = "hidden";
        return;
    }
    else if (document.getElementById("nextButton").style.visibility === "hidden") {
        document.getElementById("nextButton").style.visibility = "visible";
    }
}

document.getElementById("beginButton").addEventListener("click", () => start());
document.getElementById("prevButton").addEventListener("click", () => prevQuestion());
document.getElementById("nextButton").addEventListener("click", () => nextQuestion());