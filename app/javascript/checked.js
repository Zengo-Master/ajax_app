function check() {
  const posts = document.getElementsByClassName("post"); // 全クラス取得
  postsA = Array.from(posts); // 配列を生成

  postsA.forEach(function (post) {  // forEachメソッドが可能
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", (e) => {
      const postId = post.getAttribute("data-id"); // メモのidを取得
      const XHR = new XMLHttpRequest(); // オブジェクトを生成
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send(); // ここで初めてリクエストが行える
      XHR.onload = () => { //レスポンスがあった場合の処理
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
        } else {
          return null;
        }
      }
      XHR.onerror = () => {
        alert("Request failed");
      };

      e.preventDefault(); // イベントハンドラーの実行後に今回のイベントをキャンセル

     });
   });
};

setInterval(check, 1000); // 1秒間隔で実行される