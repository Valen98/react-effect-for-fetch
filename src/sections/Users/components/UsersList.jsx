import PropTypes from "prop-types"
import UserListItem from './UsersListItem'


export default function UserList({UserList}) {

    console.log("inside UserList ", UserList[0])

    return (
        <ul className="user-list">
            {UserList.map((user, i) => (
                <UserListItem key={i} User={user}/>
            ))}
        </ul>
    )
}



UserList.propTypes = {
   UserList: PropTypes.array  
}