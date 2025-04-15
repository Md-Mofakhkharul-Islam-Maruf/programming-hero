export default function Singers({singer}){
    return(
        <div className="stl">
            <li>Singer Name: {singer.name} </li>
            <li>Singer age: {singer.age}</li>
        </div>
    )
}