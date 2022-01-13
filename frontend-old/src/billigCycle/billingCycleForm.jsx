import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'
class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debits.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        const { handleSubmit, readOnly, credits, debits } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' label='Nome' cols='12 4' placeholder='Informe o Nome' readOnly={readOnly} component={labelAndInput} />
                    <Field name='month' label='Mês' type='number' cols='12 4' placeholder='Informe o Mês' readOnly={readOnly} component={labelAndInput} />
                    <Field name='year' label='Ano' type='number' cols='12 4' placeholder='Informe o Ano' readOnly={readOnly} component={labelAndInput} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debits} readOnly={readOnly} field='debits' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel ? this.props.submitLabel : 'Submit'}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debits: selector(state, 'debits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)