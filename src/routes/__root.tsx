import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import ConvexProvider from '../integrations/convex/provider'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ConvexProvider>
        <div className="w-screen h-dvh overflow-y-auto">
          <Outlet />
        </div>
        {/* <TanStackRouterDevtools /> */}

        {/* <TanstackQueryLayout /> */}
      </ConvexProvider>
    </>
  ),
})
