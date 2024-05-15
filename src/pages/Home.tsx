
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillDropboxCircle, AiFillAlipayCircle } from 'react-icons/ai'

export function HomeScreen() {
    return (
        <div>
            <head>
                <title>asdad</title>
            </head>
            <main className='overflow-y-scroll no-scrollbar'>
                <section className='min-h-screen'>
                    <NavigationHeader />
                    <SummaryDescription />
                    <NavigationLogos />
                </section>

                <section className='min-h-screen'>
                    <NavigationHeader />
                    <SummaryDescription />
                    <NavigationLogos />
                </section>

                <section className='min-h-screen'>
                    <NavigationHeader />
                    <SummaryDescription />
                    <NavigationLogos />
                </section>
            </main>
        </div>
    )
}

function NavigationHeader() {
    return (
        <nav className="p-2 flex justify-between mb-12">
            <h1 className="text-1xl"> developed by swornim</h1>
            <div className="flex space-x-4 items-center">
                <h1 className=""> register</h1>
                <BsFillMoonStarsFill />
                <button className="rounded bg-cyan-200 p-1 pt-0.5 pb-0.5">Login</button>
            </div>
        </nav>
    )
}

function SummaryDescription() {
    return (
        <div className="text-center p-16 gap-16">
            <h2 className="text-2xl text-teal-600 font-medium"> Freelancer provider </h2>
            <h2 className="text-md pb-4"> Developer and Designer </h2>
            <p>
                Freelancer providing service oriented architecture for the people they wanna trust and go further
            </p>
        </div>
    )
}

function NavigationLogos() {
    return (
        <div className="text-4xl flex justify-center gap-12">
            <AiFillTwitterCircle />
            <AiFillDropboxCircle />
            <AiFillAlipayCircle />
        </div>
    )
}