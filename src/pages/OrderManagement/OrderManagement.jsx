import data from '../../Data/Data'
import './OrderManagement.css'

function OrderManagement() {
    const base = "/src/assets/stock/";
    return (
        <div id="orderManagementContainer">
            <table id='orderTable'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(0,5).map((v, i) => {
                            return (
                                <tr>
                                    <td><img src={base+v.MainImage} alt="" id='orderedProductImage'/></td>
                                    <td>{v.Title.slice(0,12)}</td>
                                    <td>{v.Quantity}</td>
                                    <td>{v.Price}</td>
                                    <td>Pending</td>
                                    <td id='orderAction'>
                                        <button id='cancelBtn' className='actionBtn'>Cancel</button>
                                        <button id='readyToShipBtn' className='actionBtn'>Ready to Ship</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderManagement