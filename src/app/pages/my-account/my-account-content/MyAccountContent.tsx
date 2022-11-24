import { BalanceDisplay } from './balance-display/BalanceDisplay'
import './MyAccountContentStyle.css'

export const MyAccountContent = () => {
    return (
        <div className="accountContent">
            <BalanceDisplay/>
        </div>
    )
}