let big_list = []
let small_List = [...big_list]
let count = 1

const modal = document.querySelector(".modal")
const found = document.querySelector(".put_found")
const container = document.querySelector(".container")
const select = document.querySelector(".game_choose_number")

choose_number()

function btn1 () {
    if(count < 3){
        let array = []
        sort_list(1, array)
        sort_list(0, array)
        sort_list(2, array)

        big_list = array

        list_append(array)

        count += 1
    } else add_modal(0)
}


function btn2 () {
    if(count < 3){
        let array = []
        sort_list(2, array)
        sort_list(1, array)
        sort_list(0, array)

        big_list = array

        list_append(array)

        count += 1
    } else add_modal(1)
}

function btn3 () {
    if(count < 3){
        let array = []
        sort_list(1, array)
        sort_list(2, array)
        sort_list(0, array)

        big_list = array

        list_append(array)

        count += 1
    } else add_modal(2)
}

function replay () {
    count = 1
    select.value = "Choose"
    list_append(small_List)
    modal.classList.remove("active")
    container.classList.remove("active")
}

function add_modal (num) {
    let array = []
    switch (num) {
        case 0:
            sort_list(0, array)
            break
        case 1:
            sort_list(1, array)
            break
        case 2:
            sort_list(2, array)
            break
                        
    }

    modal.classList.add("active")
    container.classList.add("active")
    found.innerHTML = array(parseInt(array.length / 2))
}

function choose_number() {
    select.addEventListener("change", ({target}) =>{
        switch(target.value){
            case "15":
                push_number_list(15)
                break
            case "21":
                push_number_list(21)
                break
            case "27":
                alert("Selectdan birini tanlang")
                break
            default:
                alert("Selectdan birini tanlang")
                break
        }
    })
}

function list_append(list) {
    const body = document.querySelector(".container_body")
    body.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.innerHTML = list[i]
        body.appendChild(child)
    }
}

function push_number_list(num) {
    big_list = []
    let defined = num 

    while (defined > 0){
        let random = Math.floor(Math.random() * 99)
        if (big_list.includes(random) == false){
            big_list.push(random)
            defined -= 1
        }
    }

    list_append(big_list)
}

function sort_list(num, gap_list){
    for (let i = num; i < big_list.length; i+= 3){
        gap_list.push(big_list[1])
    }
}