import axios from 'axios';
import React, { useContext, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [municipality, setMunicipality] = useState(userInfo.municipality);
  const [barangay, setBarangay] = useState(userInfo.barangay);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          municipality,
          barangay,
          password,
          confirmPassword
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
  };

  return (
    <>
      <Container fluid className="login-image text-white vh-100 d-flex align-items-center justify-content-center">
        <Helmet>
          <title>User Profile</title>
        </Helmet>
        <Container className='small-container p-4 rounded'>

          <h1 className="my-3 text-center">User Profile</h1>
          <Form onSubmit={submitHandler}>
            <Row>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="municipality">
                <Form.Label>Municipality</Form.Label>
                <Form.Select
                  type="municipality"
                  required
                  onChange={(e) => setMunicipality(e.target.value)}>
                  <option>Angeles</option>
                  <option>Apalit</option>
                  <option>Arayat</option>
                  <option>Bacolor</option>
                  <option>Candaba</option>
                  <option>Floridablanca</option>
                  <option>Guagua</option>
                  <option>Lubao</option>
                  <option>Mabalacat</option>
                  <option>Macabebe</option>
                  <option>Magalang</option>
                  <option>Masantol</option>
                  <option>Mexico</option>
                  <option>Minalin</option>
                  <option>Porac</option>
                  <option>San Fernando</option>
                  <option>San Luis</option>
                  <option>San Simon</option>
                  <option>Santa Ana</option>
                  <option>Santa Rita</option>
                  <option>Santo Tomas</option>
                  <option>Sasmuan</option>
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
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <div className="mb-3 d-grid pt-1">
                <Button type="submit" variant="success" size="lg" className='light-green'>Submit</Button>
              </div>
            </Row>
          </Form>
        </Container>
      </Container >
    </>
  );
}
