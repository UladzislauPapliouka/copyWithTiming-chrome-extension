// const grabBtn = document.getElementById("copyBtn");
// grabBtn.addEventListener("click", () => {
//     chrome.tabs.query({active: true}, (tabs) => {
//         const tab = tabs[0];
//         if (tab && tab.url.startsWith("https://www.youtube.com/watch?v=")) {
//             chrome.scripting.executeScript(
//                 {
//                     target: {tabId: tab.id, allFrames: true},
//                     func: addButton
//                 },
//                 ()=>{}
//             )
//         } else {
//             alert("There are no active tabs")
//         }
//
//         function addButton(){
//             const copyBtn = document.createElement("button");
//             copyBtn.classList.add('copyBtn')
//             copyBtn.innerText = "copy"
//             copyBtn.style ="z-index: 10000;\n" +
//                 "    position: fixed;\n" +
//                 "    width: 200px;\n" +
//                 "    height: 50px;\n" +
//                 "    bottom: 10px;\n" +
//                 "    right: 20px;\n" +
//                 "    font-size: 25px;\n" +
//                 "    color: white;\n" +
//                 "    background: linear-gradient(rgb(1, 169, 225), rgb(91, 196, 188));\n" +
//                 "    border-width: 0px;\n" +
//                 "    border-radius: 20px;\n" +
//                 "    padding: 5px;\n" +
//                 "    font-weight: bold;\n" +
//                 "    cursor: pointer;"
//             function grabImages() {
//                 const currentTime = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
//                 const time = +currentTime.split(":")[0]*60 + +currentTime.split(":")[1]
//                 const tabUrl = document.URL
//                 const linkWithTiming = `https://youtu.be/${tabUrl.split('').slice(32).join('')}?t=${time}`
//                 return linkWithTiming
//             }
//             const body = document.getElementsByTagName("body")[0]
//             copyBtn.addEventListener('click',()=>{
//                 window.navigator.clipboard.writeText(grabImages())
//             })
//             body.append(copyBtn)
//         }
//     })
// })