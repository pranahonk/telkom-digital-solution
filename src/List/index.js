import React, {Component} from "react";
import axios from 'axios';
import {Button, Col, Container, Form, InputGroup, Row, Table} from 'react-bootstrap';

import 'boxicons';
import "./style.css"


class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.fetchData = this.fetchData.bind(this);

        this.state = {
            username: 'pranahonk',
            users: []
        };
    }


    handleChange(event) {
        this.setState({
            username: event.target.value
        });
    }


    fetchData() {
        console.log(this.state.username);

        if (this.state.username) {
            axios.get(`https://api.github.com/users/${this.state.username}/repos`, {
            })
                .then((response) => {
                    const persons = response.data;
                    this.setState({
                        users: this.state.users = [...persons]
                    })
                    // console.log('state user data', this.state.users);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    componentWillMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <h1>Cari Github <span><box-icon name='github' type='logo'></box-icon></span> Username</h1>
                    <Row>
                        <Col md={5}>
                            <Form>
                                <InputGroup className="mt-5">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <box-icon name='search'></box-icon>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cari Github username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form>
                        </Col>
                        <Col md={5} className="flex-end">
                            <Button variant="primary" onClick={this.fetchData}>Cari</Button>
                        </Col>
                    </Row>


                    <Table striped bordered hover className="mt-5">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Repository Name</th>
                            <th>Repository URL's</th>
                            <th>Repository Language</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(
                            (item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+=1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.clone_url}</td>
                                        <td>{item.language}</td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default App;
