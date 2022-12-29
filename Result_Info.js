/*function result()
{
	var fl=fname.value+"  "+lname.value
	flname.innerHTML="<b>Student_Name:   </b>"+fl
	
	var ph=parseInt(phy.value)
	p.innerHTML="<b>Physics :   </b>" +ph
	var ch=parseInt(chem.value)
	c.innerHTML="<b>Chemistry :   </b>" +ch
	var ma=parseInt(maths.value)
	m.innerHTML="<b>Mathematics :   </b>" +ma
	
	var total=ph+ch+ma
	tm.innerHTML="<b>Total Marks :  </b>"+total
	
	var per=total/3
	pect.innerHTML="<b>Percentage % :   </b>"+per+" %"
	
	if(per>=80)
            {
                var a='A'
            }
            else if (per>=60)
            {
                var a='B'
            }
            else if (per>=30)
            {
                var a='C'
            }
            else{
                var a="FAILED"
            }
	d.innerHTML="<b>Division :   </b>" +a
	
}*/

function result()
{
	var fl=fname.value+"  "+lname.value
	flname.innerHTML=fl
	
	var ph=parseInt(phy.value)
	p.innerHTML=ph
	var ch=parseInt(chem.value)
	c.innerHTML=ch
	var ma=parseInt(maths.value)
	m.innerHTML=ma
	
	var total=ph+ch+ma
	tm.innerHTML=total
	
	var per=total/3
	pect.innerHTML=per+" %"
	
	if(per>=80)
            {
                var a='A'
            }
            else if (per>=60)
            {
                var a='B'
            }
            else if (per>=30)
            {
                var a='C'
            }
            else{
                var a="FAILED"
            }
	d.innerHTML=a
	
}