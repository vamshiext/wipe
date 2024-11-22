import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router';
 
import { Outlet } from 'react-router';
function Home(    ) {
 
    const tabRoutes = [
        {
            title : "Invoice",
            link :"invoice",
            onClick : handleClick
        },
        {
            title :"Products",
            link : 'products',
            onClick : handleClick
        },
        {
            title : "Customers",
            link : 'customers',
            onClick  :handleClick
        }
    ]

    function handleClick(idx : number){
        const tab = tabRoutes[idx];
        
    }

  return (
    <div className='h-screen flex w-screen'>
    
    <Sidebar width='15%'>
        <div className='    '>
            <div className='border-b-2 p-2'>
                <h1>Hello</h1>
            </div>
  <Menu>
   <Link to="upload">  
   <MenuItem > Upload </MenuItem>
   </Link> 
    <SubMenu label="Tabs">
        {tabRoutes.map(tabs=>{
            return <Link  key={tabs.link} to={tabs.link}> <MenuItem> {tabs.title} </MenuItem> </Link>
        })}
    </SubMenu>
  </Menu>
        </div>
</Sidebar>
<div className='h-full' style={{width:"85%"}}>
  <Outlet />
</div>
    </div>
  )
}

export default Home
