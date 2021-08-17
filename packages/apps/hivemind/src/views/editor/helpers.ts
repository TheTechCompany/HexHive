
// export const applySlateOperationsHelper = (doc, operations) => {
//     operations.forEach(op => {
//         // if (allowedOperations.indexOf(op.type) === -1) {
//         //     return;
//         // }
//         const {
//             path, offset, text, length, mark,
//             node, position, properties, newPath
//         } = op;
//         const index = path.get(path.size - 1);
//         const rest = path.slice(0, -1)
//         let currentNode = doc.note;
//         switch (op.type) {
//             // NOTE: Marks are definitely broken as of Slate 0.34
//             // case "add_mark":
//             //     // Untested
//             //     path.forEach(el => {
//             //         currentNode = currentNode.nodes[el];
//             //     })
//             //     currentNode.characters.forEach((char, i) => {
//             //         if (i < offset) return;
//             //         if (i >= offset + length) return;
//             //         const hasMark = char.marks.find((charMark) => {
//             //             return charMark.type === mark.type
//             //         })
//             //         if (!hasMark) {
//             //             char.marks.push(mark)
//             //         }
//             //     })
//             //     break;
//             // case "remove_mark":
//             //     // Untested
//             //     path.forEach(el => {
//             //         currentNode = currentNode.nodes[el];
//             //     })
//             //     currentNode.characters.forEach((char, i) => {
//             //         if (i < offset) return;
//             //         if (i >= offset + length) return;
//             //         const markIndex = char.marks.findIndex((charMark) => {
//             //             return charMark.type === mark.type
//             //         })
//             //         if (markIndex) {
//             //             char.marks.deleteAt(markIndex, 1);
//             //         }
//             //     })
//             //     break;
//             // case "set_mark":
//             //     // Untested
//             //     path.forEach(el => {
//             //         currentNode = currentNode.nodes[el];
//             //     })
//             //     currentNode.characters.forEach((char, i) => {
//             //         if (i < offset) return;
//             //         if (i >= offset + length) return;
//             //         const markIndex = char.marks.findIndex((charMark) => {
//             //             return charMark.type === mark.type
//             //         })
//             //         if (markIndex) {
//             //             char.marks[markIndex] = mark;
//             //         }
//             //     })
//             //     break;
//             case "insert_text":
//                 path.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 // Assumes no marks and only 1 leaf
//                 currentNode.leaves[0].text.insertAt(offset, text);
//                 break;
//             case "remove_text":
//                 path.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 // Assumes no marks and only 1 leaf
//                 currentNode.leaves[0].text.deleteAt(offset, text.length);
//                 break;
//             case "split_node":
//                 rest.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 let childOne = currentNode.nodes[index];
//                 let childTwo = JSON.parse(JSON.stringify(currentNode.nodes[index]));
//                 if (childOne.object === "text") {
//                     childOne.leaves[0].text.splice(position)
//                     childTwo.leaves[0].text.splice(0, position)
//                 } else {
//                     childOne.nodes.splice(position)
//                     childTwo.nodes.splice(0, position)
//                 }
//                 currentNode.nodes.insertAt(index + 1, childTwo);
//                 if (properties) {
//                     if (currentNode.nodes[index + 1].object !== "text") {
//                         let propertiesJSON = slateCustomToJson(properties);
//                         Object.keys(propertiesJSON).forEach(key => {
//                             if (propertiesJSON.key) {
//                                 currentNode.nodes[index + 1][key] = propertiesJSON.key;
//                             }
//                         })
//                     }
//                 }
//                 break;
//             case "merge_node":
//                 rest.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 let one = currentNode.nodes[index - 1];
//                 let two = currentNode.nodes[index];
//                 if (one.object === "text") {
//                     one.leaves[0].text.push(...two.leaves[0].text)
//                 } else {
//                     one.nodes.push(...two.nodes)
//                 }
//                 currentNode.nodes.deleteAt(index, 1);
//                 break;
//             case "insert_node":
//                 rest.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 currentNode.nodes.insertAt(index, slateCustomToJson(node));
//                 break;
//             case "remove_node":
//                 rest.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 currentNode.nodes.deleteAt(index, 1);
//                 break;
//             case "set_node":
//                 path.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 for (let attrname in properties) {
//                     currentNode[attrname] = properties[attrname];
//                 }
//                 break;
//             case "move_node":
//                 const newIndex = newPath.get(newPath.size - 1)
//                 let newParentPath = newPath.slice(0, -1)
//                 const oldParentPath = path.slice(0, -1)
//                 const oldIndex = path.get(path.size - 1)

//                 // Remove the old node from it's current parent.
//                 oldParentPath.forEach(el => {
//                     currentNode = currentNode.nodes[el];
//                 })
//                 let nodeToMove = currentNode.nodes[oldIndex];

//                 // Find the new target...
//                 if (
//                     oldParentPath.every((x, i) => x === newParentPath.get(i)) &&
//                     oldParentPath.size === newParentPath.size
//                 ) {
//                     // Do nothing
//                 } else if (
//                     oldParentPath.every((x, i) => x === newParentPath.get(i)) &&
//                     oldIndex < newParentPath.get(oldParentPath.size)
//                 ) {
//                     // Remove the old node from it's current parent.
//                     currentNode.nodes.deleteAt(oldIndex, 1);

//                     // Otherwise, if the old path removal resulted in the new path being no longer
//                     // correct, we need to decrement the new path at the old path's last index.
//                     currentNode = doc.note;
//                     newParentPath = newParentPath.set(oldParentPath.size, newParentPath.get(oldParentPath.size)-1)
//                     newParentPath.forEach(el => {
//                         currentNode = currentNode.nodes[el];
//                     })

//                     // TOFIX: This is to strip out the objectId and create a new list.
//                     // Not ideal at all but Slate can't do the linking that Automerge can
//                     // and it's alot of work to try to move references in Slate.
//                     // See Note above.
//                     nodeToMove = JSON.parse(JSON.stringify(nodeToMove));
//                     // Insert the new node to its new parent.
//                     currentNode.nodes.insertAt(newIndex, nodeToMove);
//                 } else {
//                     // Remove the old node from it's current parent.
//                     currentNode.nodes.deleteAt(oldIndex, 1);

//                     // Otherwise, we can just grab the target normally...
//                     currentNode = doc.note;
//                     newParentPath.forEach(el => {
//                         currentNode = currentNode.nodes[el];
//                     })

//                     // TOFIX: This is to strip out the objectId and create a new list.
//                     // Not ideal at all but Slate can't do the linking that Automerge can
//                     // and it's alot of work to try to move references in Slate.
//                     // See Note above.
//                     nodeToMove = JSON.parse(JSON.stringify(nodeToMove));
//                     // Insert the new node to its new parent.
//                     currentNode.nodes.insertAt(newIndex, nodeToMove);

//                 }
//                 break;
//             default:
//                 console.log("In default case")
//                 break;
//         }
//     })
// }