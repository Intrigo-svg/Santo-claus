const dic={"1":"Michele", "2":"AleP", "3":"Luca","4":"Ari","5":"Espo","6":"Rob","7":"Domem","8":"Giug"}
const pairs=[[5, 483834256], [4, 437025436], [7, 407190424], [1, 305338638], [3, 426301978], [8, 502945810], [2, 513669268], [6, 530684694]]
const division=19111810
const key=456123678

const salt = crypto.getRandomValues(new Uint8Array(16));

const AlePKey="b89f44ab9671cffec1927750d9fc8378"
const EspoKey="591f5e759d980148dc0907724bbf722c"
const GiulioKey="50760b8ec5b4e84ff37bfa986b760cb6"
const DomKey="d21e163680d3353812052f2435e4e563"
const MicKey="d90d382da4c2f8d846ba2b157448104e"
const RobKey="81e7cd6879d1ca357358a54da2e21728"
const AriKey="eef036331fba14e4c45782a4198bf291"
const LucaKey="43d358eac52d04f4739af5cd3eff62ad"
/*const AlePKey = await deriveKey('flap_meniscale', salt);
console.log('AlePKey:', AlePKey.toString('hex'));

const EspoKey = await deriveKey('Balu\'', salt);
console.log('EspoKey:', EspoKey.toString('hex'));

const GiulioKey = await deriveKey('loddy_lordo', salt);
console.log('GiulioKey', GiulioKey.toString('hex'));

const DomKey = await deriveKey('sacriderma', salt);
console.log('DomKey', DomKey.toString('hex'));

const MicKey = await deriveKey('Fennec_Hyperspace', salt);
console.log('MicKey', MicKey.toString('hex'));

const RobKey = await deriveKey('Christian', salt);
console.log('RobKey', RobKey.toString('hex'));

const AriKey = await deriveKey('palle?', salt);
console.log('AriKey', AriKey.toString('hex'));

const LucaKey = await deriveKey('rm_ginocchio_sx', salt);
console.log('LucaKey', LucaKey.toString('hex'));
*/

function str2ab(str) {
    return new TextEncoder().encode(str);
}

function ab2hex(buffer) {
    const bytes = new Uint8Array(buffer);
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function deriveKey(password, salt, iterations = 10000, keyLen = 16) {
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        str2ab(password),
        { name: "PBKDF2" },
        false,
        ["deriveBits", "deriveKey"]
    );

    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt: str2ab(salt),
            iterations: iterations,
            hash: "SHA-256"
        },
        keyMaterial,
        keyLen * 8
    );

    return ab2hex(derivedBits);
}

// Gestione form
document.getElementById("wordForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = document.getElementById("wordInput").value;
	const form = document.getElementById('wordForm');
if (form) {
    form.remove();
}
	if(password==AlePKey.toString('hex')){
		const num_target=Math.floor(((pairs[6][1])^key)/19111810)
		const target=dic[String(num_target)]
		//alert(target)
		const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Ciao ale questo è un messagio per il te futuro, devi farlo a: '+target; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);

	}
	if(password==EspoKey.toString('hex')){
		const num_target=Math.floor((pairs[0][1]^key)/19111810)
		const target=dic[String(num_target)]
		const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; // altezza del popup
popupContainer.style.marginTop = '40px';

// --- Crea il div decorativo ---
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Dalla chiave mi sembi proprio tu espo. Spero che ti esca nicole'+'\n'+'ecco a chi devi farlo per davvero:\n'+target; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile

// Aggiungi al container e poi al body
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);
	}
	if(password==LucaKey.toString('hex')){
		const num_target=Math.floor((pairs[4][1]^key)/19111810)
		const target=dic[String(num_target)]

const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'ciao luca quest anno il pacco lo darai a:\n'+target+'\nanche se lo vorrei io'; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);


	}
	if(password==MicKey.toString('hex')){
		const num_target=Math.floor((pairs[3][1]^key)/19111810)
		const target=dic[String(num_target)]
		const popupContainer = document.createElement('div');
		popupContainer.style.display = 'flex';
		popupContainer.style.justifyContent = 'center';
		popupContainer.style.alignItems = 'center';
		popupContainer.style.height = '200px'; 
		popupContainer.style.marginTop = '40px';
		const popup = document.createElement('div');
		popup.style.whiteSpace = 'pre-line';
		popup.textContent = 'SHHHHH michele ha bisogno di audio\n mette le placche; sta per iniziare un air-dribble con la fennec,\n arriva a prendere loddy e trova questa frase:\n il regalo lo fai a:\n'+target; // testo del popup
		popup.style.padding = '30px 50px';
		popup.style.fontSize = '24px';
		popup.style.fontWeight = 'bold';
		popup.style.textAlign = 'center';
		popup.style.border = '4px solid #00ff00'; // bordo verde
		popup.style.borderRadius = '15px';
		popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
		popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
		popup.style.color = 'white';
		popup.style.pointerEvents = 'none'; // non cliccabile
		popupContainer.appendChild(popup);
		document.body.appendChild(popupContainer);	
		


	}
	if(password==GiulioKey.toString('hex')){
		const num_target=Math.floor((pairs[5][1]^key)/19111810)
		const target=dic[String(num_target)]
const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Ciao giulio sono MagmaS,\n sono stato scelto io per comunicarti che il regalo lo farai a:\n'+target; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);
		

	}
	if(password==DomKey.toString('hex')){
		const num_target=Math.floor((pairs[2][1]^key)/19111810)
		const target=dic[String(num_target)]
		let targeeg="";
		if(target=="Michele")
		targeeg="Micheeeec";
		if(target=="AleP")
		targeeg="Alessaaaas(pic)";
		if(target=="Luca")
		targeeg="Luul";
		if(target=="Ari")
		targeeg="Ariaaaar";
		if(target=="Espo")
		targeeg="Espoooop";
		if(target=="Rob")
		targeeg="Robeeeeb";
		if(target=="Giulio")
		targeeg="Giug";
const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Simom sei il babb nataat seegreeeg did:\n'+targeeg+'\n\n(rir)'; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);
	}
	if(password==RobKey.toString('hex')){
		const num_target=Math.floor((pairs[7][1]^key)/19111810)
		const target=dic[String(num_target)]
		const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Robby so che avendo 134 mila di empatia\n probabilmente hai gia\' capito che farai il regalo a:\n'+target; 
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);
		
	}
	if(password==AriKey.toString('hex')){
		const num_target=Math.floor((pairs[1][1]^key)/19111810)
		const target=dic[String(num_target)]
		const popupContainer = document.createElement('div');
popupContainer.style.display = 'flex';
popupContainer.style.justifyContent = 'center';
popupContainer.style.alignItems = 'center';
popupContainer.style.height = '200px'; 
popupContainer.style.marginTop = '40px';
const popup = document.createElement('div');
popup.style.whiteSpace = 'pre-line';
popup.textContent = 'Ciao Arianna\n so che il regalo lo vorresti fare a un grande felide o felino\n pero\' devi farlo a: '+target; // testo del popup
popup.style.padding = '30px 50px';
popup.style.fontSize = '24px';
popup.style.fontWeight = 'bold';
popup.style.textAlign = 'center';
popup.style.border = '4px solid #00ff00'; // bordo verde
popup.style.borderRadius = '15px';
popup.style.boxShadow = '0 0 20px #ff4d4d, 0 0 40px #00ff00'; // glow rosso e verde
popup.style.backgroundColor = 'rgba(0,0,0,0.5)'; // sfondo semitrasparente
popup.style.color = 'white';
popup.style.pointerEvents = 'none'; // non cliccabile
popupContainer.appendChild(popup);
document.body.appendChild(popupContainer);
		
	}
	

});







// --- Effetto neve su canvas ---

const canvas = document.createElement("canvas");
canvas.id = "snowCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Ridimensiona il canvas a tutta la pagina
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Stile del canvas (sfondo animato)
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

// Genera i fiocchi
const flakes = [];
for (let i = 0; i < 150; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() + 1
    });
}

let angle = 0;

// Disegna i fiocchi
function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let f of flakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    }

    ctx.fill();
    updateSnow();
}

// Aggiorna posizione fiocchi
function updateSnow() {
    angle += 0.001;

    for (let f of flakes) {
        f.y += Math.pow(f.d, 2) + 0.5;
        f.x += Math.sin(angle) * 0.2;

        if (f.y > canvas.height) {
            f.y = -10;
            f.x = Math.random() * canvas.width;
        }
    }
}

// Avvia animazione
function animate() {
    drawSnow();
    requestAnimationFrame(animate);
}
animate();
