export default function CTA(){
    return(
        <section
            id="cta"
            className="bg-gradient-to-r from-indigo-600 to-sky-500 py-20"
        >
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Подключите Boss RoomFox к своему отелю
                </h2>
        
                <p className="mt-4 text-lg text-indigo-50">
                    Напишите нам — настроим доступ и покажем, как это работает на ваших данных.
                </p>
    
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://t.me/anapa1c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
                        >
                        Написать в Telegram
                    </a>
        
                    <a
                        href="mailto:4313521@mail.ru"
                        className="rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                        >
                        4313521@mail.ru
                    </a>
        
                    <a
                        href="tel:+79184313521"
                        className="rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                        >
                        +7 (918) 431-35-21
                    </a>
                </div>
            </div>
        </section>
    )
}