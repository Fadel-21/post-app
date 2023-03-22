import '@/styles/globals.css'
import '@/styles/datatables.bundle.css'
import { useRouter } from 'next/router'
// import '@/functions/chat.js'
// import '@/functions/create-app.js'
// import '@/functions/general.js'
// import '@/functions/i18n.js'
// import '@/functions/plugins.bundle.js'
// import '@/functions/pos.js'
// import '@/functions/scripts.bundle.js'
// import '@/functions/upgrade-plan.js'
// import '@/functions/users-search.js'
// import '@/functions/widgets.bundle.js'
// import '@/functions/widgets.js'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <Component key={router.asPath} {...pageProps} />
}
