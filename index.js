//TODO：タイトル
let textdata = [];
//追加ボタン
document.querySelector("#add").addEventListener("click", function(){
    //表示を削除
    document.querySelector("#view").innerHTML="";
    //配列に追加
    textdata.push(document.querySelector("#memo").value);
    //配列を表示
    textdata.map( (title, i) => {
        const v = document.querySelector("#view");
        const d = document.createElement("div");
        d.className = "delete";
        d.setAttribute("data-textdata",i);
        d.innerHTML=title;
        v.insertBefore(d, v.firstElementChild); 
    });
    document.querySelector("#memo").value="";
});
// $("#add").on("click",function(){
//     //#viewに表示されているものはempty();削除
//     $("#view").empty();
//     //#memoのvalueを取得
//     const t = $("#memo").val();
//     //配列にvalueを追加（push関数）
//     textdata.push(t);
//     //#viewに表示する
//     textdata.map( (title,i) =>  $("#view").prepend('<div class="delete" data-textdata="'+i+'">'+textdata[i]+'</div>'));
// });
//表示リスト＆削除
document.querySelector("div").addEventListener("click",function(e){
    if(e.target.className == "delete") {
        document.querySelector("#view").innerHTML="";
        //配列から１つ削除
        textdata.splice( e.target.getAttribute("data-textdata"), 1 );
        //配列を表示
        textdata.map( (title, i) => {
            // console.log(i);
            const v = document.querySelector("#view");
            const d = document.createElement("div");
            d.className = "delete";
            d.setAttribute("data-textdata",i);
            d.innerHTML=title;
            v.insertBefore(d, v.firstElementChild); 
        });
    }
});
// $("div").on("click",".delete",function(){
//     $("#view").empty();
//     //配列から１つ削除する
//     textdata.splice( $(this).attr("data-textdata") , 1 );
//     //配列の数だけデータを表示する
//     textdata.map((title,i) => $("#view").prepend('<div class="delete" data-textdata="'+i+'">'+textdata[i]+'</div>'));
// });
window.addEventListener('load', () => {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', button1_clicked);
});

//テキストファイルをダウンロード
function button1_clicked(evt) {
  evt.preventDefault();
  console.log(textdata);

  //改行を入れる
  for (let i = 1; i < textdata.length; i++) {
    textdata[i] = "\n" + textdata[i];
  }
  const blob = new Blob(textdata, {type: 'text/plain'}); //{endings:'native'}は不要？
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);

  a.download = `${toLocaleString(new Date)}.txt`;
  a.href = url;
  a.click();
  a.remove();
//   setTimeout(() => {
    URL.revokeObjectURL(url);
    // }, 1E4);
}

function toLocaleString( date )
{
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.toLocaleTimeString());

    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        ].join( '' ) 
}