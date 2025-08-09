import { FaBoxOpen, FaUser } from 'react-icons/fa'
import './Dashboard.css'
import { FaCartShopping } from 'react-icons/fa6'
import { MdCategory } from 'react-icons/md'
import FakeBarChart from './FakeBarChart'

function Dashboard() {
  return (
    <div>
      <div>
        <FakeBarChart />
      </div>
      <div id="dashboardContainer">
      <div className="dashboardBox">
        <FaUser className='totalIcons' />
        <div className="totalText">
          <p>Total Users</p>
          <h1>1201</h1>
        </div>
      </div>
      <div className="dashboardBox">
        <FaCartShopping className='totalIcons' />
        <div className="totalText">
          <p>Total Orders</p>
          <h1>518</h1>
        </div>
      </div>
      <div className="dashboardBox">
        <FaBoxOpen className='totalIcons' />
        <div className="totalText">
          <p>Total Products</p>
          <h1>150</h1>
        </div>
      </div>
      <div className="dashboardBox">
        <MdCategory className='totalIcons' />
        <div className="totalText">
          <p>Total Category</p>
          <h1>10</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard