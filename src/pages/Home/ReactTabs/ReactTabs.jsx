
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
      fetch('http://localhost:5000/maleToy')
        .then((res) => res.json())
        .then((data) => {
          setmalesToy(data);
        });
    }, []);
    useEffect(() => {
      fetch('http://localhost:5000/femaleToy')
        .then((res) => res.json())
        .then((data) => {
          setmfemaleToy(data);
        });
    }, []);
    useEffect(() => {
      fetch('http://localhost:5000/childrenToy')
        .then((res) => res.json())
        .then((data) => {
          setmchildrenToy(data);
        });
    }, []);




    return (
        <div className='text-center'>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Male Toys</Tab>
          <Tab>Female Toys</Tab>
          <Tab>Children Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>Male Toys</h2>
          <div className="flex text-center">
  {

  maleToys?.map(maleToy => <MaleToy key={maleToy._id} maleToy={maleToy}></MaleToy>
)
  }</div>
        </TabPanel>
        <TabPanel>
          <h2>Female Toys</h2>
          <div className="flex text-center">
  {

femaleToys?.map(femaleToy => <FemaleToy key={femaleToy._id} femaleToy={femaleToy}></FemaleToy>
)
  }</div>
        </TabPanel>
        <TabPanel>
          <h2>Children Toys</h2>
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