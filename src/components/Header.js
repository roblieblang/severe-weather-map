import { Icon } from '@iconify/react'
import wildfireIcon from '@iconify/icons-mdi/earth'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={wildfireIcon} /> Global Severe Weather Tracking 
                <div className="credits">Powered by NASA EONET and Google Maps</div>
            </h1>
        </header>
    )
}

export default Header
