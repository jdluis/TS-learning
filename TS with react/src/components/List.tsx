import { FunctionComponent } from "react";

interface Props {
    children?: React.ReactNode; //accepts all children
    users: Array<{
        nick: string;
        phone: number;
        isActive: boolean;
        description?: string;
        avatar?: string;
    }>
}

//3 Ways for declare funcions and set type
//const List: FC<Props> = ({ users }) => {           
//const List = ({ users, children }: Props) => {     
const List: FunctionComponent<Props> = ({ users, children }) => {
    const renderList = (): JSX.Element[] => { //tipo jsx element
        return users.map(user => {
            return (
                <li key={user.nick}>
                    <h6>{user.nick}</h6>
                    <p><span>Tel: {user.phone}</span></p>
                    <p>{user.description?.substring(0, 100)}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {children}
            {renderList()}
        </ul>);
}

export default List;