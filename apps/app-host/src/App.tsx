import { For, render } from "solid-js/web"
import { Link, Route, Routes, Router } from "solid-app-router"
import "./index.scss"
import { lazy } from 'solid-js'

const Landing = lazy(() => import("./views/Landing"))
const Store = lazy(() => import("./views/Store"))
const Blog = lazy(() => import("./views/Blog"))
const App = () => {

    const links = [
        {
            name: 'Landing (Svelt)',
            path: '/',
        },
        {
            name: 'Store (Vue)',
            path: '/store',
        },
        {
            name: 'Blog (React)',
            path: '/blog',
        },
    ]
    return (
        <Router>
            <div class="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: host</div>
                <div>Framework: solid-js</div>
                <div>Language: TypeScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <div class="flex space-x-3">
                <For each={ links }>{ (link) =>
                    (<Link href={ link.path }>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {link.name}
                        </button>
                    </Link>)
                }
                </For>
            </div>
            <Routes>
                <Route path="/store" element={ <Store/> }/>
                <Route path="/blog" element={ <Blog/> }/>
                <Route path="/" element={ <Landing/> }/>
            </Routes>
        </Router>
    )
}
    render(App, document.getElementById("app"))
