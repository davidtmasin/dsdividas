import { useEffect, useState } from "react"
import axios from "axios"

import { BASE_URL } from "../../utils/request"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { registerLocale, setDefaultLocale } from "react-datepicker"
import ptBR from 'date-fns/locale/pt-BR'
registerLocale('ptBR', ptBR)
setDefaultLocale('ptBR')

import NotificationButton from '../NotificationButton'
import './styles.css'
import { Debt } from "../../models/debt"

function DebtsCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 30))
    const max = new Date(new Date().setDate(new Date().getDate() + 30))
    const today = new Date();

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)
    const [actualDate, setActualDate] = useState(today)

    const [debts, setDebts] = useState<Debt[]>([])

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10)
        const dmax = maxDate.toISOString().slice(0, 10)
        console.log(`Data mínima: ${dmin}`)
        console.log(`Data máxima: ${dmax}`)
                
        axios.get(`${BASE_URL}/debts?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {                
                setDebts(response.data.content)
                console.log(response.data.content)
            })
    }, [minDate, maxDate])


    return (
        <>
            <div className="dsdividas-card">
                <div className="dsdividas-debts-title-container">
                    <h2 className="dsdividas-debts-title">Dívidas</h2>

                    <div className="dsdividas-actual-date-container">
                        <DatePicker
                            selected={actualDate}
                            onChange={(date: Date) => setActualDate(date)}
                            className="dsdividas-actual-date"
                            dateFormat="dd/MM/yyyy"
                            title="Data do dia"
                            readOnly
                        />
                    </div>
                </div>
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
                            {
                                debts.map(debt => {
                                    let amountTwoDecimals = debt.amount.toFixed(2)
                                    let amountFormatted = amountTwoDecimals.replace('.', ',')

                                    return (
                                        <tr key={debt.id}>
                                            <td className="show992px">#{(debt.id) < 10 ? (`0${debt.id}`) : (debt.id)}</td>
                                            <td className="show576px">{new Date(debt.date).toLocaleDateString('pt-Br', {timeZone: 'UTC'})}</td>
                                            <td>{debt.description}</td>
                                            <td className="show992px">{debt.expenseType}</td>
                                            <td className="show992px">{(debt.parcelNumber) < 10 ? (`0${debt.parcelNumber}`) : (debt.parcelNumber)}</td>
                                            <td>R$ {amountFormatted}
                                            </td>
                                            <td>
                                                <div className="dsdividas-red-btn-container">
                                                    <NotificationButton />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default DebtsCard