let entries = ["karthik", "tanya", "sourojit"];
/*
class data{
    constructor(name,dob,age,phno){
        this.name=name;
        this.name.dob=dob;
        this.name.age=age;
        this.name.phno=phno;
    }
}
let e[3] = new data("karthik","18/11/2004",23,"18/11/2004");
*/
var data = {
    karthik:{
        name : "Karthik",
        age : 23,
        dob: "18/11/2004",
        phno : "9940361849"
    },
    tanya:{
        name : "Tanya",
        age : 18,
        dob: "idk :)",
        phno : "123456789"
    },
    sourojit:{
        name: "Sourojit",
        age : 22,
        dob: "20/6/2014",
        phno : "9748222341"
    }

};

/*function popuptxt(name,attribute){
    var popup = document.getElementById("result");  
    box = document.getElementById("result").innerHTML;
    if(attribute==="dob"){
        document.getElementById("result").innerHTML= name + " has dob on " + data[entries[i]].dob;
        popup.classList.toggle("show");
    }
    if(attribute==="age"){
        box=name + " 's age is " + data[entries[i]].age ;
        popup.classList.toggle("show");
    }
    if(attribute==="number"){
        box=name + " 's number is " + data[entries[i]].phno;
        popup.classList.toggle("show");
    }


}*/

function s(){

    
    txt=document.getElementById('fname').value;
    let name_found= false;
    for(let i in entries){
        
        //console.log(search_word(txt.toLowerCase(), entries[i]).found);
        if(search_word(txt.toLowerCase(), entries[i]).found >0 ){
            //console.log(entries[i]);
            let message = "";
            let help =true;
            name_found=true;

            if(search_word(txt.toLowerCase(), "dob").found> 0){
                //console.log("clr");
               // var popup = document.getElementById("result");
               // document.getElementById("result").innerHTML = data[entries[i]].name + " has dob on " + data[entries[i]].dob;
                message += data[entries[i]].name + " has dob on " + data[entries[i]].dob + ". ";
                help=false;
               // popup.classList.toggle("show");
               // popuptxt(entries[i],"dob");
                
            }

            if(search_word(txt.toLowerCase(), "age").found> 0){
                //var popup = document.getElementById("result");
                //document.getElementById("result").innerHTML = data[entries[i]].name + " 's age is " + data[entries[i]].age ;
                message+= data[entries[i]].name + " 's age is " + data[entries[i]].age + ". ";
                help=false;
                //popup.classList.toggle("show");
                
            }

            if(search_word(txt.toLowerCase(), "number").found> 0){
               // var popup = document.getElementById("result");
               // document.getElementById("result").innerHTML = data[entries[i]].name + " 's number is " + data[entries[i]].phno ;
                message+= data[entries[i]].name + " 's number is " + data[entries[i]].phno + ". ";
                help=false;
                //popup.classList.toggle("show");
            }
            if(help==true){
                message+= data[entries[i]].name + "'s name found. Try with keywords like (age,dob... etc). If you need help just ask for it.";
            }
 
            //console.log(message);
            var popup = document.getElementById("result");
            popup.innerHTML = message ;
            popup.classList.toggle("show");
        }
        //console.log("---- "+ search_word(txt.toLowerCase(), entries[i]).similarities);
        
        else if(search_word(txt.toLowerCase(), entries[i]).similarities > 2){
            name_found=true;
            console.log("---- "+ search_word(txt.toLowerCase(), entries[i]).similarities);
            var popup = document.getElementById("result");
            popup.innerHTML = "Do you mean " + data[entries[i]].name + " ?";
            popup.classList.toggle("show");
            
        }
    }  
    if(name_found==false){
        var popup = document.getElementById("result");
        popup.innerHTML = "type the name and the attribute you want about them. Its that simple :)" ;
        popup.classList.toggle("show");

    }
    
}    

function search_word(text, word){
    
    var x = 0, y=0,fword='',sim=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                
                if(text[j]==word[j-i])
                  {
                    sim++;
                    //console.log(word);
                    y++;
                  }
                if (y==word.length){                 
                    x++;
                    fword = word;
                }
            }
            y=0;
        }
    }
    return {
    found : x,
    found_word : fword,
    similarities : sim
};
}
