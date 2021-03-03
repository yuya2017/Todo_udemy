import "./styles.css";

const onClickadd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncomplateList(inputText);
};

//未完了から指定の要素を削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate_list").removeChild(target);
};

//未完了のリストの作成
const createIncomplateList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = text;
  //完了ボタン生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //削除イベント
    deleteFromIncomplateList(complateButton.parentNode);
    //完了済みに追加
    const addTarget = complateButton.parentNode;
    //テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liを生成
    const li = document.createElement("li");
    li.innerText = text;
    //button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻すボタンの処理
      const deleteTarget = backButton.parentNode;
      document.getElementById("complaete_list").removeChild(deleteTarget);
      //テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncomplateList(text);
    });
    //divの子要素に各要素を指定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complaete_list").appendChild(addTarget);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomplateList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を指定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplate_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickadd());
