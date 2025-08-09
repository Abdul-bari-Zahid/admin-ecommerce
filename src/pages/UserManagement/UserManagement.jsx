import './UserManagement.css'

function UserManagement() {
    return (
        <div id="userManagementContainer">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Amir</td>
                        <td>Amir@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Waqar</td>
                        <td>Waqar@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Usman</td>
                        <td>Usman@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserManagement