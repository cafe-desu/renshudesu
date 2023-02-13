window.onload = function(){
    let mondai = document.getElementById('question1');
    console.log("読み込みました")
    return{
        mondai
    };
  }
let answer = -1;
let bunki = 0;
let tokushu =0;
let tercher = ["西脇先生", "鷲尾先生" , "平野先生" , "悟先生" , "浩道先生" , "宮越先生" , "賀村先生"]
let question = ["それは男性ですか？" , "理科の先生ですか？" , "音楽の先生ですか？" , "技術の先生ですか？" ,
                "社会の先生ですか？" , "数学の先生ですか？" , "英語の先生ですか？" , "体育の先生ですか？" , 
                "いつも眼鏡をかけていますか？" , "実技を担当してる先生ですか？", "普段スーツですか？" , "運動部の顧問ですか？" ,
                "理系科目を担当していますか？" ,]
function kasan (){
    answer += 1;
}
function genzan(){
    bunki += 1;
}
window.onload().mondai.innerText = "読み込みました"
function hikaku(){
    if (answer === 0 && bunki === 0){
        window.onload().mondai.innerText = question[0];
    }else if (answer === 1 && bunki === 0 && tokushu ===0){
        window.onload().mondai.innerText = question[8];
    }else if (answer === 2 && bunki === 0 && tokushu ===0){
        window.onload().mondai.innerText = question[9];
    }else if (answer === 3 && bunki === 0 && tokushu ===0){
        window.onload().mondai.innerText = `答えは${tercher[1]}`;
    }else if (answer === 2 && bunki === 1 && tokushu ===0){
        window.onload().mondai.innerText = question[1];
        tokushu = 2 ;
    }else if (answer === 2 && bunki === 2 && tokushu === 2;){
        window.onload().mondai.innerText = `答えは${tercher[4]}`;
    }else if (answer === 3 && bunki === 1 && tokushu === 2){
        window.onload().mondai.innerText = `答えは${tercher[2]}`;
    }
    else if(answer === 1 && bunki ===1 && tokushu ===0){
        window.onload().mondai.innerText = question[9];
    }else if(answer === 1 && bunki ===2 && tokushu ===0){
        window.onload().mondai.innerText = question[10];
    }else if(answer === 2 && bunki === 2 && tokushu === 0){
        window.onload().mondai.innerText = `答えは${tercher[3]}`;
    }else if(answer === 0 && bunki === 1 && tokushu ===0){
        window.onload().mondai.innerText = question[11];
        tokushu = 1;
    }else if(answer === 0 && bunki === 2 && tokushu === 1){
        window.onload().mondai.innerText = `答えは${tercher[0]}`;
    }else if(answer === 1 && bunki === 1 && tokushu === 1){
        window.onload().mondai.innerText = `答えは${tercher[6]}`;
    }else if (answer === 1 && bunki ===3 && tokushu ===0){
        window.onload().mondai.innerText = `答えは${tercher[5]}`;
    }else if (answer === 9 && bunki === 2){
        window.onload().mondai.innerText = "答えは岡野先生"
    }
 }
