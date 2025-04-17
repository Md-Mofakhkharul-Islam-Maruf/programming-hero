export default function Friend({user}){
    console.log(user)
    const {name,}=user;
    return(
        <div>
            <h3>Name: {name} </h3>
        </div>
    )
}