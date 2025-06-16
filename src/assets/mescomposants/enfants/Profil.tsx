
export default function Profil () {
    // Nous avons la partie profil de utilisateur avec ses informations personnels
    return (
        <div className="flex flex-col items-center bg-white p-2 rounded shadow-sm w-28">
            <img
                src="src/assets/images/iconsiid.png"
                alt="Avatar"
                className="w-16 h-24 rounded-full mb-2"
            />
            <h2 className="text-xs font-medium leading-tight text-center">
                ZIDA&amp;Romuald
            </h2>
        </div>
    );
}