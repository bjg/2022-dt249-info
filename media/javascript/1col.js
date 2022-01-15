
function jump_menu()
{
   var w = document.info.list.selectedIndex;
   var url_add = document.info.list.options[w].value;
   window.location.href = url_add;
}

function query1_submit(){
        query_string = document.sitesearch.sitesearch.value;
        document.location.href = "http://www.dit.ie/cgi-bin/ksearch.cgi?terms=" + query_string + "&sort=Scores&display=10";
}

function URL_STRIP(){
	mystring = "";
	prev_url = "";
	a = document.location.href;

	split_a = a.split("/");
	count = split_a.length;


	//Check to see if the url is an apache alias or not
	alias_on= a.indexOf("DIT");
	alias_on2= a.indexOf("cgi-bin");
	//alert(alias_on2);
	
	if(alias_on2 != -1){
		mystring = "/<a href='/DIT/contacts/'>contacts </a>";
	}
	
	else if(alias_on == -1){
		//alert("it's an alias");
		temp=split_a[count-1];
		//alert(temp);
		mystring = "/<a href='/"+ temp + "'>" + temp + "</a> ";
	}
	
	else{
		for (f = 4; f < count - 1 ; f++ )
		{
			temp = split_a[f]
			prev_url = prev_url + "/" + split_a[f]
			for (j = 1 ; j < 10 ; j++ )
				{temp = temp.replace("_", " ")}
			mystring = mystring + "/<a href='/DIT"+ prev_url +"/'>" + temp + "</a> ";	
		}
	}

	mystring = mystring.replace("#", "");
	mystring = mystring.replace("?mode=edit&refresh_flag=0", "");
	//mystring = mystring.replace("?mode=edit&refresh flag=1", "");
	return ("<a href='/DIT/Homepage/index.html'>DIT Home</a> "+mystring);

}

function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}

function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}

