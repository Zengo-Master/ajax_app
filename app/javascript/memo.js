function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest(); // Ajaxを可能にする
    XHR.open("POST", "/posts", true); // POSTメソッドでpostsに非同期通信で
    XHR.responseType = "json"; // リクエストの時点でJSONに決める
    XHR.send(formData);
    XHR.onload = () => { // レスポンスの受信に成功したとき
      const item = XHR.response.post; // レスポンスのメモのレコードデータを取得
      const list = document.getElementById("list"); // 描画する親要素のlist要素を取得
      const formText = document.getElementById("content"); // 入力フォームのリセット
      const HTML = ` // HTMLを定義
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML); // HTMLはL13で定義されている

      formText.value = "";

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };

    XHR.onerror = function () { // リクエスト失敗時のイベントハンドラー
      alert("Request failed");
    };

    e.preventDefault();
  })
}
window.addEventListener("load", memo);