
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MaleToy from './MaleToy';
import ChildrenToy from './ChildrenToy';
import FemaleToy from './FemaleToy';

const ReactTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
      setSelectedTab(index);
    };

    const [maleToys, setmalesToy] = useState(null);
    const [femaleToys, setmfemaleToy] = useState(null);
    const [childrenToys, setmchildrenToy] = useState(null);

    useEffect(() => {
      fetch('https://action-toys-server-seven.vercel.app/maleToy')
        .then((res) => res.json())
        .then((data) => {
          setmalesToy(data);
        });
    }, []);
    useEffect(() => {
      fetch('https://action-toys-server-seven.vercel.app/femaleToy')
        .then((res) => res.json())
        .then((data) => {
          setmfemaleToy(data);
        });
    }, []);
    useEffect(() => {
      fetch('https://action-toys-server-seven.vercel.app/childrenToy')
        .then((res) => res.json())
        .then((data) => {
          setmchildrenToy(data);
        });
    }, []);




    return (
        <div className='text-center' data-aos="fade-up"data-aos-duration="3000">
          <h2 className='text-4xl font-bold pt-60 pb-10  text-orange-900'>Super Hero Categories </h2>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab >Male Toys</Tab>
          <Tab >Female Toys</Tab>
          <Tab >Children Toys</Tab>
        </TabList>

        <TabPanel>
          <h2  className=' text-orange-900'>Male Toys</h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
  {

  maleToys?.map(maleToy => <MaleToy key={maleToy._id} maleToy={maleToy}></MaleToy>
)
  }</div>
        </TabPanel>
        <TabPanel>
          <h2 className=' text-orange-900'>Female Toys</h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
  {

femaleToys?.map(femaleToy => <FemaleToy key={femaleToy._id} femaleToy={femaleToy}></FemaleToy>
)
  }</div>
        </TabPanel>
        <TabPanel>
          <h2 className=' text-orange-900'>Children Toys</h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
  {

childrenToys?.map(childrenToy => <ChildrenToy key={childrenToy._id} childrenToy={childrenToy}></ChildrenToy>
)
  }</div>
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default ReactTabs;