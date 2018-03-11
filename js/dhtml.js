function rollover_bigImg() {
    document.bpic.src = this.src;
}
function loopThumbnail(x, vars) {
    var thumbnails = $$.$id('thumbnails');
    for(var i=0, len=thumbnails.children.length; i<len; ++i) {
       thumbnails.children[i].children[0].src =  vars[x+(i+1)].src;
    }
}
function changePictures() {
    // create an object to store all the image object 
    var vars = {}; 
    // dynamically create image object, and store it in vars
    // you can also store it in window[], but it better to store in local
    for(var i=1; i<=5; ++i) {
        // Everest
        var name = 'e'+ i; // create variable name
        vars[name] = new Image();
        vars[name].src ='imgs/everest/'+ i +'.jpg';

        //  Las Vegas
        name = 'l'+ i;  
        vars[name] = new Image();
        vars[name].src ='imgs/lasvegas/'+ i +'.jpg';

        // Rome
        name = 'r'+ i;  
        vars[name] = new Image();
        vars[name].src ='imgs/rome/'+ i +'.jpg';
    }
    console.log(vars);
    // console.log($$.$id('thumbnails').children);
    // value of the selection
    var val = this.value;
    if(val == 'everest') {
       loopThumbnail('e', vars);
    } else if (val == 'lasvegas') {
       loopThumbnail('l', vars);
    } else if (val == 'rome') {
       loopThumbnail('r', vars);
    }
}

 window.onload = function () {   
    // when the user rolls over a thumbnail it is displayed in the “big image” area.
    var thumb1 = $$.$id('thumb1');
    var thumb2 = $$.$id('thumb2');
    var thumb3 = $$.$id('thumb3');
    var thumb4 = $$.$id('thumb4');
    var thumb5 = $$.$id('thumb5');
    thumb1.children[0].addEventListener('mouseover',rollover_bigImg);  
    thumb2.children[0].addEventListener('mouseover',rollover_bigImg);  
    thumb3.children[0].addEventListener('mouseover',rollover_bigImg);  
    thumb4.children[0].addEventListener('mouseover',rollover_bigImg);  
    thumb5.children[0].addEventListener('mouseover',rollover_bigImg);  

    var dest =  $$.$id("dest");
    dest.addEventListener('change', changePictures);
}
