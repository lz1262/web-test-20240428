import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
       <body className="h-full">
      {/* 导航栏 */}
       <nav className="flex justify-between items-center bg-gray-200 p-4">
          <div>
            <a href="/">首页</a>
            <a href="/feature1" className="ml-4">功能1</a>
            <a href="/feature2" className="ml-4">功能2</a>
            <a href="/feature3" className="ml-4">功能3</a>
          </div>
        </nav>
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
