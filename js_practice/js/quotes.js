const quotes = [
    {
        quotes: "싸우자하면 살것이고 살고자 하면 죽을것이다.",
        author: "이순신"
    },
    {
        quotes: "더 나은 미래를 위해 싸운다",
        author: "제이스"
    },
    {
        quotes: "백성들이 읽기 쉬운 글자를 만들겠다",
        author: "세종대왕"
    },
    {
        quotes: "고양이는 귀엽다",
        author: "고양이"
    },
    {
        quotes: "아침엔 일찍자도 졸리다",
        author: "장현욱"
    },
    {
        quotes: "주말은 몇일을 줘도 짧다.",
        author: "직장인"
    },
    {
        quotes: "공부할려고 하면 갑자기 재미없던게 재밌어진다.",
        author: "학생"
    },
    {
        quotes: "세상엔 생각보다 존재하는게 많다",
        author: "개발자"
    },
    {
        quotes: "인생 힘들다",
        author: "취준생"
    },
    {
        quotes: "자고싶다",
        author: "나"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quotes
author.innerText = todayQuote.author