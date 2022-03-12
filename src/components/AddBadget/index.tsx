import React from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import * as S from './styles'

const AddBadget = () => {
    return (
        <S.Container>
            <S.Badget>
                <S.HeaderBudget>
                    <S.Content>
                        <S.LogoCompany>

                        </S.LogoCompany>
                    </S.Content>

                    <S.Content>
                        <p>Ateliê Jô Aragão</p>
                        <p>CNPJ: 55.555.555/0001-05</p>
                        <p>Rua Manoel Fernandes Barbosa Santos, n 12º</p>
                    </S.Content>

                    <S.Content>
                        <p>(79)9 9154-3366</p>
                        <p>ateliejoaragao@gmail.com</p>
                        <p>Vendedor: Jomara </p>
                    </S.Content>
                </S.HeaderBudget>

                <S.BodyBudget>
                    <S.ContentBudget>
                        <S.NumBudget>
                            <p>ORÇAMENTO Nº 1</p>
                        </S.NumBudget>

                        <S.DateOfIssue>
                            <p>DATA DE EMISSÃO: 30/10/2021</p>
                        </S.DateOfIssue>

                    </S.ContentBudget>

                    <S.ContentBudget>
                        <S.TextInfo>
                            <h3>DESEJA ESCREVER UM TEXTO PARA A PROPOSTA?</h3>
                            <p>Se sim clique na area cinza.</p>
                        </S.TextInfo>

                        <S.IconPlus>
                            <S.IconForText icon={faPlus} />
                        </S.IconPlus>
                    </S.ContentBudget>

                    <S.ContentBudget>
                        <span>PREVISÃO DE ENTREGA:</span>
                        <input type="text" placeholder="DD/MM/AAAA" />
                    </S.ContentBudget>

                    <S.ContentBudget>
                        <S.TitleAndCorporateName>
                            <S.TextTitle>
                                <p>Dados do Cliente</p>
                            </S.TextTitle>

                            <S.CorporateName>
                                <span>RAZÃO SOCIAL:</span>
                                <input type="text" />
                            </S.CorporateName>
                        </S.TitleAndCorporateName>

                        <S.ContentClient>
                            <S.GroupForm>
                                <S.GroupInput>
                                    <span>CLIENTE:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>A/C:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>ENDEREÇO:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>CIDADE:</span>
                                    <input type="text" />
                                </S.GroupInput>
                            </S.GroupForm>
                            <S.GroupForm>
                                <S.GroupInput>
                                    <span>CNPJ/CPF:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>CEP:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>ESTADO:</span>
                                    <input type="text" />
                                </S.GroupInput>
                                <S.GroupInput>
                                    <span>E-MAIL:</span>
                                    <input type="text" />
                                </S.GroupInput>
                            </S.GroupForm>
                        </S.ContentClient>
                    </S.ContentBudget>

                    <S.ContentBudget>
                        <span>ADICIONAR PRODUTOS</span>
                        <S.IconForProduct icon={faPlus} />
                    </S.ContentBudget>

                    <S.ContentBudget>
                        <span>ADICIONAR SERVIÇOS</span>
                        <S.IconForServices icon={faPlus} />
                    </S.ContentBudget>

                    <S.ContentBudget>
                        <S.TitlePayment>
                            <span>DADOS DO PAGAMENTO</span>
                        </S.TitlePayment>

                        <S.FormGroupTable>
                            <table>
                                <thead>
                                    <tr>
                                        <th>VENCIMENTO</th>
                                        <th>VALOR TOTAL</th>
                                        <th>FORMA DE PAGAMENTO</th>
                                        <th>OBSERVAÇÃO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="DD/MM/AAAA"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder="EX.: 1250,00"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder="EX.: Á VISTA"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder="OPCIONAL"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </S.FormGroupTable>
                    </S.ContentBudget>
                </S.BodyBudget>

            </S.Badget>
        </S.Container>
    )
}

export default AddBadget