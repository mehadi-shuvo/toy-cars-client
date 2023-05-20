import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCard from "./CategoryCard";


const ToyCategory = () => {
    const [category, setCategory] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/toys')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);
    const ByCategory = (subcategory) => {
        const items = category.filter(items => items.subcategory === subcategory)
        setItems(items)
    }
    return (
        <div className="w-4/5 mx-auto mb-20">
            <Tabs >
                <TabList>
                    <div  className="flex gap-3 justify-center text-white font-semibold mb-5">
                        <Tab className={`py-2 px-4 rounded-lg cursor-pointer hover:bg-red-700 bg-red-500 border border-red-500`} >All</Tab>
                        <Tab className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' onClick={() => ByCategory('racecar')}>Race Car</Tab>
                        <Tab className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' onClick={() => ByCategory('jeepcar')}>Jeep Car</Tab>
                        <Tab className='py-2 px-4 bg-red-500 rounded-lg cursor-pointer hover:bg-red-700' onClick={() => ByCategory('truckcar')}>Truck</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        category.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        items.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        items.map(item => <CategoryCard
                            key={item._id}
                            item={item}></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className="grid md:grid-cols-3 gap-5">
                    {
                        items.map(item => <CategoryCard
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