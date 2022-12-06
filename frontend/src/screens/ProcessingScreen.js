import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function ProcessingScreen() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="border rounded p-5 bg-white">
                <Form>
                    <h3 className="text-center">PlantAct requires your I.D for the following:</h3>
                    <ol>
                        <li>Proof that you are a legit citizen of Pampanga.</li>
                        <li>The information is used for verification only.</li>
                        <li>To avoid any bots that may be used against our system.</li>
                        <li>To ensure that you are a real person that matches other information in your account.</li>
                    </ol>

                    <div>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to upload an image of my I.D" />
                        </Form.Group>
                    </div>

                    <div className="text-center">
                        <Button type="submit" variant="success" size="" className='light-green'>Continue</Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}