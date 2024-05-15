import Stats from "../components/home/Stats"
import Layout from "../components/templates/Layout"
import ThemeToggle from "../components/utils/ThemeToggle"

const Home = () => {
  return (
  <Layout title="">
    <h1 className="flex flex-col text-3xl font-semibold text-zinc-200 [&>strong]:font-bold [&>strong]:text-zinc-900">
      Hola, <strong>Brayan</strong>
    </h1>
    <Stats />

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

    <ThemeToggle />
  </Layout>
  )
}

export default Home