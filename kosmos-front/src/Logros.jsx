export const Logros = () => {
    return (
        <div className=" m-4 flex flex-col items-center gap-4">
            <h1 className="w-full text-4xl text-center">Logros</h1>
            <p>Estos son los logros que has obtenido</p>

            <div className="w-full m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card title="Luna" description="Conseguido" img="/img/luna.jpeg" />
                <Card title="Marte" description="Conseguido" img="/img/marte.jpeg"  />
                <Card title="Jupiter" description="Conseguido" img="/img/jupiter.jpeg" />
                <Card title="Saturno" description="Conseguido" img="/img/saturno.jpeg" />
                <Card title="Desconocido" description="???" img="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card title="Desconocido" description="???" img="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    );
}


const Card = ({ title, description, img }) => {
    return (
        <div>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-2">
                <img src={img} 
                    alt={title} 
                    className="w-24 h-24 rounded-full"
                />
                <h2 className="text-xl">{title}</h2>
                <p>{description}</p>


                </div>
        </div>
    )
}
