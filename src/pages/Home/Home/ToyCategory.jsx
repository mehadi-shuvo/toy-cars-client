import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCard from "./CategoryCard";


const ToyCategory = () => {
    const [raceCar, setRaceCar] = useState([])
    const [jeepCars, setJeepCars] = useState([])
    const [truck, setTruck] = useState([])
    useEffect(() => {
        fetch('https://toy-cars-server-six.vercel.app/category-toy/racecar')
            .then(res => res.json())
            .then(data => setRaceCar(data))
    }, []);
    const handleJeep = category =>{
        console.log(category);
        fetch(`https://toy-cars-server-six.vercel.app/category-toy/${category}`)
        .then(res => res.json())
        .then(data => setJeepCars(data))
    }
    const handleTuck = category =>{
        fetch(`https://toy-cars-server-six.vercel.app/category-toy/${category}`)
        .then(res => res.json())
        .then(data => setTruck(data))
    }

    return (
        <div className="w-4/5 mx-auto mb-20">
            <h4 className="text-5xl font-bold text-center mb-6">Car <span className="text-red-500">Category</span></h4>
            <Tabs >
                <TabList>
                    <div  className="flex gap-3 justify-center text-white font-semibold mb-5">
                        <Tab className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' >Race Car</Tab>
                        <Tab onClick={()=>handleJeep('jeepcar')} className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' >Jeep Car</Tab>
                        <Tab onClick={()=>handleTuck('truckcar')} className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' >Truck</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        raceCar.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        jeepCars.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        truck.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyCategory;