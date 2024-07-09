import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { InviteGuetsModal } from './invite-guests-modal'
import { ConfirmModal } from './confirm-modal'
import { DestinationDateStep } from './steps/destination-date-step'
import { InviteGuetsStep } from './steps/invite-guests-step'


export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

    const [emailsToInvite, setEmailsToInvite] = useState(
        [
            'caioramineli@gmail.com'
        ]
    )

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function openConfirmModal() {
        setIsConfirmModalOpen(true)
    }

    function closeConfirmModal() {
        setIsConfirmModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
            //colocar span
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        navigate('/trips/123')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="logo" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>

                    <DestinationDateStep
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputOpen={isGuestsInputOpen}
                        openGuestsInput={openGuestsInput}
                    />

                    {isGuestsInputOpen && (
                        <InviteGuetsStep
                            emailsToInvite={emailsToInvite}
                            openConfirmModal={openConfirmModal}
                            openGuestsModal={openGuestsModal}
                        />
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela planner.er você atumaticamente concorda <br />
                    com nossos <a className='text-zinc-300 underline' href="#">termos de uso</a> e <a className='text-zinc-300 underline' href="">políticas de privacidade</a>
                </p>
            </div>

            {isGuestsModalOpen && (
                <InviteGuetsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}

            {isConfirmModalOpen && (
                <ConfirmModal
                    closeConfirmModal={closeConfirmModal}
                    createTrip={createTrip}
                />
            )}
        </div>
    )
}

