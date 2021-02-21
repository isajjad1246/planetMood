
//RANDOM QUOTE MACHINE// jQuery ajax() Function
    var q1= "Self-love is not selfish; you cannot truly love another until you know how to love yourself. -Anonymous";
    var q2= "Owning our story and loving ourselves through that process is the bravest thing that we’ll ever do. -Anonymous";
    var q3= "Be yourself. An original is so much better than a copy. -Anonymous";
    var q4= "You can’t pour from an empty cup. Take care of yourself first. -Anonymous";
    var q5= "Above all, be true to yourself, and if you cannot put your heart in it, take yourself out of it. -Anonymous";
    var q6= "If you’re searching for that one person that will change your life, take a look in the mirror. -Anonymous";
    var q7= "Stop underestimating yourself. -Anonymous";
    var q8= "You are allowed to be both a masterpiece and a work in progress simultaneously. -Anonymous";
    var q9= "You yourself, as much as anybody in the entire universe, deserve your love and affection. -Anonymous";
    var q10= "You are free, you are powerful, you are good, you are love, you have value, you have a purpose. All is well. -Anonymous";
    var q11= "Put yourself at the top of your to-do list every single day and the rest will fall into place. -Anonymous";
    var q12= "Eat like you love yourself. Move like you love yourself. Speak like you love yourself. Act like you love yourself. Love yourself. -Anonymous";
    var q13= "Believe in yourself a little more. -Anonymous";
    var q15= "One day I woke up and realised I was not made for anyone, I was made for me. I am my own. -Anonymous";
    var q16= "Whatever other people say, Whatever this world tells you, You’re the best to me just the way you are -BTS";
    var q17= "Cause you're amazing, just the way you are. -Bruno Mars";
    var q18= "You're insecure, don't know what for. -One Direction";
    var quotes=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q15,q16,q17,q18];
    
    function newQuote(){
        var randomNum= Math.floor(Math.random()* (quotes.length));
        document.getElementById('quoteDisplay').innerHTML=quotes[randomNum].fontcolor("white").fontsize(5);

    }

    
