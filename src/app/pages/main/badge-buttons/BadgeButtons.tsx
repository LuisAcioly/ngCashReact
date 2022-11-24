import './BadgeButtonsStyle.css';
const PlayStoreBadge = require('../../../shared/assets/images/google-play-badge.png');
const AppStoreBadge = require('../../../shared/assets/images/app-store-badge.png');
 
 export const BadgeButtons = () => {
    return (
        <div className="badges">
            <a href="https://play.google.com/store/apps/details?id=com.neaglebank" target="_blank">
                <img src={PlayStoreBadge} alt="Obter no playstore" id='playStore' />
            </a>

            <a href="https://apps.apple.com/app/id1480105326" target="_blank">
                <img src={AppStoreBadge} alt="Obter no playstore" id='appStore'/>
            </a>
        </div>
    )
 }