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
import { selectTab } from "../common/tab/tabActions";

class BillingCycle extends Component {

    componentDidMount(){
        this.props.selectTab('tabList')
    }

    render() {
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
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <h1>DELETA</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)