function add() {
    
    var newE1 = document.createElement('li');
//    position.style.backgroundColor = 'red';
    var newText = document.createTextNode('New');

    newE1.appendChild(newText);
//    box.style.backgroundColor = 'green';
    var position = document.getElementsByTagName('ul')[0];
    
    position.appendChild(newE1);
}

