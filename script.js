// (function addButton() {
//     // const copyBtn = document.createElement("button");
//     // copyBtn.classList.add('copyBtn')
//     // copyBtn.innerText = "copy"
//     // copyBtn.style = "z-index: 10000;\n" +
//     //     "    position: fixed;\n" +
//     //     "    width: 200px;\n" +
//     //     "    height: 50px;\n" +
//     //     "    bottom: 10px;\n" +
//     //     "    right: 20px;\n" +
//     //     "    font-size: 25px;\n" +
//     //     "    color: white;\n" +
//     //     "    background: linear-gradient(rgb(1, 169, 225), rgb(91, 196, 188));\n" +
//     //     "    border-width: 0px;\n" +
//     //     "    border-radius: 20px;\n" +
//     //     "    padding: 5px;\n" +
//     //     "    font-weight: bold;\n" +
//     //     "    cursor: pointer;"
//     //
//     //
//     // const body = document.getElementsByTagName("body")[0]
//     // copyBtn.addEventListener('click', () => {
//     //     window.navigator.clipboard.writeText(grabImages())
//     // })
//     // body.append(copyBtn)
// })()


(()=>{
    console.log("start")
    let shareButton = undefined;
    const getLink = () => {
        const currentTime = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
        const time = +currentTime.split(":")[0] * 60 + +currentTime.split(":")[1]
        const tabUrl = document.URL
        const linkWithTiming = `https://youtu.be/${tabUrl.split('').slice(32).join('')}?t=${time}`
        return linkWithTiming
    }
    const writeToClipboard =(string)=>{
        window.navigator.clipboard.writeText(string)
    }

    const intervalId = setInterval(()=>{
        console.log("interval")
        shareButton = document.querySelector('button.yt-spec-button-shape-next[aria-label=Share]')
        const shareButtonCopy =  shareButton.cloneNode(true)
        if(shareButton){
            shareButton.replaceWith(shareButtonCopy)
            shareButtonCopy.addEventListener("click", ()=>writeToClipboard(getLink()))
            clearInterval(intervalId)
        }
    },1000)
})()
window.addEventListener("")
