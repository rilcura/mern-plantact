import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import '../index.css'
import TnCsModal from '../components/footer/TnCsModal';
import ReCaptcha from "react-google-recaptcha"

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const captchaRef = useRef(null)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [municipality, setMunicipality] = useState([])
  const [barangay, setBarangay] = useState([])
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    await Axios.post('/api/users/post', { token })
      .then(res => console.log(res))
      .catch((error) => {
        console.log(error);
      })

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        municipality,
        barangay,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/processing');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container fluid className="login-image text-white min-vh-100 d-flex align-items-center justify-content-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className='mt-5'>
        <Container className='small-container text-white p-4 rounded my-3'>
          <h1 className="my-3">Create an account</h1>
          <Form onSubmit={submitHandler}>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="municipality">
                <Form.Label>Municipality</Form.Label>
                <Form.Select
                  type="municipality"
                  required
                  onChange={(e) => setMunicipality(e.target.value)}>
                  <option >Select Municipality</option>
                  <option >Angeles</option>
                  <option >Apalit</option>
                  <option >Arayat</option>
                  <option >Bacolor</option>
                  <option >Candaba</option>
                  <option >Floridablanca</option>
                  <option >Guagua</option>
                  <option >Lubao</option>
                  <option >Mabalacat</option>
                  <option >Macabebe</option>
                  <option >Magalang</option>
                  <option >Masantol</option>
                  <option >Mexico</option>
                  <option >Minalin</option>
                  <option >Porac</option>
                  <option >San Fernando</option>
                  <option >San Luis</option>
                  <option >San Simon</option>
                  <option >Santa Ana</option>
                  <option >Santa Rita</option>
                  <option >Santo Tomas</option>
                  <option >Sasmuan</option>
                </Form.Select >
              </Form.Group >

              <Form.Group as={Col} className="mb-3" controlId="barangay">
                <Form.Label>Barangay</Form.Label>
                <Form.Control
                  type="barangay"
                  required
                  onChange={(e) => setBarangay(e.target.value)}
                />

              </Form.Group>

              <div className="my-2 d-grid">
                <Button type="submit" variant="success" size="" className='light-green'>Create account</Button>
              </div>

              <ReCaptcha
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
              />

              <div className='d-flex justify-content-between'>
                <Form.Group className="my-2 d-flex align-items-center">
                  <Form.Check
                    required
                    // label='Agree to terms and conditions'
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    className='me-1'
                  />
                  Agree  to<TnCsModal />


                </Form.Group>

                <div className="mt-3">
                  Already have an account?{' '}
                  <Link to={`/?redirect=${redirect}`}>Sign-In</Link>
                </div>
              </div>
            </Row>
          </Form >
        </Container >
      </div>
    </Container >
  );
}
