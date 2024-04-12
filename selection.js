let items_JSON = Cookies.get(`color`);
let items = JSON.parse(items_JSON);
// console.log(items)

let container = document.getElementById("items_container")

if (items.length == 0){
    document.getElementById("items_title").innerHTML = `<h2 style="color: red;" class="item_title">Please Select a Color</h2>`
}else{
    for (let i = 0; i<items.length;i++){
        container.insertAdjacentHTML("beforeend", `
        <div class="item" style="display: grid;
        background-color: ${items[i].item_name};
        padding: 30px;
        max-width: 50vw">
                    <h1 class="item_title">${items[i].item_name}</h1>
                </div>
        `)
    }

}    

function RemoveItem(){
    // console.log("remove", this)
    items.splice(
        items.findIndex(
          (a) => a.item_name === this.attributes.item_name.value
        ),
        1
      );
      updateCookies(items);
}

function updateCookies(value) {
    let value_JSON = JSON.stringify(value);
    Cookies.set("color", value_JSON);
    console.log(value)
  }