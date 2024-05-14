import React from 'react'

const Home = () => {
  return (
  <>
    <section className="prose [&>h1]:flex [&>h1]:flex-col [&>h1]:text-zinc-200 [&>h1>span]:text-zinc-900">
      <h1>Hola, <span>Brayan</span></h1>
    </section>
    <section>
      Weekly stats
      <div className="grid grid-cols-2 gap-2">
        <div className="stat shadow-md bg-primary text-primary-content rounded-3xl place-items-center row-span-2">
          <div className="flex md:stat-figure bg-white size-9 text-xl rounded-full place-items-center">🔥</div>
          <div className="stat-value">2,154</div>
          <div className="stat-title text-primary-content">kcal burnt</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
        
        <div className="stat shadow-md bg-secondary text-secondary-content rounded-3xl place-items-center">
          <div className="stat-value">16h</div>
          <div className="stat-title text-primary-content">total time</div>
          {/* <div className="stat-desc">↗︎ 40 (2%)</div> */}
        </div>
        
        <div className="stat shadow-md bg-neutral text-neutral-content rounded-3xl place-items-center">
          <div className="stat-value">107</div>
          <div className="stat-title text-primary-content">excercises</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>

        <div className="stat shadow-md bg-base text-base-content-100 rounded-3xl place-items-center col-span-2">
          <div className="stat-title">most active</div>
          <div className="stat-value text-primary-content">Thursday</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        
      </div>
    </section>

    <section>
      <div className="card max-w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Try celebrity training program</h2>
          {/* <p>We are using cookies for no reason.</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Skip</button>
            <button className="btn btn-ghost">Let's try</button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="card max-w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>

    <div className="dropdown">
      <button tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </button>
      <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Pastel" value="pastel"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cmyk" value="cmyk"/></li>
      </ul>
    </div>
  </>
  )
}

export default Home