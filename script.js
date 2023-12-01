//Creiamo la lista della spesa
const shopping_list =['latte', 'uova', 'pane', 'pasta', 'passata di pomodoro', 'carta igenica'];
 const ul = document.getElementById('shopping-list');

 //Contatore
 let i=0;
 
 //Stampa la lista finché si verifica la condizione

 while(i<shopping_list.length){
    const li= document.createElement('li');
    li.innerText = shopping_list[i];
    ul.appendChild(li);
 }

 
