
function result()
{	
	var fl=fname.value+"  "+lname.value
	var roll=rollno.value
	var db=dob.value
	var p=phy.value
	var c=chem.value
	var m=maths.value
	var e=eng.value
	var h=hindi.value
	
	
	// Physics Remarks

			if(p>=75)
			{
				var r='D'
			}
			else if(p<=75 && p>=35)
			{
				var r=''
			}
			else if(p<=35 && p>=25)
			{
				var r='S*'
			}
			else{
				var r="F*"
			}
			
			
	//Chemistry Remarks
			
			if(c>=75)
			{
				var re='D'
			}
			else if(c<=75 && c>=35)
			{
				var re=''
			}
			else if(c<=35 && c>=25)
			{
				var re='S*'
			}
			else{
				var re="F*"
			}
			
	//Maths Remarks
			
			if(m>=75)
			{
				var rem='D'
			}
			else if(m<=75 && m>=35)
			{
				var rem=''
			}
			else if(m<=35 && m>=25)
			{
				var rem='S*'
			}
			else{
				var rem="F*"
			}
			
	//Hindi Remarks
	
			if(h>=75)
			{
				var rema='D'
			}
			else if(h<=75 && h>=35)
			{
				var rema=''
			}
			else if(h<=35 && h>=25)
			{
				var rema='S*'
			}
			else{
				var rema="F*"
			}
	
	//English Remarks
	
			if(e>=75)
			{
				var remar='D'
			}
			else if(e<=75 && e>=35)
			{
				var remar=''
			}
			else if(e<=35 && e>=25)
			{
				var remar='S*'
			}
			else{
				var remar="F*"
			}
	
	if (male.checked)
	{
		var g="<b>Mr. </b>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;"+fl+"&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b> S/O : </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fathername.value
	}
	else if(female.checked)
	{
		var g="<b>Ms. </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fl+"&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b> D/O : </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fathername.value
	}
	else{
		var g="NaN"
	}

	
	var reslt="<table border='1' cellpadding='10' cellspacing='2' width='70%'>"
		reslt+="<caption><h2>Student_Result</h2></caption>"
		reslt+="<tr><td><img src='central.png' width='70'></td>"
		reslt+="<td align='center'><b>Central Board of Secondary Education</b></td></tr></table>"
		
		reslt+="<table border='1' cellpadding='10' cellspacing='2' width='70%'>"
		reslt+="<tr><td align='center'><b>School Name : "+sname.value+"</b></td></tr>"
		reslt+="<td >"+g+"<br><b>Roll No. :  </b>"+roll+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> DOB : </b>"+db+"</td></tr>"
		
		reslt+="<table border='1' cellpadding='10' cellspacing='1' width='70%'>"
		reslt+="<tr><td><b>Subject_CODE</b></td><td><b>Subject</b></td><td><b>Min. Marks</b></td><td><b>Max. Marks</b></td><td><b>Marks Obtained</b></td><td><b>Remarks</b></td></tr>"
		reslt+="<tr><td align='center'><b>SE101</b></td><td><b>Physics:</b></td><td>35</td><td>100</td><td align='center'>"+p+"</td><td><b>"+r+"</b></td></tr>"
		reslt+="<tr><td align='center'><b>SE102</b></td><td><b>Chemistry:</b></td><td>35</td><td>100</td><td align='center'>"+c+"</td><td><b>"+re+"</b></td></tr>"
		reslt+="<tr><td align='center'><b>SE103</b></td><td><b>Mathematics:</b></td><td>35</td><td>100</td><td align='center'>"+m+"</td><td><b>"+rem+"</b></td></tr>"
		reslt+="<tr><td align='center'><b>SE104</b></td><td><b>English:</b></td><td>35</td><td>100</td><td align='center'>"+e+"</td><td><b>"+rema+"</b></td></tr>"
		reslt+="<tr><td align='center'><b>SE105</b></td><td><b>Hindi:</b></td><td>35</td><td>100</td><td align='center'>"+h+"</td><td><b>"+remar+"</b></td></tr>"
		
		
		
		show.innerHTML=reslt
		
}