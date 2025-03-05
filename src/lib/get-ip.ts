import { headers } from 'next/headers'

export async function getIp() {
  const headerData = await headers()
  const forwardedFor = headerData.get('x-forwarded-for')
  const realIp = headerData.get('x-real-ip')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  if (realIp) {
    return realIp.trim()
  }

  return null
}
