// Workig program
console.log('start');

function callUser (callback){
	//considering late resonce
	setTimeout(()=>{
		callback('kabir');
		console.log('my p2 name is');
	},3000)
}


function callEmail(callback){
	setTimeout(()=>{
		callback('kabirkhan@gmail.com');
	},4000)
}


const newuser = callUser(newuser=>{
	console.log(newuser,'Recived form callback');
	callEmail(v =>{
		console.log(v);
	})

});
console.log('end p2');