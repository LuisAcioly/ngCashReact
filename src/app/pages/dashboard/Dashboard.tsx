import './DashboardStyle.css';
import { LogoutButton } from './logout-button/LogoutButton';
import { Sidebar } from './sidebar/Sidebar';

const Logo = require('../../shared/assets/images/logo.png');

interface IDashboardProps {
    content: React.ReactNode
}

export const Dashboard: React.FC<IDashboardProps> = ({content}) => {
    return(
        <div className="dashboardContent">
            <div className="dashboardHeader">
                <img src={Logo} alt="NG Cash" />
                <LogoutButton/>
            </div>
            <div className="dashboardBody">
                <Sidebar/>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}