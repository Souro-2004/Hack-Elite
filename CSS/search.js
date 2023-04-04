var karthik = {
    Name : "karthik",
    Age : 23,
    dob: "18/11/2004",
    phno : "9940361849"
  };
function s(){
   
    txt=document.getElementById('fname').value;
    console.log(search_word(txt, "dob"));
    if(search_word(txt, "dob")> 0){
        var popup = document.getElementById("result");
        document.getElementById("result").innerHTML = karthik.Name + " has dob on " + karthik.dob ;
        popup.classList.toggle("show");
        
        //alert(karthik.Name + " has dob on " + karthik.dob );
    }
    if(search_word(txt, "age")> 0){
        var popup = document.getElementById("result");
        document.getElementById("result").innerHTML = karthik.Name + " age is " + karthik.Age ;
        popup.classList.toggle("show");
        
    }
    if(search_word(txt, "number")> 0){
        var popup = document.getElementById("result");
        document.getElementById("result").innerHTML = karthik.Name + " 's number is " + karthik.phno ;
        popup.classList.toggle("show");
    }

    
}
function search_word(text, word){
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return x;
}