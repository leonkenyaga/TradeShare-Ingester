/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SigninIndexImport } from './routes/Signin/index'
import { Route as SignUpIndexImport } from './routes/SignUp/index'
import { Route as MyAccountsIndexImport } from './routes/MyAccounts/index'
import { Route as LinkAccountIndexImport } from './routes/LinkAccount/index'
import { Route as FollowingIndexImport } from './routes/Following/index'
import { Route as LinkAccountMetalayoutImport } from './routes/LinkAccount/_metalayout'
import { Route as InboxIndexImport } from './routes/Inbox/Index'
import { Route as LinkAccountMetalayoutMetatraderIndexImport } from './routes/LinkAccount/_metalayout/Metatrader/index'

// Create Virtual Routes

const LinkAccountImport = createFileRoute('/LinkAccount')()

// Create/Update Routes

const LinkAccountRoute = LinkAccountImport.update({
  path: '/LinkAccount',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SigninIndexRoute = SigninIndexImport.update({
  path: '/Signin/',
  getParentRoute: () => rootRoute,
} as any)

const SignUpIndexRoute = SignUpIndexImport.update({
  path: '/SignUp/',
  getParentRoute: () => rootRoute,
} as any)

const MyAccountsIndexRoute = MyAccountsIndexImport.update({
  path: '/MyAccounts/',
  getParentRoute: () => rootRoute,
} as any)

const LinkAccountIndexRoute = LinkAccountIndexImport.update({
  path: '/',
  getParentRoute: () => LinkAccountRoute,
} as any)

const FollowingIndexRoute = FollowingIndexImport.update({
  path: '/Following/',
  getParentRoute: () => rootRoute,
} as any)

const LinkAccountMetalayoutRoute = LinkAccountMetalayoutImport.update({
  id: '/_metalayout',
  getParentRoute: () => LinkAccountRoute,
} as any)

const InboxIndexRoute = InboxIndexImport.update({
  path: '/Inbox/Index',
  getParentRoute: () => rootRoute,
} as any)

const LinkAccountMetalayoutMetatraderIndexRoute =
  LinkAccountMetalayoutMetatraderIndexImport.update({
    path: '/Metatrader/',
    getParentRoute: () => LinkAccountMetalayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/Inbox/Index': {
      id: '/Inbox/Index'
      path: '/Inbox/Index'
      fullPath: '/Inbox/Index'
      preLoaderRoute: typeof InboxIndexImport
      parentRoute: typeof rootRoute
    }
    '/LinkAccount': {
      id: '/LinkAccount'
      path: '/LinkAccount'
      fullPath: '/LinkAccount'
      preLoaderRoute: typeof LinkAccountImport
      parentRoute: typeof rootRoute
    }
    '/LinkAccount/_metalayout': {
      id: '/LinkAccount/_metalayout'
      path: '/LinkAccount'
      fullPath: '/LinkAccount'
      preLoaderRoute: typeof LinkAccountMetalayoutImport
      parentRoute: typeof LinkAccountRoute
    }
    '/Following/': {
      id: '/Following/'
      path: '/Following'
      fullPath: '/Following'
      preLoaderRoute: typeof FollowingIndexImport
      parentRoute: typeof rootRoute
    }
    '/LinkAccount/': {
      id: '/LinkAccount/'
      path: '/'
      fullPath: '/LinkAccount/'
      preLoaderRoute: typeof LinkAccountIndexImport
      parentRoute: typeof LinkAccountImport
    }
    '/MyAccounts/': {
      id: '/MyAccounts/'
      path: '/MyAccounts'
      fullPath: '/MyAccounts'
      preLoaderRoute: typeof MyAccountsIndexImport
      parentRoute: typeof rootRoute
    }
    '/SignUp/': {
      id: '/SignUp/'
      path: '/SignUp'
      fullPath: '/SignUp'
      preLoaderRoute: typeof SignUpIndexImport
      parentRoute: typeof rootRoute
    }
    '/Signin/': {
      id: '/Signin/'
      path: '/Signin'
      fullPath: '/Signin'
      preLoaderRoute: typeof SigninIndexImport
      parentRoute: typeof rootRoute
    }
    '/LinkAccount/_metalayout/Metatrader/': {
      id: '/LinkAccount/_metalayout/Metatrader/'
      path: '/Metatrader'
      fullPath: '/LinkAccount/Metatrader'
      preLoaderRoute: typeof LinkAccountMetalayoutMetatraderIndexImport
      parentRoute: typeof LinkAccountMetalayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  InboxIndexRoute,
  LinkAccountRoute: LinkAccountRoute.addChildren({
    LinkAccountMetalayoutRoute: LinkAccountMetalayoutRoute.addChildren({
      LinkAccountMetalayoutMetatraderIndexRoute,
    }),
    LinkAccountIndexRoute,
  }),
  FollowingIndexRoute,
  MyAccountsIndexRoute,
  SignUpIndexRoute,
  SigninIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/Inbox/Index",
        "/LinkAccount",
        "/Following/",
        "/MyAccounts/",
        "/SignUp/",
        "/Signin/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/Inbox/Index": {
      "filePath": "Inbox/Index.tsx"
    },
    "/LinkAccount": {
      "filePath": "LinkAccount",
      "children": [
        "/LinkAccount/_metalayout",
        "/LinkAccount/"
      ]
    },
    "/LinkAccount/_metalayout": {
      "filePath": "LinkAccount/_metalayout.tsx",
      "parent": "/LinkAccount",
      "children": [
        "/LinkAccount/_metalayout/Metatrader/"
      ]
    },
    "/Following/": {
      "filePath": "Following/index.tsx"
    },
    "/LinkAccount/": {
      "filePath": "LinkAccount/index.tsx",
      "parent": "/LinkAccount"
    },
    "/MyAccounts/": {
      "filePath": "MyAccounts/index.tsx"
    },
    "/SignUp/": {
      "filePath": "SignUp/index.tsx"
    },
    "/Signin/": {
      "filePath": "Signin/index.tsx"
    },
    "/LinkAccount/_metalayout/Metatrader/": {
      "filePath": "LinkAccount/_metalayout/Metatrader/index.tsx",
      "parent": "/LinkAccount/_metalayout"
    }
  }
}
ROUTE_MANIFEST_END */
