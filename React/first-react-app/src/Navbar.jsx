function Navbar() {
    const users = [
        { name: "Prashant Sarvaiya" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" },
        { name: "Raju Rastogi" }
    ];

    return (
        <>
            {users.map((user, index) => (
                <h1 key={index}>{user.name}</h1>
            ))}
        </>
    );
}

export default Navbar;
