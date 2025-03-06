const maruf={
    age: 25,
    status: 'error',
    activity: 'roster'
};
for(let keys in maruf){
    console.log(keys)
}

for(let key in maruf){
    console.log(`${key}  ${maruf[key]}`)
}

for(let [key,value] of Object.entries(maruf)){
    console.log(`${key}: ${value}`)
}