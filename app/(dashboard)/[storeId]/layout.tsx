import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import prismadb from '@/lib/prismadb'
import Navbar from '@/components/navbar'

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
            <Navbar />
            {children}
        </>
    )
}

export default DashboardLayout