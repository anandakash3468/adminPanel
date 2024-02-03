import React from 'react'
import DashboardLayout from '../../pagecomponents/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../pagecomponents/Navbars/DashboardNavbar'
import MDBox from '../../components/MdBox'
// import DataTable from './components/tablePage'
import BasicTable from './components/tablePage'

const index = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={3}>
        
      <BasicTable/>
      </MDBox>
    </DashboardLayout>
  )
}

export default index