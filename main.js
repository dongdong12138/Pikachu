!function() {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('.code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            styleTag.innerHTML = code.substring(0, n)
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 10)
    }
    let code = `
    /* 好了，我现在要开始画一个皮卡丘了 */
    /* 首先准备点东西 */
    .preview {
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
      }
      .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
      }
      
      /* 现在开始画皮卡丘的鼻子 */
      .nose {
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-radius: 50%;
        border-color: #000 transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -11px;
      }
      
      /* 接着是眼睛 */
      .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
      }
      .eye::before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: 0px;
        border: 2px solid #000;
      }
      .eye.left {
        right: 50%;
        margin-right: 90px;
      }
      .eye.right {
        left: 50%;
        margin-left: 90px;
      }
      
      /* 再来画脸 */
      .face {
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
        top: 85px;
      }
      .face.left {
        right: 50%;
        margin-right: 116px;
      }
      .face.right {
        left: 50%;
        margin-left: 116px;
      }
      
      /* 还有它的上嘴唇 */
      .upperLip {
        width: 80px;
        height: 25px;
        border: 3px solid #000;
        position: absolute;
        top: 48px;
        background: #fde348;
      }
      .upperLip.left {
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
      }
      .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
      }
      
      /* and 它的下嘴唇 */
      .lowerLip-wrapper {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -70px;
        width: 140px;
        height: 109px;
        overflow: hidden;
      }
      .lowerLip {
        width: 100%;
        height: 1000px;
        background: #990513;
        border-radius: 100px/500px;
        border: 2px solid #000;
        position: absolute;
        bottom: 0;
        overflow: hidden;
      }
      .lowerLip::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        bottom: -16px;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
      }

      /* 好了，皮卡丘画完了 */
      /* 送给你咯 😊 */
    `
    writeCode('', code)
}.call()