
function Skills() {
  return (
    <div>
        <section className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mt-8 text-stone-100 font-poppins">Habilidades</h2>
            <ul className="flex flex-wrap gap-8 mt-6 justify-center items-center">
            {/* HTML */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-16 h-16" />
            </li>
            {/* CSS */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-16 h-16" />
            </li>
            {/* JavaScript */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16" />
            </li>
            {/* TypeScript */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-16 h-16" />
            </li>
            {/* React */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16" />
            </li>
            {/* Tailwind CSS */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 h-16" />
            </li>
            {/* Vite */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-16 h-16" />
            </li>
            {/* Visual Studio Code */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-16 h-16" />
            </li>
            {/* NodeJS */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-16 h-16" />
            </li>
            {/* Express */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-16 h-16 bg-white p-2 rounded" />
            </li>
            {/* MySQL */}
            <li className="transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16" />
            </li>
            </ul>
        </section>
    </div>
  )
}

export default Skills
