import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as backend_idl, canisterId as backend_id } from "../../.dfx/local/canisters/backend";

const agent = new HttpAgent();
const backend = Actor.createActor(backend_idl, {
  agent,
  canisterId: backend_id,
});

const emojis = {
  gunting: '✌️',
  batu: '✊',
  kertas: '🖐️'
};

window.play = async (playerChoice) => {
  const choices = ['gunting', 'batu', 'kertas'];
  const botChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById('result').textContent = '';
  const hand = document.getElementById('hand-animation');
  hand.classList.remove('hidden');

  setTimeout(async () => {
    hand.classList.add('hidden');
    const versus = `${emojis[playerChoice]} vs ${emojis[botChoice]}`;
    const result = await backend.play(playerChoice, botChoice);
    document.getElementById('result').innerHTML = `
      <div style="font-size: 36px;">${versus}</div>
      <div style="margin-top: 10px;">${result}</div>
    `;
  }, 1000);
};
