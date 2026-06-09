const items = [
    "BMW","Audi","Volkswagen","Skoda","Toyota","Mercedes-Benz","Honda",
    "Ford", "Opel", "Škoda", "Volvo", "Porsche", "Mazda", "Hyundai",
    "Renault", "Peugeot", "Citroën", "Nissan", "Subaru"
];

export default function Marquee(){
    const loop = [...items, ...items];
    return(
        <div className="marquee">

            <div className="marquee-track">
                {loop.map((m,i)=> (
                    <span key={i} className="marquee-item">{m}</span>
                ))}
            </div>
        </div>
    )
}