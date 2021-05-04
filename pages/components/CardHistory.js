import History from './History';
import {dataHistory} from '../../Data/dataHistori'
export default function CardHistory(){
    return(
        <div className='card-history'>
            {
                dataHistory.map(userData => <History img={userData.img} user={userData.user} />)
            }
        </div>
    )
}