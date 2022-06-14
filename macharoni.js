function lopoi(){

    st1_game=document.getElementById("input1").value;
    st2_game=document.getElementById("input2").value;
    
    
    localStorage.getItem("tu_1" , st1_game);
    localStorage.getItem("tu_2" , st2_game);
    
    
     window.location="quiz_page.html";
    
    
    }