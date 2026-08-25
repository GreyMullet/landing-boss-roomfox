'use client'

import { useEffect, useState, createContext, useContext, useCallback } from 'react'

interface LightboxContextValue {
    open: (src: string, alt: string) => void
}

const noop=()=>{}

const LightboxContext=createContext<LightboxContextValue>({ open: noop })

export function useLightbox(){
    return useContext(LightboxContext)
}

export function LightboxProvider({ children }: { children: React.ReactNode }){
    const [image, setImage]=useState<{ src: string; alt: string } | null>(null)

    const open=useCallback((src: string, alt: string)=>setImage({ src, alt }), [])
    const close=useCallback(()=>setImage(null), [])

    useEffect(()=>{
        if(!image) return

        function handleKeyDown(e: KeyboardEvent){
            if(e.key==='Escape') close()
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow='hidden'

        return ()=>{
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow=''
        }
    }, [image, close])

    return(
        <LightboxContext.Provider value={{ open }}>
            {children}

            {image && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
                    onClick={close}
                    role="dialog"
                    aria-modal="true"
                    aria-label={image.alt}
                >
                    <button
                        onClick={close}
                        aria-label="Закрыть"
                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                    >
                        ×
                    </button>

                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
                        onClick={(e)=>e.stopPropagation()}
                    />
                </div>
            )}
        </LightboxContext.Provider>
    )
}