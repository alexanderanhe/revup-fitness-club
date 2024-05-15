import Stats from "../components/home/Stats"
import Layout from "../components/templates/Layout"
import ThemeToggle from "../components/utils/ThemeToggle"

const Home = () => {
  return (
  <Layout title="">
    <section className="full-width min-h-0 py-0">
      <h1 className="flex flex-col text-3xl font-semibold text-zinc-200 [&>strong]:font-bold [&>strong]:text-zinc-900">
        Hola, <strong>Brayan</strong>
      </h1>
    </section>
    <Stats />

    <section className="full-width justify-items-center bg-[url('/0Wra5YYVQJE-unsplash.webp')] bg-center">
      <div className="card max-w-96 glass text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Try celebrity training program</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Skip</button>
            <button className="btn btn-ghost">Let's try</button>
          </div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-autofit">
      <div className="card shadow-xl image-full">
        <figure><img src="/coiWR0gT8Cw-unsplash.webp" alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Yoga!</h2>
          <p>El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card shadow-xl image-full">
        <figure><img src="/fS3tGOkp0xY-unsplash.webp" alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Peso</h2>
          <p>El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general.</p>
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