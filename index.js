const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = (e) => {
  e.preventDefault();
  const text = e.target.querySelector(`[name=item]`).value;

  const item = {
    text: text,
    done: false,
  };
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
};

const populateList = (plates, platesList) => {
  platesList.innerHTML =
    plates?.length > 0 &&
    plates
      ?.map((item, index) => {
        return `
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? "checked" : ""} />
            <label for="item${index}">${item.text}</label>
        </li>
        `;
      })
      .join("");
};

const toggleDone = (e) => {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemList);
};

addItems.addEventListener("submit", addItem);
itemList.addEventListener("click", toggleDone);
populateList(items, itemList);

const checkBoxes = document.querySelectorAll("input");
