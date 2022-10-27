import React from 'react'
import './myAccount.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from '../AboutMe/AboutMe';
import MyOrders from '../MyOrders/MyOrders';
import ChangePassword from '../ChangePassword/ChangePassword';


const MyAccount = () => {
  return (
    <div className='my-container'>
        <div className="my-row">
            <h2 className="my-title">My Account</h2>
        </div>
        <div className="my-row">
            <Tabs className="tabs">
                <TabList>
                    <Tab>About Me</Tab>
                    <Tab>Orders</Tab>
                    <Tab>Settings</Tab>
                </TabList>

                <TabPanel>
                    <AboutMe />
                </TabPanel>
                <TabPanel>
                    <MyOrders />
                    
                </TabPanel>
                <TabPanel>
                    <ChangePassword />
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default MyAccount