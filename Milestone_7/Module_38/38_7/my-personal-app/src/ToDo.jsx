// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// // }
// export default function ToDo({task, isDone, time}){
//     return(
//         //several way to rendering : ternary
//         //isDone?<li>Task: {task}</li>: <li>Do this: {task} Duration: {time}</li>  
           
//         //several way to rendering : &&        
//         //isDone &&<li>Task: {task}</li>

//         //several way to rendering : ||        
//         //isDone ||<li>Do this: {task} Duration: {time}</li>

//         //several way to rendering : null        
//         //isDone? null: <li>Do this {task}</li>
//     )
// }


export default function ToDo({task, isDone, time}){
        //several way to rendering : variable
        let listItem;
        if(isDone){
            listItem = <li>task: {task}</li>
        }else {
            listItem= <li>Do this: {task}</li>
        }
        return listItem;
}