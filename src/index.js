const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
// 未完了リストからの指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  // liにクラス list-rowをつける
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");

  // pタグの中にinputText(テキスト入力に入れた文字)を入れる
  li.innerText = text;

  // button(完了ボタン生成)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 押された完了ボタンの親タグ(div)を完了リストに移動し完了ボタンと削除ボタンを消して戻すボタンを追加する
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除するファンクション
    deleteFromIncompleteList(completeButton.parentNode);
    // completeButton.parentNode.remove(); これでもいけるような．.

    /*ここから完了リストに追加するファンクション */
    // 完了リストに追加
    const addTarget = completeButton.parentNode; // 完了ボタンの親要素 つまりliタグ

    // todoに入れたテキストを取得
    const text = addTarget.firstElementChild.innerText; // liタグの中のテキスト

    // div以下を初期化
    addTarget.textContent = null;

    // liタグの中にテキストを入れる
    li.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // deleteTarget.remove()でもいけるとは思う

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素にテキストとボタンを追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    /*ここまで完了リストに追加するファンクション */
  });

  // button(削除ボタン生成)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 押された削除ボタンの親タグ(div)を未完了リストから削除するファンクション
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    // deleteButton.parentNode.remove(); これでもいけるような．.
  });

  // divの子要素に各要素を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
