import ZoomableImage from './ZoomableImage'

export default function Hero(){
    return(
        <section className="relative overflow-hidden bg-white pb-20 pt-24 sm:pt-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                        Для отелей на 1C:Отель
                    </span>
        
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                        Загрузка номеров и доходы отеля —{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                            на одном экране
                        </span>
                    </h1>
        
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Boss RoomFox подключается к вашей базе 1C:Отель и показывает директору
                        реальную картину бизнеса: сколько номеров занято прямо сейчас, сколько
                        дохода за сегодня, месяц и год — без запросов бухгалтерии, без звонков
                        администратору на ресепшн и без ожидания отчёта.
                    </p>
        
                    <div className="mt-10 flex items-center justify-center gap-4">
                        
                        <a href="#cta"
                            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                        >
                            Получить доступ
                        </a>
        
                        
                        <a href="#how-it-works"
                            className="text-base font-semibold text-slate-700 hover:text-slate-900"
                        >
                            Как это работает →
                        </a>
                    </div>
        
                    <p className="mt-6 text-sm text-slate-400">
                        Подключается за один день · Работает на телефоне и компьютере · Данные
                        напрямую из вашей 1C
                    </p>
                </div>
    
                <div className="mt-16 rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-xl">
                    <ZoomableImage
                        src="/dashboard-preview.png"
                        alt="Дашборд Boss RoomFox с загрузкой номеров и доходами отеля"
                        width={1200}
                        height={720}
                        className="rounded-xl"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}