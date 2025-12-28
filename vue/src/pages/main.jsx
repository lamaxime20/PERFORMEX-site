import NavBar from "../components/navBar";

function Main({activePage}) {
    return (
        <div className="main-root">
            <NavBar activePage={activePage} />
            <div className="main-content">
                {activePage}
            </div>
        </div>
    )
}

export default Main;