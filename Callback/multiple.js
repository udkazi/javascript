// Workig program
console.log('start');

function callUser (name,callback){
	//considering late resonce
	setTimeout(()=>{
		callback({userName:name});
		console.log('my p2 name is',name);
	},3000)
}


function callEmail(name,callback){
	setTimeout(()=>{
		callback('kabirkhan@gmail.com');
	},4000)
}

//setp-1 :- pass data from here 
const newuser = callUser('kabir',newuser=>{
	console.log(newuser,'Recived form callback');
	callEmail(newuser,v =>{
		console.log(v);
		//another funcation here { then another { }}
	})

});
console.log('end p2');












