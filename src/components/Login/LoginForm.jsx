
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function LoginForm() {
    return(
        <div className="loginContainer">
            <Form className="form"> 
                <h2 className="loginHeader">Login</h2>
                <FormGroup>
                    <Label for="email" hidden>Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="password" hidden>Name</Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        />
                </FormGroup>
                <Button className="formButton">
                Submit
                </Button>
            </Form>
        </div>
    )   
}
