import { MenuNavLinks } from "./Header"
import { NavLink } from "react-router-dom"

type FooterProps = {
  menuNavLinks: MenuNavLinks[]
}

const Footer = ({ menuNavLinks }: FooterProps) => {

  const gridCols = menuNavLinks.length + 1;
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-base-100/95 pt-4 pb-8">
        <div className={`grid grid-cols-6 grid-cols-${gridCols} place-items-center w-full h-full max-w-lg mx-auto font-medium`}>
          { menuNavLinks.map(({name, href, Icon}: MenuNavLinks) => (
            <NavLink
              to={href}
              key={`navLinkFooter${href}`}
              className={({ isActive }) =>
                `btn ${isActive ? "grid grid-cols-[auto_1fr] place-items-center col-span-2" : 'btn-ghost btn-square [&>span]:hidden'}`
              }
            >
              <Icon className="size-5" />
              <span className="text-xs">{name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer