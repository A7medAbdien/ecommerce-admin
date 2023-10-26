import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import prismadb from '@/lib/prismadb'

type Props = {
    children: React.ReactNode,
    params: { storeId: string }
}

const DashboardLayout = async ({ children, params }: Props) => {
    const { userId } = auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if (!store) {
        redirect('/')
    }

    return (
        <>
            <div>
                this will be a navbar
            </div>
            {children}
        </>
    )
}

export default DashboardLayout