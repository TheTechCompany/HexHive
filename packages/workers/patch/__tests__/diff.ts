import Patch from '../src';

const patch = new Patch({key: 'id'})

let initial = [{id: 1, name: "Ross"}, {id: 2, name: "Georgie"}]

const p1 = patch.snapshot(initial)

const p2 = patch.snapshot([{id: 1, name: "Ross"}, {id: 2, name: "Phoenix"}])

if(!p2) throw new Error("No Patch");
const p3 = patch.fastforward(initial, p2)

console.log(p1, p2, p3)
