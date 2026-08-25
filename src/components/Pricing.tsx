export default function Pricing(){
    return(
        <section id="pricing" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Стоимость под ваш отель
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Лицензия оформляется индивидуально в зависимости от номерного фонда и срока подключения. Свяжитесь с нами — подготовим предложение в течение дня.
                </p>
        
                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                    Что входит
                    </p>
                    <ul className="mt-4 space-y-2 text-left text-sm text-slate-700 sm:mx-auto sm:max-w-sm">
                    <li>✓ Подключение к вашей базе 1C:Отель</li>
                    <li>✓ Личный пароль для директора</li>
                    <li>✓ Установка как приложение на телефон</li>
                    <li>✓ Поддержка по телефону, почте и в Telegram</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}