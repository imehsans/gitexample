import './App.css'

function App() {
	return (
		<>
			<div className="App">
				<h2>Init Git</h2>
				<p>git init</p>
				<h2>Adding work copy to staging area</h2>
				<p>git add</p>
				<p>git add .</p>
				<h2>Commit message</h2>
				<p>git commit "commit-message"</p>
				<h2>Creating branch</h2>
				<p>git branch branch-Name</p>
				<h2>Go to branch</h2>
				<p>git checkout branch-Name</p>
				<p>
					<sub>make changes in working copy now branch is ready</sub>
				</p>
				<h2>adding the current changes</h2>
				<p>git add .</p>
				<p>
					<sub>adding the current changes</sub>
				</p>
				<p>git commit "name current changes"</p>
			</div>
			<div className="App">
				<h2>git Configuration</h2>
				<p>git config /--local/--global/ user.name username </p>
				<p>git config /--local/--global/ user.email user@email.com </p>
				<h2>Checking status</h2>
				<p>git status</p>
				<h2>Checking branch</h2>
				<p>git branch</p>
				<h2>Checking logs</h2>
				<p>git log"</p>
				<h2>Checking what changes is made in files</h2>
				<p>git diff</p>
				<p>
					<sub>press q for existing the appearing screen</sub>
				</p>
			</div>
		</>
	)
}

export default App
