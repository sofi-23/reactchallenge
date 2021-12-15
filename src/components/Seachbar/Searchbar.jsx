import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default function Searchbar({handleSubmit, values, handleChange}) {

    return (
        <>  <Form className="form w-50 m-auto"  onSubmit={handleSubmit} >
                <FormGroup>
                    <Label for="search" hidden >Search hero</Label>
                    <Input id="search"    
                        name="heroName"
                        placeholder="Search for hero"
                        type="text"
                        value={values.heroName}
                        onChange={handleChange}
                        />
                </FormGroup>
                <Button type="submit" className="formButton">Buscar</Button>
            </Form>
        </>
    )
}