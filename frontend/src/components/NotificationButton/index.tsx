import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsdividas-red-btn">
            <img src={icon} alt="Notificar dívida"
                title="Notificar dívida" />
        </div>
    )
}

export default NotificationButton
