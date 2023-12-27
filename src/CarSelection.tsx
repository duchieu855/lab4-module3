import { useState } from "react"


function CarSelection ({data} : {data : {type : string[]; color: string[]}}) {
    const {type,color} = data
    const [colorCar,setColorCar] = useState<string>(color[0])
    const [typeofCar,setTypeofCar] = useState<string>(type[0])
    console.log("typeofCar", typeofCar)
    console.log("colorCar", colorCar)
   

    return (
        <>
            <h1>Select you car</h1>
            <label htmlFor="typeCar">Select a car</label>
            <select name="typeCar" id="typeCar" onChange={(e) => setTypeofCar(e.target.value)}>
                {type.map((typeCar : string) => <option key={typeCar} value={typeCar}>{typeCar}</option>)}
                
            </select>
            <br/>
            <label htmlFor="color">Select color</label>
            <select name="color" id="color" onChange={(e) => setColorCar(e.target.value)}>
                {color.map((colorCar : string) => <option key={colorCar} value={colorCar}>{colorCar}</option>)}
            </select>

            <p>you selected a {colorCar} - {typeofCar}</p>
            
        </>
    )
}

export default CarSelection