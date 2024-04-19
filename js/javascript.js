// JavaScript Document

document.addEventListener('DOMContentLoaded',init,false);
let bookemail, tablenum, booklocation, bookdate, booktime;
function init() {
	bookemail = document.querySelector('#bookemail')
	tablenum = document.querySelector('#tablenum')
	booklocation = document.querySelector('#booklocation')
	bookdate = document.querySelector('#bookdate')
	booktime = document.querySelector('#booktime')
	
	let elems = Array.from(document.querySelectorAll('#bookingForm input, #bookingForm select, #bookingForm textarea'));
	elems.forEach(e => e.addEventListener('input', handleChange, false));
}
function handleChange(e) {
	console.log('handleChange');
	
	let form = {};
	form.bookemail = bookemail.value;
	form.tablenum = tablenum.value;
	form.booklocation = booklocation.value;
	form.bookdate = bookdate.value;
	form.booktime = booktime.value;
	
	
	saveForm(form);
	
}
function saveForm(form){
	let f = JSON.stringify(form);
	window.localStorage.setItem('form', f);
}




let basketItems = [];
let orderTotal = 0;
let orderCode = 0;

function basketAdd(itemName, itemPrice, itemQuantity) {
    basketItems.push({ name: itemName, price: itemPrice, quantity: itemQuantity })
    basketUpdate();
    
}

function basketUpdate() {
    const basketItemList = document.getElementById('basket-items');
    const totalTally = document.getElementById('total');
    
    basketItemList.innerHTML = "";
    
    totalAmount = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalTally.textContent = totalAmount+2;
}

function basketClear(){
    basketItems = [];
    basketUpdate();
}
function basketCheckout(){
    
    basketClear();
    
    window.location.href = "./orderplaced.html";
    
}
function onOrderPlacedRun(){
    orderCode = randOrderCode(99999);
    saveOrderCode(orderCode);
    getOrderCode();
    document.getElementById('js_order_code').innerHTML = getOrderCode();
    console.log(orderCode);
}
function saveOrderCode(orderCode){
    let f = JSON.stringify(orderCode);
    window.localStorage.setItem('orderCode', f);
}
function getOrderCode(){
    let f = window.localStorage.getItem('orderCodeNum')
    if(f) return JSON.parse(f);
}
function randOrderCode(limit){
  return Math.floor(Math.random()*limit)+1000;
}

function ShowFoodMenuStarter(){
	document.getElementById('jsbutton-selected-starters').style.display='block';
	document.getElementById('jsbutton-selected-mains').style.display='none';
	document.getElementById('jsbutton-selected-deserts').style.display='none';
	document.getElementById('jsbutton-selected-sides').style.display='none';
}
function ShowFoodMenuMains(){
	document.getElementById('jsbutton-selected-starters').style.display='none';
	document.getElementById('jsbutton-selected-mains').style.display='block';
	document.getElementById('jsbutton-selected-deserts').style.display='none';
	document.getElementById('jsbutton-selected-sides').style.display='none';
}
function ShowFoodMenuDeserts(){
	document.getElementById('jsbutton-selected-starters').style.display='none';
	document.getElementById('jsbutton-selected-mains').style.display='none';
	document.getElementById('jsbutton-selected-deserts').style.display='block';
	document.getElementById('jsbutton-selected-sides').style.display='none';
}
function ShowFoodMenuSides(){
	document.getElementById('jsbutton-selected-starters').style.display='none';
	document.getElementById('jsbutton-selected-mains').style.display='none';
	document.getElementById('jsbutton-selected-deserts').style.display='none';
	document.getElementById('jsbutton-selected-sides').style.display='block';
}
