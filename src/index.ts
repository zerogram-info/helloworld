console.log("hello world!");

async function main() {

    // ページ読み込み待ち
    if(document.readyState !== "complete"){
        await new Promise<any>((rs)=>{
            window.addEventListener("load",rs);
        });
    }

    let div = document.getElementById("hello-world");
    if(!div)return;//error
    div.textContent = "Hello World!"

    // 今回CSSを使わないので
    document.body.style.backgroundColor = "rgb(200,220,250)";
    div.style.position = "absolute";//自分で表示位置を指定
    div.style.fontSize = "200%";
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.transform = "translateX(-50%) translateY(-50%)";
}

main();
