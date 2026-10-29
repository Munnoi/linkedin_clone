import { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	async function formSubmitHandler(e) {
		e.preventDefault();
		try {
			const existingUser = await fetch(`http://127.0.0.1:8000/api/accounts/${email}`); // checks if the user is already registered.
			
			if (existingUser) {
				alert("User already exists!");
				return;
			}
			
			const res = await fetch("http://127.0.0.1:8000/api/accounts/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			
			const data = await res.json();
			
			if (!res.ok) {
				throw new Error("Login failed!");
			}
			
			console.log("Success!");
			alert("Success!");
		} catch (err) {
			console.error(err.message);
		}
	}
	
	return (
		<>
			<h1>Login</h1>
			<form method="POST" onSubmit={formSubmitHandler}>
				<input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
				<br />
				<input type="email" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
				<br />
				<button type="submit">Login</button>
			</form>
		</>
	);
}

export default Login;