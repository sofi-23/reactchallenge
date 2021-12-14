import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik'


export default function Searchbar() {
    const handleOnSubmit = (e) => {
        console.log(e)
    } 
    return (
        <>
            <Formik 
            initialValues={
                {heroName: ""}
            }
            onSubmit={ (e ) => 
                handleOnSubmit(e)
            }
            validate={(value) => {
                if (value.heroName === "") {
                    console.log("vacio")
                } else {
                    console.log("escribio")
                }
            }
            }
            >
                {({handleSubmit, values, handleChange})=> (
                   
                    <Form className="form" handleSubmit={handleSubmit} >
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
                    </Form>
                    )}
            </Formik>
        </>
    )
}