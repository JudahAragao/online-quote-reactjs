import React, { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { BudgetDataType } from "../../types/BudgetDataType"

import * as S from './styles'
const AddBadget = () => {

    const [openTextArea, setOpenTextArea] = useState<Boolean>(false)
    const [openProductField, setOpenProductField] = useState<Boolean>(false)
    const [openServiceField, setOpenServiceField] = useState<Boolean>(false)

    const [data, setData] = useState<BudgetDataType>()
    

    const handleChangeBudget = (event: any) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value
        setData((values:any) => ({...values, [name]: value}))
    }

    const handleSubmitBudget = (event: any) => {
        event.preventDefault();
        console.log(data)
    }

    return (
        <S.Container>
            <form onSubmit={handleSubmitBudget}>
                <S.Badget>
                    <S.HeaderBudget>
                        <S.Content>
                            <S.LogoCompany>

                            </S.LogoCompany>
                        </S.Content>

                        <S.Content>
                            <input type="text" value='Nome da empresa' name='myCompany' onChange={handleChangeBudget} disabled/>
                            <input type="text" value='55.555.555/0001-05' name='myCnpj' onChange={handleChangeBudget} disabled/>
                            <input type="text" value='Endereço principal da empresa' name='myAddress' onChange={handleChangeBudget} disabled/>
                        </S.Content>

                        <S.Content>
                            <input type="text" value='(99)9 9999-9999' name='myCellPhone' onChange={handleChangeBudget} disabled/>
                            <input type="text" value='email@email.com' name='myEmail' onChange={handleChangeBudget} disabled/>
                            <div>
                                <span>Vendedor:</span>
                                <input type="text" value='Nome Vendedor' name='seller' onChange={handleChangeBudget} disabled/>
                            </div>
                        </S.Content>
                    </S.HeaderBudget>

                    <S.BodyBudget>
                        <S.ContentBudget>
                            <S.NumBudget>
                                <span>ORÇAMENTO Nº</span>
                                <input type="number" name='numberBudget' onChange={handleChangeBudget} />
                            </S.NumBudget>

                            <S.DateOfIssue>
                                <span>DATA DE EMISSÃO: </span>
                                <input type="text" value={new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()} name='dateIssue' onChange={handleChangeBudget} disabled/>
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
                                    <textarea placeholder="enter the proposal text" name="textBudget" onChange={handleChangeBudget}/>
                                </S.ContentBudget>

                        }

                        <S.ContentBudget>
                            <span>PREVISÃO DE ENTREGA:</span>
                            <input type="date" placeholder="DD/MM/AAAA" name="delivary" onChange={handleChangeBudget}/>
                        </S.ContentBudget>

                        <S.ContentBudget>
                            <S.TitleAndCorporateName>
                                <S.TextTitle>
                                    <p>Dados do Cliente</p>
                                </S.TextTitle>

                                <S.CorporateName>
                                    <span>RAZÃO SOCIAL:</span>
                                    <input type="text" name="costumerCompanyName" onChange={handleChangeBudget}/>
                                </S.CorporateName>
                            </S.TitleAndCorporateName>

                            <S.ContentClient>
                                <S.GroupForm>
                                    <S.GroupInput>
                                        <span>CLIENTE:</span>
                                        <input type="text" name="costumerName" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>A/C:</span>
                                        <input type="text" name="inTheCareOf" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>ENDEREÇO:</span>
                                        <input type="text" name="costumerAddress" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>CIDADE:</span>
                                        <input type="text" name="costumerCity" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                </S.GroupForm>
                                <S.GroupForm>
                                    <S.GroupInput>
                                        <span>CNPJ/CPF:</span>
                                        <input type="text" name="costumerCpfOrCnpj" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>CEP:</span>
                                        <input type="text" name="costumerZipCode" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>ESTADO:</span>
                                        <input type="text" name="costumerState" onChange={handleChangeBudget}/>
                                    </S.GroupInput>
                                    <S.GroupInput>
                                        <span>E-MAIL:</span>
                                        <input type="text" name="email" onChange={handleChangeBudget}/>
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
                                                        <input type="text" placeholder="Name Product" name="productDescription" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Observation" name="productObs" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Variation" name="productVariation" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="The Amount" name="productAmount" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Val. Un." name="productUnitPrice" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Sub Total" name="productSubtotal" onChange={handleChangeBudget}/>
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
                                            <p>SERVIÇOS</p>
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
                                                        <input type="text" placeholder="Name Product" name="serviceDescription" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Observation" name="serviceObs" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Variation" name="serviceVariation" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="The Amount" name="serviceAmount" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Val. Un." name="serviceUnitPrice" onChange={handleChangeBudget}/>
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="Sub Total" name="serviceSubtotal" onChange={handleChangeBudget}/>
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
                                                <input type="text" placeholder="DD/MM/AAAA" name="dueDate" onChange={handleChangeBudget}/>
                                            </td>
                                            <td>
                                                <input type="text" placeholder="EX.: 1250,00" name="totalPriceBudget" onChange={handleChangeBudget}/>
                                            </td>
                                            <td>
                                                <input type="text" placeholder="EX.: Á VISTA" name="formToPayment" onChange={handleChangeBudget}/>
                                            </td>
                                            <td>
                                                <input type="text" placeholder="OPCIONAL" name="obsBudget" onChange={handleChangeBudget}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </S.FormGroupTable>
                        </S.ContentBudget>
                    </S.BodyBudget>

                    <S.FooterBudget>
                        <S.ButtonConfirm>
                            Fechar Orçamento
                        </S.ButtonConfirm>

                        <S.ButtonCancel>
                            Cancelar Orçamento
                        </S.ButtonCancel>

                        <S.ButtonSave type="submit">
                            Cadastrar Orçamento
                        </S.ButtonSave>
                    </S.FooterBudget>

                </S.Badget>
            </form>
        </S.Container>
    )
}

export default AddBadget