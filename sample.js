// var nichname = "taro"
// console.log(nichname)
// nichname = "jiro"
// console.log(nichname)

// let nichname = "taro"
// console.log(nichname)
// nichname = "jiro"
// console.log(nichname)

// const nichname = "taro"
// console.log(nichname)
// nichname = "ichiro"
// console.log(nichname)

// var str = "webcamp"
// function foo() {
//   console.log(str)
//   var y = "hello"
// }

// foo()
// console.log(y)

// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i =0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)


// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// for (let i =0; i < 10; i++) {
//   console.log(i);
// }


// let alertString;
// alertString = addString("Webcamp");
// alert(alertString);

// function addString(strA) {
//   let addStr = "Hello " + strA
//   return addStr;
// }


// let promptStr = prompt("何か好きな文字を入力してください。");
// alert(promptStr)


// let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// alert("あなたの選んだ手は" + user_hand + "です。");



// let user_hand =prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// let js_hant = getJShand();
// let judge = winLose(user_hand, js_hand);


// function getJShand() {
//   let js_hand_num = Math.floor(Math.random() * 3);

//   if(js_hand_num == 0) {
//     js_hand = "グー";
//   } else if(js_hand_num == 1) {
//     js_hand = "チョキ";
//   } else if (js_hand_num == 2) {
//     js_hand = "パー";
//   }

//   return js_hand;
// }

// function winLose(user,js) {
//   let winLoseStr;

//   if(user == "グー") {
//     if(js == "グー") {
//       winLoseStr = "あいこ";
//     } else if (js == "チョキ") {
//       winLoseStr = "勝ち"
//     } else if (js == "パー") {
//       winLoseStr = "負け";
//     }
//   } else if (user == "チョキ") {
//     if(js == "グー") {
//       winLoseStr = "負け";
//     } else if (js == "チョキ") {
//       winLoseStr = "あいこ"
//     } else if (js == "パー") {
//       winLoseStr = "勝ち";
//     }
//   } else if (user == "パー") {
//     if(js == "パー") {
//       winLoseStr = "勝ち";
//     } else if (js == "チョキ") {
//       winLoseStr = "負け"
//     } else if (js == "パー") {
//       winLoseStr = "あいこ";
//     }
//   }

// return winLoseStr;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}