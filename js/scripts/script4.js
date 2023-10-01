function showdate(){
	let date=document.getElementById("showtime");
	date= new Date();
	const months = [
					"January", "February", 
                    "March", "April", "May", 
                    "June", "July", "August",
                    "September", "October", 
                    "November", "December"
                    ];
	document.getElementById("date-result").innerHTML=date.getDate()+"/"+months[date.getMonth()]+"/"+date.getFullYear();
}
        
function showTime(){
	let date=document.getElementById("showdate");
	date= new Date();
	document.getElementById("time-result").innerHTML=date;
}
