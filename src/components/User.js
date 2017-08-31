import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getList } from '../actions/userAction'
import { connect } from 'react-redux'

class User extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    render() {
        const { list } = this.props


        return (

            <div >
                q={this.props.q}
                <br />
                <h2>User List</h2>
                <input type="text" onChange={this.change} />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((d, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>

            </div>
        );
    }
}
User.propTypes = {
    list: PropTypes.array
}

function mapStateToProps(state) {
    return {
        list: state.user.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getList: (q) => { dispatch(getList(q)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
