import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

// Screens
import HomeScreen from './screens/homeScreen/HomeScreen'
import ServiceScreen from './screens/serviceScreen/ServiceScreen'
import PreventionScreen from './screens/preventionScreen/PreventionScreen'
import NewScreen from './screens/newsScreen/newScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ShopScreen from './screens/ShopScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BsPersonCircle } from 'react-icons/bs';
import SupportAdmin from './components/SupportChat/SupportAdmin';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/signin';
  };

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="success" variant="dark" expand="lg">
            <Container>

              <LinkContainer to="#">
                <Navbar.Brand className='font-logo '>PlantAct</Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="w-100 px-2 me-auto justify-content-end">

                  <LinkContainer activeClassName="activeNav" to="/">
                    <Navbar.Brand>Home</Navbar.Brand>
                  </LinkContainer>
                  <LinkContainer activeClassName="activeNav" to="/news">
                    <Navbar.Brand>News</Navbar.Brand>
                  </LinkContainer>
                  <LinkContainer activeClassName="activeNav" to="/services">
                    <Navbar.Brand>Services</Navbar.Brand>
                  </LinkContainer>
                  <LinkContainer activeClassName="activeNav" to="/preventions">
                    <Navbar.Brand>Preventions</Navbar.Brand>
                  </LinkContainer>
                  <LinkContainer activeClassName="activeNav" to="/reports">
                    <Navbar.Brand>Reports</Navbar.Brand>
                  </LinkContainer>

                  {userInfo ? (
                    <>
                      <NavDropdown title={<BsPersonCircle />}>
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    </>
                  ) : (
                    <Link className="nav-link" path="/signin">
                      Sign In
                    </Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Admin' id="admin-nav-dropdown">
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/support">
                        <NavDropdown.Item>SupportChat</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Posts</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        {/* Navbar start */}
        <main>

          <Routes>
            <Route path="/news" element={<NewScreen />} />
            <Route path="/services" element={<ServiceScreen />} />
            <Route path="/preventions" element={<PreventionScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}

            <Route
              path="/admin/users"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/products"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/support"
              element={
                <AdminRoute>
                  <SupportAdmin />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/product/:id"
              element={
                <AdminRoute>
                  <ProductEditScreen />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/user/:id"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            ></Route>

            <Route path="/" element={<HomeScreen />} />
            <Route path="/reports" element={<ShopScreen />} />
          </Routes>

        </main>
        {/* Navbar end */}
      </BrowserRouter >
    </>
  )
}

export default App;
