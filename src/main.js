import App from './App.svelte';
import Auth from './auth.svelte';


const app = new Auth({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;