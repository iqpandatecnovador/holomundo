export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 relative overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute w-96 h-96 bg-neon-purple/30 blur-3xl rounded-full top-10 left-10 animate-float" />
      <div className="absolute w-96 h-96 bg-neon-blue/30 blur-3xl rounded-full bottom-10 right-10 animate-float" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center max-w-4xl relative z-10">

        <h1 className="text-5xl md:text-6xl font-display font-bold bg-neon-gradient bg-clip-text text-transparent">
          Infraestructura Digital para Negocios Reales
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-2xl">
          HOLOMUNDO integra automatización, presencia web y sistemas inteligentes
          para transformar negocios tradicionales en ecosistemas digitales escalables.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <a
            href="https://wa.me/523221731856?text=Hola,%20quiero%20activar%20la%20transformación%20digital%20de%20mi%20negocio%20con%20HOLOMUNDO.%20Me%20gustaría%20recibir%20información."
            target="_blank"
            className="px-8 py-4 rounded-xl bg-neon-blue text-black font-semibold shadow-neon-blue hover:scale-105 transition-all duration-300 inline-block"
          >
            Activar por WhatsApp
          </a>

          <button className="px-8 py-4 rounded-xl border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300">
            Ver Cómo Funciona
          </button>
        </div>

      </section>

      {/* PROBLEMA */}
      <section className="py-24 max-w-5xl">
        <div className="glass p-10">
          <h2 className="text-3xl font-display mb-6 text-neon">
            El Problema
          </h2>
          <p className="text-white/70">
            La mayoría de los negocios físicos operan con procesos manuales,
            poca visibilidad digital y cero automatización.
            Esto limita crecimiento, control y escalabilidad.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="py-24 max-w-5xl">
        <div className="glass p-10">
          <h2 className="text-3xl font-display mb-6 text-neon">
            El Sistema HOLOMUNDO
          </h2>
          <p className="text-white/70">
            Implementamos sistemas de punto de venta inteligentes,
            automatización operativa, presencia web profesional y
            herramientas de IA para convertir negocios tradicionales
            en estructuras digitales rentables.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 max-w-5xl">
        <h2 className="text-3xl font-display mb-12 bg-neon-gradient bg-clip-text text-transparent">
          Servicios Activos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Sistemas POS</h3>
            <p className="text-white/60 text-sm">
              Control total de inventario, ventas y reportes.
            </p>
          </div>

          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Presencia Web Premium</h3>
            <p className="text-white/60 text-sm">
              Sitios modernos con identidad tecnológica.
            </p>
          </div>

          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Automatización con IA</h3>
            <p className="text-white/60 text-sm">
              Procesos inteligentes que reducen fricción operativa.
            </p>
          </div>
        </div>
      </section>

      {/* VISIÓN SAAS */}
      <section className="py-24 max-w-5xl">
        <div className="glass p-10">
          <h2 className="text-3xl font-display mb-6 text-neon">
            Plataforma Escalable
          </h2>
          <p className="text-white/70">
            HOLOMUNDO evoluciona hacia una plataforma SaaS modular,
            donde los negocios podrán activar herramientas digitales
            desde un solo panel centralizado.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32">
        <button className="px-10 py-5 rounded-2xl bg-neon-pink text-black font-bold shadow-neon-pink hover:scale-105 transition-all duration-300">
          Iniciar Ahora
        </button>
      </section>

      <section className="py-24 max-w-xl w-full">
        <div className="glass p-8">
          <h2 className="text-2xl font-display mb-6 text-neon">
            Solicitar Información
          </h2>

          <form
            action="mailto:iqpandatecnovador@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              required
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white"
            />

            <input
              type="email"
              name="Email"
              placeholder="Correo Electrónico"
              required
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white"
            />

            <textarea
              name="Mensaje"
              placeholder="Cuéntanos sobre tu negocio..."
              rows={4}
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white"
            />

            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-xl bg-neon-pink text-black font-bold shadow-neon-pink hover:scale-105 transition-all duration-300"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
