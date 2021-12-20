let textArea = document.getElementById("textArea");
textArea.addEventListener('input',function(){
    // CHARACTER COUNT
    var text = this.value;
    // conole.log(text);
    let char = text.length;
    document.getElementById('char').innerHTML = char;
    // WORD COUNTER
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm !="";
    })
    console.log(cleanList);
    // console.log(words);
document.getElementById('word').innerHTML = words.length;
})