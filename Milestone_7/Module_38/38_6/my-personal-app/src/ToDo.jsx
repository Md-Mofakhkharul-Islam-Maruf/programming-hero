// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }
export default function ToDo({task, isDone, time}){

    if(isDone){
        return(
            <li>Task: {task} Duration: {time}</li>
        )
    }else{
        return(
            <li>Do now: {task} </li>
        )
    }
}