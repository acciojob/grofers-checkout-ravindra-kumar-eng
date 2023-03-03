const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let pricesEl = document.getElementsByClassName('price');
  let sum = 0;
  for (let i = 0; i < pricesEl.length; i++) {
    let x = Number(pricesEl[i].innerText);
    sum += x;
  }
    // console.log(`TotalSum: ${sum}`);
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
    <td></td><td>${sum}</td>
    `
    // document.getElementById('tab').appendChild(emptyRow);
    document.getElementById('tab').innerHTML += `<tr id="ans">
    <td></td><td>${sum}</td>
        </tr>`
};

getSumBtn.addEventListener("click", getSum);

