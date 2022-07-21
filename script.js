// ------------------block 1------------------------------------
     
// a ------------------------------------------------ 
let hw_1 = document.createElement("div")
let h1 = document.createElement("h1")
let contener = document.createElement("div")
let block_left = document.createElement("div")
let blur_block1 = document.createElement("img")
let h2_left = document.createElement("h2")
let span1 = document.createElement("span")
let p1 = document.createElement("p")
// document.body.append(f) добавление в конец
// document.body.prepend(f) добавление в начало


// b style ------------------------------------------
contener.classList.add("contener")
block_left.classList.add("block_left")
hw_1.classList.add("hw_1")
blur_block1.classList.add("blur_block1")
h2_left.classList.add("h2_right")
span1.classList.add("span1")
p1.classList.add("p1")

h1.innerHTML = "How it works?"
h2_left.innerHTML = "SpiderShib Inu Ecosystem"
span1.innerHTML = "Large variety of options to use SpiderShib Inu tokens and NFTs"
p1.innerHTML = "Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu.<br><br>So the tokens will have real usefulness and to ensure constant growth for all holders."

blur_block1.src = "./img/img1.svg"

// c push -------------------------------------------
document.body.prepend(hw_1)
hw_1.append(h1)
hw_1.append(contener)
contener.append(block_left)
block_left.append(blur_block1)
block_left.append(h2_left)
block_left.append(span1)
block_left.append(p1)

// --------------- block_center-----------------------------------

// a ------------------------------------------------ 
let block_center = document.createElement("div")
let blur_block2 = document.createElement("img")
let h2_center = document.createElement("h2")
let span2 = document.createElement("span")
let p2 = document.createElement("p2")


// b style ------------------------------------------
block_center.classList.add("block_center")
blur_block2.classList.add("blur_block2")
h2_center.classList.add("h2_right")
span2.classList.add("span1")
p2.classList.add("p1")

h2_center.innerHTML = "Many options to earn"
span2.innerHTML = "Thanks to our ecosystem you will be able to earn passively and actively<br>"
p2.innerHTML = "The passive income:<br> - staking<br> - the appreciation of the staked<br> currency<br><br> The active income:<br> - Gaming process (you will earn <br>money that you can turn into tokens)<br> - Re-sale of the NFTs"

blur_block2.src = "./img/img2.svg"


// c push -------------------------------------------
contener.append(block_center)
block_center.append(blur_block2)
block_center.append(h2_center)
block_center.append(span2)
block_center.append(p2)


// --------------- block_right-----------------------------------

// a ------------------------------------------------ 
let block_right = document.createElement("div")
let blur_block3 = document.createElement("img")
let h2_right = document.createElement("h2")
let span3 = document.createElement("span")
let p3 = document.createElement("p1")

// b style ------------------------------------------
block_right.classList.add("block_right")
blur_block3.classList.add("blur_block3")
h2_right.classList.add("h2_right")
span3.classList.add("span1")
p3.classList.add("p1")

h2_right.innerHTML= "Reshaping DeFi"
span3.innerHTML ="We are evolving DeFi concepts such as participation rewards, NFTs and tokenomics to maximise profit for every investor<br>"
p3.innerHTML = "We offer huge tools for people around the world to take control of their financial future."

blur_block3.src = "./img/img3.svg"


// c push -------------------------------------------
contener.append(block_right)
block_right.append(blur_block3)
block_right.append(h2_right)
block_right.append(span3)
block_right.append(p3)



// ======================================= hw2 ========================================================
// a
let grid = document.createElement("div")

let all_grid_block = []
let all_h2 = []

for(let i = 0; i<=3;i++){
    // a
    let grid_block = document.createElement("div")
    all_grid_block.push(grid_block)
    let h2 = document.createElement("h2")
    all_h2.push(h2)
    let span = document.createElement("span")
    let img = document.createElement("img")

    // b
    grid_block.classList.add("grid_block")
    span.classList.add("span4")
    img.classList.add("img4")

    img.src = "./img/img4.svg"

    h2.innerHTML = "www"
    span.innerHTML ="18:44"
    // c

    grid.append(grid_block)
    grid_block.append(h2)
    grid_block.append(span)
    grid_block.append(img)

}

// b

grid.classList.add("grid")
all_h2[0].innerHTML = "Buy milk :)"
all_h2[1].innerHTML = "End the project"
all_h2[2].innerHTML = "Call mom"
all_h2[3].innerHTML = "Sleep 10 hrs"


// c

let hr = document.querySelector("hr")
hr.after(grid)

// =-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-==-=-=-=

// a

let block1 = document.createElement("div")
let img_of_phone = document.createElement("img")
let span = document.createElement("span")
let h3 = document.createElement("h3")
let red_block = document.createElement("div")
let text_of_red_block = document.createElement("span")
let p = document.createElement("p")
let button = document.createElement("button")

// // b 

block1.classList.add("block_of_phone")
img_of_phone.classList.add("img_of_phone")
span.classList.add("span2")
red_block.classList.add("red_block")
text_of_red_block.classList.add("text_of_red_block")
p.classList.add("p2")
button.classList.add("button_of_phone")

span.innerHTML = "Смартфоны"
h3.innerHTML = "3 167 000 cyм"
text_of_red_block.innerHTML = "от 328 000 сум/месяц"
p.innerHTML = "Смартфон Xiaomi Redmi<br> Note 11 Pro 128GB 8 GB Grey"
button.innerHTML = "Купить"

img_of_phone.src = "./img/tel.jpeg"

// c

grid.after(block1)
block1.append(img_of_phone)
block1.append(span)
block1.append(h3)
block1.append(red_block)
red_block.append(text_of_red_block)
block1.append(p)
block1.append(button)


// ===============================================================

let form = document.forms.www

let f = []

form.onsubmit=(e)=>{
    e.preventDefault()

    let d = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        d[key] = value
    })

    f.push(d)
}

console.log(f);