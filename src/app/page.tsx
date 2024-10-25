'use client'
import { redirect, useSearchParams,  } from 'next/navigation'

export default function Profile() {
    const searchParams = useSearchParams()
    const userId = searchParams.get('user_id')
    typeof userId === "string" && typeof window !== "undefined" && localStorage.setItem("user_id", userId?.toString() as string)
    redirect('/splash')
}