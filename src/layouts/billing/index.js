import React from 'react'
import DashboardLayout from '../../pagecomponents/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../pagecomponents/Navbars/DashboardNavbar'
import MDBox from '../../components/MdBox'
const index = () => {
  return (
    <>
      <DashboardLayout >
        <DashboardNavbar />
        <MDBox py={3}>
          Billing Page
        </MDBox>
      </DashboardLayout>
    </>
  )
}

export default index