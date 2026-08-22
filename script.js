const questions = [
  {
    title: "🎉Happy Birthday🎉",
    message: "みんなを招待してパーティーを盛り上げよう！",
    question: "「スタート」と入力してね。",
    answer: "スタート",
    image: "cover.jpeg"
  },
  {
    title: "第2問",
    message: "この画像の場所に赤ちゃんマンたちがいるみたい！探し出して、メガネをかけているキャラクターの名前を入力してね。",
    question: "",
    answer: "ねむねむおじさん",
    image: "q2.jpeg"
  },
  {
    title: "第3問",
    message: "正解！この画像の場所に食パンマンたちもいるみたいだよ！探し出して、泣いているキャラクターの名前を入力してね。",
    question: "",
    answer: "こきんちゃん",
    image: "q3.jpeg"
  },
  {
    title: "第4問",
    message: "正解！他にもこの画像の場所にメロンパンナちゃんたちがいるみたい！探し出して、お姉ちゃんのキャラクターを入力してね。",
    question: "",
    answer: "ロールパンナ",
    image: "q4.jpeg"
  },
  {
    title: "第5問",
    message: "正解！みんなをパーティーに招待できてよかった！\nでもまって、ドキンちゃんがまだ来てないよ。コキンちゃんが居場所を知る謎のヒントを知ってみたい。謎を解いてキーワードを入力しよう。",
    question: "",
    answer: "あかるくえがお",
    image: "q5.png"
  },
  {
    title: "第6問",
    message: "正解！ドキンちゃんはここにいるよ！\nドキンちゃんを見つけたら、ドキンちゃんと一緒にいたキャラクターの名前を入力してね。",
    question: "",
    answer: "クリームパンダ",
    image: "q6.jpeg"
  },
  {
    title: "第7問",
    message: "ドキンちゃんとクリームパンダも来たね！もうみんな来たかな？\nそういえば！まだバイキンマンが来てない！\nまったくどこに行ったの。\nコキンちゃんとドキンちゃんに謎のヒントを聞いてキーワードを入力しよう。",
    question: "",
    answer: "かぞくのきずな",
    image: "q7.png"
  },
  {
    title: "第8問",
    message: "正解！バイキンマンはここにいるよ！",
    question: "バイキンマンを見つけたら、「見つけた」と入力してね。",
    answer: "見つけた",
    image: "q8.jpeg"
  }
];

let current = 0;

const progress = document.getElementById("progress");
const title = document.getElementById("title");
const message = document.getElementById("message");
const question = document.getElementById("question");
const image = document.getElementById("puzzleImage");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const game = document.getElementById("game");
const complete = document.getElementById("complete");

function normalize(value) {
  return value.trim().replace(/\s+/g, "");
}

function showQuestion() {
  const q = questions[current];
  progress.textContent = `${current + 1} / ${questions.length}`;
  title.textContent = q.title;
  message.textContent = q.message;
  question.textContent = q.question;

  if (q.image) {
    image.src = q.image;
    image.alt = `${q.title}の画像`;
    image.style.display = "block";
  } else {
    image.removeAttribute("src");
    image.style.display = "none";
  }

  answer.value = "";
  result.textContent = "";
  result.className = "result";
  answer.focus();
}

function checkAnswer() {
  const q = questions[current];
  if (normalize(answer.value) !== normalize(q.answer)) {
    result.textContent = "まだ違うみたい。もう一度考えてみてね！";
    result.className = "result incorrect";
    return;
  }

  result.textContent = "正解！";
  result.className = "result correct";

  setTimeout(() => {
    current++;
    if (current >= questions.length) {
      game.classList.add("hidden");
      complete.classList.remove("hidden");
      window.scrollTo({top: 0, behavior: "smooth"});
    } else {
      showQuestion();
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }, 600);
}

submit.addEventListener("click", checkAnswer);
answer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

showQuestion();
