function Navbar() {
	return (
		<div className="h-16 max-w-6xl mx-auto flex items-center justify-between">
			<h1 className="text-sky-600 text-3xl font-bold">ConnectSphere</h1>
			<ul className="flex gap-8">
				<li className="text-gray-900 font-semibold hover:text-gray-400">Home</li>
				<li className="text-gray-900 font-semibold hover:text-gray-400">My Network</li>
				<li className="text-gray-900 font-semibold hover:text-gray-400">Jobs</li>
				<li className="text-gray-900 font-semibold hover:text-gray-400">Profile</li>
				<li className="text-gray-900 font-semibold hover:text-gray-400">Logout</li>
			</ul>
			<img className="w-8 h-8" src="https://imgs.search.brave.com/C6AU3hqShumrOuZaswKHOeZBwOo-XeuuJnf7XZ-5QW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/Njc0NDAzNC92ZWN0/b3IvcHJvZmlsZS1w/bGFjZWhvbGRlci1p/bWFnZS1ncmF5LXNp/bGhvdWV0dGUtbm8t/cGhvdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJxdGky/NlZRal9mcy1faEwx/NW1KajZiODRGRVpO/YTAwRkpnWlJhRzVQ/RDQ9" alt="profile_img" />
		</div>
	);
}

export default Navbar;