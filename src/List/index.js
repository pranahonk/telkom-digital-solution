import {Table, Container, InputGroup, Form}  from 'react-bootstrap';
import React, { useState, useEffect  } from "react";
import axios from 'axios';
import 'boxicons';

const App = (props) => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState( );

    const handleKeyDown = (evt) => {
        evt.preventDefault();
        console.log(`Submitting Name ${username}`)
    }

    useEffect(async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );

        setData(result.data);
        console.log(data)
    });
    return (
        <div className="App">
            <Container>
                <h1>Cari Github <span><box-icon name='github' type='logo' ></box-icon></span> Username</h1>
                <Form inline>
                    <InputGroup className="mt-5">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend"><box-icon name='search'></box-icon></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Cari Github username"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
