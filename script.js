var ul = document.getElementById("z");
var jum = 0;

/*function first(){  
var testArray=["test","teste","testes"];

chrome.storage.local.set({
    list:testArray
}, function() {
    console.log("added to list");
});  
}*/

chrome.storage.local.get({
    list:[]//put defaultvalues if any
},
function(data) {
	jum = data.list.length;
for( var i = 0; i < data.list.length; i++ )
{ 
    o = data.list[i];
    var li = document.createElement("li");
	var b = document.createElement("button");
	var s = document.createElement("span");
	

	b.appendChild(document.createTextNode('x'));
	b.setAttribute("title", i);
	//li.setAttribute("id", "l"+i);
	s.setAttribute("id", "s"+i);
	b.setAttribute("class", "del");
	b.addEventListener('click', dele.bind(this,b.title));
	//tx.setAttribute("class","txarea");
	//tx.setAttribute("id", "t"+i);
	//tx.setAttribute("style", "display:none");
	//var e = document.createElement("button");
	//e.appendChild(document.createTextNode('edit'));
	//e.addEventListener('click', updateById.bind(this,tx.id,s.id));
	
    s.appendChild(document.createTextNode(o));
	//tx.appendChild(document.createTextNode(o));
	li.appendChild(s);
	li.appendChild(document.createTextNode(' '));
	//li.appendChild(tx);
	li.appendChild(b);
	//li.appendChild(e);
    ul.appendChild(li);
}
var liz = document.createElement("li");
var tx = document.createElement("textarea");
var bu = document.createElement("button");
tx.setAttribute("id","text");
bu.setAttribute("id","save");
bu.appendChild(document.createTextNode('+'));
liz.appendChild(tx);
liz.appendChild(document.createTextNode(' '));
liz.appendChild(bu);
ul.appendChild(liz);
bu.addEventListener("click", function() {

     //first();
     adder();

});
//ul.innerHTML = data.list;
//console.log(data.list[0]);
}
);  

function updateById(a,b){
	/*var elm = document.getElementById(a);
	elm.style.backgroundColor = "red";
	var tx = document.createElement("textarea");
	tx.appendChild(document.createTextNode(elm.innerHTML));
	elm.innerHTML = "";
	
	
	elm.appendChild(tx);*/
	var elm = document.getElementById(a);
	var spa = document.getElementById(b);
	if(elm.style.display != 'none'){
		elm.style.display = 'none';
		spa.style.display = 'inline-block';
	}else{
		spa.style.display = 'none';
		elm.style.display = 'inline-block';
	}
}

function adder(){
	chrome.storage.local.get({
		list:[]//put defaultvalues if any
	},
	function(data) {
	   console.log(data.list);
	   update(data.list);//storing the storage value in a variable and passing to update function
	   document.location.reload();
	}
	);  
}

function update(array)
   {
	   textarea = document.getElementById('text');
	var newz = textarea.value;
    array.push(newz);
    //then call the set to update with modified value
    chrome.storage.local.set({
        list:array
    }, function() {
        console.log("added to list with new values");
    });
    }
function dele(a){
	/*
	console.log(a);
	chrome.storage.local.get({
    list:[]//put defaultvalues if any
	
},
function(data) {
	//console.log(data.list[a]);
	chrome.storage.local.remove({list:[a]}, function(){console.log('tezzzzz')});
	//document.location.reload();
}
);  */
if (confirm('Are you sure you want to delete this item?')) {
    chrome.storage.local.get({list: []}, function(data) {
    // Remove one item at index 0
    data.list.splice(a, 1);
    chrome.storage.local.set(data, function() {
        document.location.reload();
    });
});
} else {
}


}
	/*
var buttonz = document.querySelectorAll(".del");
var buttonzs = document.getElementsByClassName("del");
var elz = document.querySelectorAll(".el");
var els = document.getElementsByClassName("el");
console.log(jum);
console.log(buttonz);
console.log(buttonzs);
console.log(elz);
console.log(els);
*/
/*
for (var i = 0; i < 5; i++) {
	console.log('lew');
    buttonz[i].addEventListener('click', dele, false);
}*/
	
