export default function Footer(){
    return(
        <footer className="border-t border-slate-100 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
                <p>© {new Date().getFullYear()} RoomFox. Все права защищены.</p>
                <p>Boss RoomFox — продукт RoomFox</p>
            </div>
        </footer>
    )
}