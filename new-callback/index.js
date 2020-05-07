// why we need to use callback
console.log('start');
function callMe(name){
	//considering late resonce
	setTimeout(()=>{
		console.log('my name is',name);
	},5000);	
}

const user = callMe('ubed');
console.log(user); //undfined -js excute line by line- single thred.
console.log('end')

// Workig program
console.log('start p2');
function callUser (name,callback){
	//considering late resonce
	setTimeout(()=>{
		callback({userName:name});
		console.log('my p2 name is',name);
	},3000)
}

const newuser = callUser('kabir',newuser=>{
	console.log(newuser,'Recived form callback');
});
console.log('end p2');

//multiple callback or callback hell


