import Slant from '../elements/Slant';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/index';

export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(navActions.logNav(isLoggedIn));
  }, [isLoggedIn, dispatch]);

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const navArr = useSelector((state) => Object.values(state.nav));

  const navigation = navArr.map((button) =>
    button ? (
      <li className={'col'} key={button?.route}>
        <button
          className="foot-links"
          onClick={() => handleButtonClick(button?.route)}
        >
          {button?.label}
        </button>
      </li>
    ) : null
  );

  return (
    <div className="footer text-white">
      <Slant tilt={150} top />
      <footer className="text-center pt-4">
        <div className="container-fluid">
          <section className="mt-5">
            <ul className="row align-self-center p-4 ">{navigation}</ul>
          </section>
          <hr className="my-4" />
          <section className="text-center m-3">
            <a href="https://www.vezzco.com/" className="icon me-4">
              <i aria-hidden className="fa fa-globe "></i>
            </a>
            <a href="/" className="icon me-4">
              <i aria-hidden className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="icon me-4">
              <i aria-hidden className="fab fa-github"></i>
            </a>
          </section>
          <section className="text-center">
            © 2023 Copyright:
            <a className="mx-2" href="https://www.vezzco.com/">
              VezzCo
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}
