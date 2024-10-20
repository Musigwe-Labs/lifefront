'use client'
import { redirect, useSearchParams } from 'next/navigation'

export default function Profile() {
    const searchParams = useSearchParams()
    const userId = searchParams.get('user_id')
    redirect('/splash?user_id=' + userId)
}