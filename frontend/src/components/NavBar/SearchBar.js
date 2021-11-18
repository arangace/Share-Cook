import React from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { GrSearch } from "react-icons/gr";
export default function NavBar() {
    return (
        <>
            <div id="searchBar">
                <Form className="d-flex">
                    <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                        Search
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text><GrSearch></GrSearch></InputGroup.Text>
                        <FormControl id="inlineFormInputGroupUsername" placeholder="What's cookin.." />
                    </InputGroup>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </>
    );
}