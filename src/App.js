import Inversion from "./Componentes/Inversion/Inversion";

const App = () => {
  
  return (
    <div className="App">
      <div className="App">
        <h1>componente de función</h1>
        <Inversion firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
        <Inversion firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
        <Inversion firstName={"Millard"} lastName={"Fillmore"} age = {50} hairColor={"Brown"}/>
        <Inversion firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
      </div>
    </div>
  );
}


export default App;
