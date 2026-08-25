const testimonials=[
    {
        quote:
            'Раньше я узнавал загрузку номеров по телефону от администратора утром и вечером. Теперь просто открываю телефон — и вижу всё сразу, в любой момент.',
        author: 'Директор ЗАО Санаторий «Надежда»',
        location: '',
    },
    {
        quote:
            'Особенно полезен прогноз на неделю вперёд — раньше это считали в Excel раз в понедельник, теперь смотрю каждое утро за минуту.',
        author: 'Управляющий отелем',
        location: 'Краснодарский край',
    },
]
  
export default function Testimonials(){
    return(
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Что говорят директора отелей
                </h2>
        
                <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {testimonials.map((t)=>(
                        <blockquote
                            key={t.author}
                            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
                        >
                            <p className="text-lg leading-8 text-slate-700">«{t.quote}»</p>
                            <footer className="mt-6">
                                <p className="font-semibold text-slate-900">{t.author}</p>
                                {t.location && <p className="text-sm text-slate-500">{t.location}</p>}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}