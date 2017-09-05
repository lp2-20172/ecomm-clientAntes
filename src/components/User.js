import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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

            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            J&J
                            </Avatar>
                    }
                    title="User List"
                    subheader="Users list"
                />

                <CardContent>
                    <Typography component="p">
                        q={this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />

                    <Paper style={{
                            overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Nombre</TableCell>
                                    <TableCell >Email</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.name}</TableCell>
                                        <TableCell >{d.email}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
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
