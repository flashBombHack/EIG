/** Client portal URL — set VITE_CLIENT_PORTAL_URL in .env to override */
export const CLIENT_PORTAL_URL =
  import.meta.env.VITE_CLIENT_PORTAL_URL ?? 'https://portal.exodusgroup.ca'

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/exodusinvestigatorsgroup?utm_source=qr',
  x: 'https://x.com/exodusinc_1?s=11',
  facebook: 'https://www.facebook.com/share/18N4qhmioq/?mibextid=wwXIfr',
} as const
