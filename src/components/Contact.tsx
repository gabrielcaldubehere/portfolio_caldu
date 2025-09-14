
function Contact() {
  return (
<section className="w-full max-w-lg mx-auto p-6">
  <h2 className="text-3xl text-stone-100 font-poppins mb-6 text-center">
    Contacto
  </h2>
  <form className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Tu nombre"
      className="w-full p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
    <input
      type="email"
      placeholder="Tu email"
      className="w-full p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
    <textarea
      placeholder="Escribime tu mensaje..."
      className="w-full p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[120px]"
    ></textarea>
    <button
      type="submit"
      className="bg-teal-600 text-slate-100 py-2 px-6 rounded-full font-medium shadow-md hover:bg-teal-500 hover:scale-105 transition w-full"
    >
      Enviar
    </button>
  </form>
</section>

  )
}

export default Contact


