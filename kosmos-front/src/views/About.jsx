export const About = () => {
    return (
        <div className="w-full flex flex-col gap-8 items-center justify-center">
            <h2 className="w-full text-center text-7xl font-marck text-gray-700">kósmos</h2>

            <div className="text-xl text-gray-700">
                <p>Del término griego κόσμος (kósmos), que significa orden, (la) totalidad, el universo.</p>
            </div>

            <div className="text-xl flex flex-col items-center justify-center">
                <h3 className="text-gray-700 text-3xl">JEL </h3>

                <p className=" text-gray-700 text-xl">Desde sus inicios las siglas de los primeros integrantes del equipo.</p>

                <div className="flex gap-4 flex-wrap">
                    <Card img="/img/joni.jpeg" title="JONATHAN ARTURO 
TELLEZ ROSAS" description="INGENIERIA EN CIENCIAS 
DE LA COMPUTACION" />
                    <Card img="/img/lalo.jpeg" title="EDUARDO RODRIGUEZ 
SANCHEZ" description="INGENIERIA EN CIENCIAS 
DE LA COMPUTACION" />
                    <Card img="/img/max.jpeg" title="MAX RAMOS MARTINEZ" description="INGENIERIA EN CIENCIAS 
DE LA COMPUTACION" />
                    <Card img="/img/ahmed.jpeg" title="AHMED CORTES TAPIA" description="INGENIERIA EN 
TECNOLOGIAS DE LA 
INFORMACION " />
                </div>
            </div>
        </div>
    )
}

const Card = ({ title, description,img }) => {
    return (
        <div className="w-[250px] flex flex-col gap-8 mt-8 bg-gray-200 p-4 rounded-lg">
            <img src={img} alt="placeholder" className="w-full rounded-full" />
            <h4 className="text-xl ">{title}</h4>
            <p className="text-sm">{description}</p>
        </div>
    )
}