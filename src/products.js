import './car.css';
import Car from './car';
function Products() {
    return (
        <div className="car">

            <Car brand="Mercedes" color="black" src="https://media.zigcdn.com/media/content/2023/Sep/cover_651417aa1554c.jpg" discription="The brand's origins lie in Daimler-Motoren-Gesellschaft's 1901 Mercedes and Carl Benz's 1886 Benz Patent-Motorwagen, which is widely regarded as the first internal combustion engine in a self-propelled automobile. The slogan for the brand is the Best or Nothing" />
            <Car brand="BMW" color="#6a994e" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiMM9g3AqBXTkgG7H6WpC3fVjm3fSC7cLUA&usqp=CAU" discription="Cars are marketed under the BMW, Mini, and Rolls-Royce brands, and motorcycles are marketed under the BMW Motorrad brand. It is on the list of car competitors in the world and is the biggest competitor to other very popular German cars such as Mercedes, Audi, Volkswagen, Maybach and Smart. In 2015, BMW was the second largest automobile producer in the world, with 2,279,503 vehicles produced." />
            <Car brand="Audi" color="red" src="https://www.carscoops.com/wp-content/uploads/2023/05/ABT-Audi-RS6-LE-main.jpg" discription="Audi AG is a German company that produces luxury cars under the Audi name and is part of the Volkswagen Group. The name Audi comes from the Latin translation of the founder August Horch's surname, which means Listen in German. Audi's headquarters are located in Ingolstadt, Bavaria, Germany" />
            <Car brand="volvo" color="#3a86ff" src="https://1884403144.rsc.cdn77.org/foto/volvo/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/4657641.jpg?v=0&st=__BfEzL-EpVZKTJ7cN4EZK3UUa0nQlXBOkVcUFaae28&ts=1600812000&e=0" discription="Volvo Cars (Swedish: Volvo personvagnar, styled VOLVO in the company's logo) is a Swedish multinational manufacturer of luxury vehicles. Volvo is headquartered in Torslanda, Gothenburg. The company manufactures SUVs, station wagons, and sedans. The company's main marketing arguments are safety and its Swedish heritage and design." />
        </div>
    );
}

export default Products;