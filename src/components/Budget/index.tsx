import React from "react"
import { Table } from "react-bootstrap"

import * as S from './styles'

const Budget = () => {
    return (
        <S.Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Telephone</th>
                        <th>Date of Issue</th>
                        <th>Shelf Life</th>
                        <th>Unit Val.</th>
                        <th>Amount</th>
                        <th>Total Val.</th>
                        <th>To View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Studio Galaxy LTDA</td>
                        <td>(79)9 9154-3366</td>
                        <td>26/10/2021</td>
                        <td>26/10/2021</td>
                        <td>R$ 3,11</td>
                        <td>670 un.</td>
                        <td>R$ 2080,80</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </S.Container>
    )
}

export default Budget