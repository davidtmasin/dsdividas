import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    debtId: number;
}

function handleClick(debtId: number) {
    axios(`${BASE_URL}/debts/${debtId}/notification`)
        .then(response => {
            toast.info('SMS enviado com sucesso!')

        })
}

function NotificationButton({ debtId }: Props) {

    return (
        <div className="dsdividas-red-btn" onClick={() => handleClick(debtId)}>
            <img src={icon} alt="Notificar dívida"
                title="Notificar dívida" />
        </div>
    )
}

export default NotificationButton
