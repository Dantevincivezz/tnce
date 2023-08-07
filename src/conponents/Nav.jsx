import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/index';

export default function Nav() {
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
    <nav className="nav-top d-flex container-fluid overflow-hidden justify-content-between p-3">
      <ul className="row align-self-center">{navigation}</ul>
    </nav>
  );
}
