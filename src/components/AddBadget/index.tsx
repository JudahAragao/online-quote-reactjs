import React, { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import * as S from './styles'

const AddBadget = () => {

    const [openTextArea, setOpenTextArea] = useState<Boolean>(false)
    const [openProductField, setOpenProductField] = useState<Boolean>(false)
    const [openServiceField, setOpenServiceField] = useState<Boolean>(false)

    return (
        <S.Container>
            <S.Badget>
                <S.HeaderBudget>
                    <S.Content>
                        <S.LogoCompany>

                        </S.LogoCompany>
                    </S.Content>

                    <S.Content>
                        <p>Nome da empresa</p>
                        <p>CNPJ: 55.555.555/0001-05</p>
                        <p>Endereço principal da empresa</p>
                    </S.Content>

                    <S.Content>
                        <p>(99)9 9999-9999</p>
                        <p>email@email.com</p>
                        <p>Vendedor: Nome Vendedor </p>
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

                    {
                        openTextArea === false
                            ? <S.ContentBudget
                                onClick={() => setOpenTextArea(!openTextArea)}
                            >
                                <S.TextInfo>
                                    <h3>DESEJA ESCREVER UM TEXTO PARA A PROPOSTA?</h3>
                                    <p>Se sim clique na area cinza.</p>
                                </S.TextInfo>

                                <S.IconPlus>
                                    <S.IconForText icon={faPlus} />
                                </S.IconPlus>
                            </S.ContentBudget>

                            : <S.ContentBudget>
                                <span
                                    onClick={() => setOpenTextArea(!openTextArea)}
                                >X</span>
                                <textarea placeholder="enter the proposal text" />
                            </S.ContentBudget>

                    }

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

                    {
                        openProductField === false
                            ? <S.ContentBudget
                                onClick={() => setOpenProductField(!openProductField)}
                                openProductField={openProductField}
                            >
                                <span>ADICIONAR PRODUTOS</span>
                                <S.IconForProductAndService icon={faPlus} />
                            </S.ContentBudget>

                            : <S.ContentBudget>
                                <S.HeaderProductAndService>
                                    <div>
                                        <p>PRODUTOS</p>
                                    </div>
                                    <div
                                        onClick={() => setOpenProductField(!openProductField)}
                                    >
                                        <p>CANCELAR</p>
                                    </div>
                                </S.HeaderProductAndService>

                                <S.BodyProductAndService>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ITEM</th>
                                                <th>DESCRIÇÃO</th>
                                                <th>OBSERVAÇÕES</th>
                                                <th>VARIAÇÃO</th>
                                                <th>QTDE</th>
                                                <th>VAL. UN.</th>
                                                <th>SUB TOTAL</th>
                                                <th>AÇÃO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>#</p>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Name Product" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Observation" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Variation" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="The Amount" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Val. Un." />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Sub Total" />
                                                </td>
                                                <td>
                                                    <p>Y</p>
                                                    <p>N</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </S.BodyProductAndService>
                                
                                <S.FooterProductAndService>
                                    <S.FinalValueItemsProductAndService>
                                        <span>
                                            <p>QTDE TOTAL: 600 un.</p>
                                        </span>
                                        <span>
                                            <p>TOTAL PRODUTOS: R$ 2005,00</p>
                                        </span>
                                    </S.FinalValueItemsProductAndService>

                                    <S.AddNewItemProductAndService>
                                        <span>ADICIONAR ITEM</span>
                                        <S.IconForProductAndService icon={faPlus} />
                                    </S.AddNewItemProductAndService>
                                </S.FooterProductAndService>
                            </S.ContentBudget>
                    }

                    {
                        openServiceField === false
                            ? <S.ContentBudget
                                onClick={() => setOpenServiceField(!openServiceField)}
                                openServiceField={openServiceField}
                            >
                                <span>ADICIONAR SERVIÇOS</span>
                                <S.IconForProductAndService icon={faPlus} />
                            </S.ContentBudget>

                            : <S.ContentBudget>
                                <S.HeaderProductAndService>
                                    <div>
                                        <p>PRODUTOS</p>
                                    </div>
                                    <div
                                        onClick={() => setOpenServiceField(!openServiceField)}
                                    >
                                        <p>CANCELAR</p>
                                    </div>
                                </S.HeaderProductAndService>

                                <S.BodyProductAndService>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ITEM</th>
                                                <th>DESCRIÇÃO</th>
                                                <th>OBSERVAÇÕES</th>
                                                <th>VARIAÇÃO</th>
                                                <th>QTDE</th>
                                                <th>VAL. UN.</th>
                                                <th>SUB TOTAL</th>
                                                <th>AÇÃO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>#</p>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Name Product" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Observation" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Variation" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="The Amount" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Val. Un." />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Sub Total" />
                                                </td>
                                                <td>
                                                    <p>Y</p>
                                                    <p>N</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </S.BodyProductAndService>

                                <S.FooterProductAndService>
                                    <S.FinalValueItemsProductAndService>
                                        <span>
                                            <p>QTDE TOTAL: 600 un.</p>
                                        </span>
                                        <span>
                                            <p>TOTAL PRODUTOS: R$ 2005,00</p>
                                        </span>
                                    </S.FinalValueItemsProductAndService>

                                    <S.AddNewItemProductAndService>
                                        <span>ADICIONAR ITEM</span>
                                        <S.IconForProductAndService icon={faPlus} />
                                    </S.AddNewItemProductAndService>
                                </S.FooterProductAndService>
                            </S.ContentBudget>
                    }



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
                                            <input type="text" placeholder="DD/MM/AAAA" />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="EX.: 1250,00" />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="EX.: Á VISTA" />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="OPCIONAL" />
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