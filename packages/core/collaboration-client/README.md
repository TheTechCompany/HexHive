# Collaboration Client

> TODO: description

## Usage

App.tsx
```
import { AutomergeClientProvider } from '@hexhive/collaboration-client';

const client = new AutomergeClient({
	url: string,
	readyCallback: Function
})

return (
	<AutomergeClientProvider>
		<App />
	</AutomergeClientProvider>
)

```


Editor.tsx
```
import { useAutomergeDoc } from '@hexhive/collaboration-client';

const [doc, docRef, updateDoc, updateRef] = useAutomergeDoc<T>('collection', 'docId')

updateDoc((doc<T>) => {
	doc.item = "stuff";
	return doc;
}, "Commit message")

{doc.item} //Reactive store
```


