import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import NotificationButton from '../NotificationButton'
import './styles.css'

function DebtsCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date();

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)



    return (
        <>
            <div className="dsdividas-card">
                <h2 className="dsdividas-debts-title">Dívidas</h2>
                <h3 className="dsdividas-debts-subtitle">Escolha um período (Início - Fim)</h3>
                <div>
                    <div className="dsdividas-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsdividas-form-control"
                            dateFormat="dd/MM/yyyy"
                            title="Data de início"
                        />
                    </div>
                    <div className="dsdividas-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsdividas-form-control"
                            dateFormat="dd/MM/yyyy"
                            title="Data de fim"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsdividas-debts-table">
                        <thead>
                            <tr>
                                <th className="show992px">ID</th>
                                <th className="show576px">Data</th>
                                <th>Descrição</th>
                                <th className="show992px">Tipo de Despesa</th>
                                <th className="show992px">Nº de Parcelas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#666</td>
                                <td className="show576px">12/12/2012</td>
                                <td>Aluguel</td>
                                <td className="show992px">Fixa</td>
                                <td className="show992px">1</td>
                                <td>R$ 550</td>
                                <td>
                                    <div className="dsdividas-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default DebtsCard