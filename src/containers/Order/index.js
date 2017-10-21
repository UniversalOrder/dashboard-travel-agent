import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter, BrowserRouter as Router, Link } from 'react-router-dom'
import { setFilterStatusOrders } from '../../business/order/actions'
import './Order.css'

class Order extends Component {
  state = {
    order: false
  }

  componentDidMount = () => {
    this.props.fetchData()
  }

  render () {
    const { order, isFetching } = this.props

    if (hasErrored) {
      return <p>Sorry! Loading order error.</p>
    }

    if (order) {
      return <Redirect to='/' />
    } else if (isFetching) {
      return <p>Chargement…</p>
    }

    return (

      <Layout>
        <div className='Order'>
          <h1>Order</h1>
          <button>Order</button>
          <button>Accept order</button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order,
    hasErrored: state.failureOrder,
    isFetching: state.requestOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: params => dispatch(fetchOrders()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order))
