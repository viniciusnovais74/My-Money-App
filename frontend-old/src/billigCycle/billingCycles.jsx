import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContentHeader from "../common/template/content-header";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { create, update, remove, init } from "./billingCycleActions";
import List from '../billigCycle/billingCycleList'
import Formu from './billingCycleForm'
class BillingCycle extends Component {

    componentDidMount() {
    this.props.init()
    }

    render() {
        const { create, update, remove } = this.props
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Criar' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Formu onSubmit={create}  submitLabel='Incluir' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Formu onSubmit={update} submitLabel='Atualizar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Formu onSubmit={remove} readOnly={true} submitClass='danger' submitLabel='Deletar'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ update, create, remove, init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)