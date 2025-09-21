import React, { useState } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Customers from './components/Customers'
import Products from './components/Products'
import Vendors from './components/Vendors'
import Couriers from './components/Couriers'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'orders':
        return <Orders />
      case 'customers':
        return <Customers />
      case 'products':
        return <Products />
      case 'vendors':
        return <Vendors />
      case 'couriers':
        return <Couriers />
      case 'payments':
        return <div className="text-center py-12"><p className="text-gray-500">Payments management coming soon...</p></div>
      default:
        return <Dashboard />
    }
  }

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}

export default App