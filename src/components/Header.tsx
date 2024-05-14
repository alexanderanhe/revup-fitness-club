import { NavLink } from "react-router-dom";

const menuNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Assessment', href: '/assessment' },
  { name: 'Trainings', href: '/trainings' },
];

const Header = () => {

  const handleClick = () => {
    const elem: HTMLElement | null = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <header className="mx-auto px-6 max-w-7xl md:px-12">
      <div className="navbar bg-base-100 px-0 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} role="button" className="btn btn-neutral-content btn-circle">
              <svg className="size-8" fill="#777777" viewBox="0 0 16 16">
                  <path d="M6.5,11A1.5,1.5,0,1,1,5,9.5,1.5,1.5,0,0,1,6.5,11ZM5,3.5A1.5,1.5,0,1,0,6.5,5,1.5,1.5,0,0,0,5,3.5ZM12.5,11A1.5,1.5,0,1,1,11,9.5,1.5,1.5,0,0,1,12.5,11ZM11,3.5A1.5,1.5,0,1,0,12.5,5,1.5,1.5,0,0,0,11,3.5Z"/>
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
              { menuNavLinks.map(({name, href}) => (
                <li key={`navLink${href}`} onClick={handleClick}>
                  <NavLink
                    to={href}
                    className={({ isActive, isPending }) =>
                      `${isPending ? "pending" : isActive ? "text-primary" : ''}`
                    }
                  >{name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="navbar-center">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div> */}
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 mask mask-squircle">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header