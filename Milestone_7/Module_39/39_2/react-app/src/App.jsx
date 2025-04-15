import './App.css'

function App() {

  function handle() {
    alert('I am clicked')
  }

const handleClick4=()=> alert('I am clicked 4')

function sum(take){  
  let result= 10+take;
  alert(`sum is: ${result}`);
}

  return (
    <>
      <h1>Vite + React</h1>
      {/* Different way to handle event */}
      <button onClick={handle}>Button1</button>
      <button onClick={() => alert('I am clicked 2')}>Button2</button>
      <button onClick={
        function handleClick3() {
          alert('I am clicked 3')
        }}>Button3</button>
      <button onClick={handleClick4}>Button4</button>
      <button onClick={()=>sum(5)}>sum</button>
    </>
  )
}

export default App
