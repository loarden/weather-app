import styles from "../index.css"


function Input(props) {
  const cities = ['Budapest', 'London', 'Miskolc', 'New York'];
  
  return (
    <div className="w-full max-w-xl">
      <input className="m-2 p-3 w-full h-15" type="search" placeholder="Search..." list="search"/>
      <datalist id="search">
        {cities.map((city, index) => (
          <option className="w-full" key={index} value={city}></option>
        ))}
      </datalist>
    </div>
  )
}

export default Input;