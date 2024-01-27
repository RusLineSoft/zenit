let fName = document.getElementById(`fname`)
let grafik = document.getElementById(`grafik`)
let disactive = document.getElementById(`disactive`)
let rank = document.getElementById(`rank`)
let urlParams = new URLSearchParams(window.location.search);
let payload = JSON.parse(urlParams.get('payload'));
let firstName = payload.user.first_name;
let secondName = payload.user.last_name;
let idName = payload.user.id;
let idrs = [563768064, 283030901, 269224588, 293077225];
let idsv = [713904890, 568643179, 740362366, 517658520];
let idnv = [284204139, 610774819, 540164219, 675462553, 601349069, 539145714, 240544060, 180923359, 701055028, 158016801, 692464972, 718971948, 830696257, 816277484, 467607233, 568993713, 633049808, 783910075, 184769069, 819273482];
let idsps = [674482468];
let idblock = [632700346];

if (idrs.indexOf(idName) != -1) {
    fName.innerHTML = `Привет, ` + firstName + ` ` + secondName + ` &#128075;`;
    rank.innerHTML = `Ранг: Руководящий состав`;
    disactive.classList.add(`disabled`);
    grafik.classList.remove(`disabled`);
    grafik.classList.add(`active`);
} 

else if (idsps.indexOf(idName) != -1) {
    fName.innerHTML = `Привет, ` + firstName + ` ` + secondName + ` &#128075;`;
    rank.innerHTML = `Ранг: Следящий за ПС`;
    disactive.classList.add(`disabled`);
    grafik.classList.remove(`disabled`);
    grafik.classList.add(`active`);
} 

else if (idsv.indexOf(idName) != -1) {
    fName.innerHTML = `Привет, ` + firstName + ` ` + secondName + ` &#128075;`;
    rank.innerHTML = `Ранг: Старший водитель|Бригадир`;
    disactive.classList.add(`disabled`);
    grafik.classList.remove(`disabled`);
    grafik.classList.add(`active`);
} 

else if (idnv.indexOf(idName) != -1) {
    fName.innerHTML = `Привет, ` + firstName + ` ` + secondName + ` &#128075;`;
    rank.innerHTML = `Ранг: Начинающий водитель/Водитель`;
    disactive.classList.add(`disabled`);
    grafik.classList.remove(`disabled`);
    grafik.classList.add(`active`);
} 

else if (idblock.indexOf(idName) != -1) {
    fName.innerHTML = `К сожалению, нам пришлось Вас заблокировать &#128532;`;
    rank.innerHTML = `Недоступно &#128274;`
} 

else {
    fName.innerHTML = `Привет, ` + firstName + ` ` + secondName + ` &#128075;`;
    rank.innerHTML = `Пассажир`;
    grafik.classList.add(`disabled`);
}