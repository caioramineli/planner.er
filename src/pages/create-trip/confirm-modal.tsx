import { X, User, Mail } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmModalProps {
    closeConfirmModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}


export function ConfirmModal({
    closeConfirmModal,
    createTrip,
}: ConfirmModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 mx-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                    <button type='button' onClick={closeConfirmModal}>
                        <X className='size-6 text-zinc-400' />
                    </button>
                </div>

                <p className='text-sm text-zinc-400 mt-2'>
                    Para concluir a criaçãoda viagem para
                    <span className='font-semibold text-zinc-100'> Florianópolis, Brasil </span>nas datas de
                    <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024 </span>
                    preencha seus dados abaixo:
                </p>

                <form onSubmit={createTrip} className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            type="text"
                            name='email'
                            placeholder='Seu nome completo'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                        />
                    </div>

                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Mail className='text-zinc-400 size-5' />
                        <input
                            type="text"
                            name='email'
                            placeholder='Seu email pessoal'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                        />
                    </div>

                    <button type='submit' className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400'>
                        Confirmar criação da viagem
                    </button>
                </form>
            </div>
        </div>
    )
}